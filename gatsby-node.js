const fetch = require(`node-fetch`);

// Set expiration time as 24 hours in milliseconds
const expirationTime = 24 * 60 * 60 * 1000;

const createDataResolverFn =
  ({ fetchUrl, cacheKeyName, cache }) =>
  async () => {
    try {
      let data;
      const cacheKey = cacheKeyName;
      const cacheData = await cache.get(cacheKey);
      // Use cache if it is not expired
      if (cacheData && cacheData.created > Date.now() - expirationTime) {
        data = cacheData.data;
      } else {
        // Use setTimeout to avoid hitting API rate limit with a random delay with interval from 500ms to 1500ms
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 500));
        const sessionizeData = await fetch(fetchUrl);
        const html = await sessionizeData.text();
        if (!html) {
          throw new Error('Failed to fetch data');
        }
        data = html
          .replace(/(showLocalTimezone = true;)([\s\S]+)$/m, '$1sessionize.onLoad();$2')
          .replace(/&amp;/g, '&');
        await cache.set(cacheKey, {
          data,
          created: Date.now(),
        });
      }

      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch data');
    }
  };

exports.createResolvers = ({ createResolvers, cache }) => {
  createResolvers({
    Query: {
      sessionizeSpeakers: {
        type: 'String',
        resolve: createDataResolverFn({
          cache,
          fetchUrl: process.env.GATSBY_SESSIONIZE_URL,
          cacheKeyName: 'speaker-wall',
        }),
      },
      sessionizeSchedule: {
        type: 'String',
        resolve: createDataResolverFn({
          cache,
          fetchUrl: process.env.GATSBY_SESSIONIZE_SCHEDULE_URL,
          cacheKeyName: 'grid-smart',
        }),
      },
    },
  });
};
