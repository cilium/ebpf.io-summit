import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (process.env.GATSBY_SESSIONIZE_URL) {
      fetchScheduleData(setScheduleHTML);
    }
  }, []);

  return scheduleHTML ? (
    <section className="bg-gray-3 py-28 md:py-20" id="schedule">
      <Container>
        <Heading className="text-center" tag="h2">
          {title}
        </Heading>
        <DangerousHtml className="mt-10 md:mt-6" html={scheduleHTML} />
      </Container>
    </section>
  ) : null;
};

Schedule.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Schedule;
