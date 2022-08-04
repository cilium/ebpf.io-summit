const fetch = require(`node-fetch`);

exports.createResolvers = ({ createResolvers, cache }) => {
  createResolvers({
    Query: {
      sessionizeSpeakers: {
        type: 'String',
        resolve: async () => {
          try {
            let speakers;
            // Set expiration time as 24 hours in milliseconds
            const expirationTime = 24 * 60 * 60 * 1000;
            const cacheKey = `speaker-wall`;
            const cacheData = await cache.get(cacheKey);
            // Use cache if it is not expired
            if (cacheData && cacheData.created > Date.now() - expirationTime) {
              speakers = cacheData.speakers;
            } else {
              // Use setTimeout to avoid hitting API rate limit with a random delay with interval from 500ms to 1500ms
              await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 500));
              const sessionizeData = await fetch(process.env.GATSBY_SESSIONIZE_URL);
              const html = await sessionizeData.text();
              if (!html) {
                throw new Error('Failed to fetch speakers');
              }
              speakers = html
                .replace(/(showLocalTimezone = true;)([\s\S]+)$/m, '$1sessionize.onLoad();$2')
                .replace(/&amp;/g, '&');
              await cache.set(cacheKey, {
                speakers,
                created: Date.now(),
              });
            }

            return speakers;
          } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch speakers');
          }
        },
      },
    },
  });
};
