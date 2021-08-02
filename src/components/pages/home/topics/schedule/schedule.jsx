import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const SESSIONIZE_URL = 'https://sessionize.com/api/v2/f3vhdjzc/view/GridSmart';

const Schedule = ({ className }) => {
  const [scheduleHTML, setScheduleHTML] = useState(null);
  useEffect(() => {
    fetch(SESSIONIZE_URL)
      .then((res) => res.text())
      .then((htmlText) => setScheduleHTML(htmlText));
  }, []);
  return <div className={className} dangerouslySetInnerHTML={{ __html: scheduleHTML }} />;
};

Schedule.propTypes = {
  className: PropTypes.string,
};

Schedule.defaultProps = {
  className: null,
};

export default Schedule;
