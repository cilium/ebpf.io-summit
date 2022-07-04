import PropTypes from 'prop-types';
import React from 'react';

import useHubspotForm from 'hooks/use-hubspot-form';

const HubspotForm = ({ hubspotFormId, className }) => {
  useHubspotForm('hubspot-form');
  return (
    <div className={className}>
      <div className="hubspot-form" data-form-id={hubspotFormId} />
    </div>
  );
};

HubspotForm.propTypes = {
  className: PropTypes.string,
  hubspotFormId: PropTypes.string.isRequired,
};

HubspotForm.defaultProps = {
  className: null,
};

export default HubspotForm;
