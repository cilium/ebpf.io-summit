import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import DangerousHtml from 'components/shared/dangerous-html';
import Heading from 'components/shared/heading';

const fetchScheduleData = async (cb) => {
  try {
    const res = await fetch(process.env.GATSBY_SESSIONIZE_URL);
    const data = await res.text();
    cb(data);
  } catch (e) {
    // eslint-disable-next-line
    console.warn('Can not fetch the schedule:', { e });
  }
};

const Schedule = ({ title }) => {
  const [scheduleHTML, setScheduleHTML] = useState('');

  const modifySessionizeScript = useCallback((html) => {
    // this requires for the sessionize logic to run
    // consistently
    const htmlWithModifiedScriptAndReplacedAmpersand = html
      .replace(/(showLocalTimezone = true;)([\s\S]+)$/m, '$1sessionize.onLoad();$2')
      .replace(/&amp;/g, '&');
    setScheduleHTML(htmlWithModifiedScriptAndReplacedAmpersand);
  }, []);

  useEffect(() => {
    if (process.env.GATSBY_SESSIONIZE_URL) {
      fetchScheduleData(modifySessionizeScript);
    }
  }, [modifySessionizeScript]);

  return (
    <section className="bg-gray-3 py-28 md:py-20" id="schedule">
      <Container>
        <Heading className="text-center" tag="h2">
          {title}
        </Heading>
        {scheduleHTML ? <DangerousHtml className="mt-6" html={scheduleHTML} /> : null}
      </Container>
    </section>
  );
};

Schedule.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Schedule;
