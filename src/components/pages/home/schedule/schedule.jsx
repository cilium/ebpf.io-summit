import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const SESSIONIZE_URL = 'https://sessionize.com/api/v2/f3vhdjzc/view/GridSmart';

const Schedule = ({ title }) => {
  const [scheduleHTML, setScheduleHTML] = useState(null);
  useEffect(() => {
    fetch(SESSIONIZE_URL)
      .then((res) => res.text())
      .then((htmlText) => setScheduleHTML(htmlText));
  }, []);

  if (scheduleHTML) {
    return (
      <section className="bg-gray-3 py-28 md:py-20" id="schedule">
        <Container>
          <Heading className="text-center" tag="h2">
            {title}
          </Heading>
          <div className="mt-10" dangerouslySetInnerHTML={{ __html: scheduleHTML }} />
        </Container>
      </section>
    );
  }
  return null;
};

Schedule.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Schedule;
