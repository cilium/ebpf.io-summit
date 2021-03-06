import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect } from 'react';

import Container from 'components/shared/container';
import DangerousHtml from 'components/shared/dangerous-html';
import Heading from 'components/shared/heading';

const fetchSpeakersData = async (cb) => {
  try {
    const res = await fetch(process.env.GATSBY_SESSIONIZE_URL);
    const data = await res.text();
    cb(data);
  } catch (e) {
    // eslint-disable-next-line
    console.warn('Can not fetch the speakers:', { e });
  }
};

const SpeakerWall = ({ title }) => {
  const [speakersHTML, setSpeakersHTML] = useState('');

  const modifySessionizeScript = useCallback((html) => {
    // this requires for the sessionize logic to run
    // consistently
    const htmlWithModifiedScriptAndReplacedAmpersand = html
      .replace(/(showLocalTimezone = true;)([\s\S]+)$/m, '$1sessionize.onLoad();$2')
      .replace(/&amp;/g, '&');
    setSpeakersHTML(htmlWithModifiedScriptAndReplacedAmpersand);
  }, []);

  useEffect(() => {
    if (process.env.GATSBY_SESSIONIZE_URL) {
      fetchSpeakersData(modifySessionizeScript);
    }
  }, [modifySessionizeScript]);

  return (
    <section className="bg-white mt-40 lg:mt-32 md:mt-28 sm:mt-24" id="speakers">
      <Container className="min-h-[336px]">
        <Heading className="text-center" tag="h2">
          {title}
        </Heading>
        {speakersHTML ? (
          <DangerousHtml className="mt-14 md:mt-12 sm:mt-10" html={speakersHTML} />
        ) : null}
      </Container>
    </section>
  );
};

SpeakerWall.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SpeakerWall;
