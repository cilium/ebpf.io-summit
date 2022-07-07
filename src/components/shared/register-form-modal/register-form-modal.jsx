import PropTypes from 'prop-types';
import React from 'react';

import CustomModal from 'components/shared/custom-modal';
import Heading from 'components/shared/heading';
import HubspotForm from 'components/shared/hubspot-form';
import CloseIcon from 'icons/close.inline.svg';

const HUBSPOT_FORM_ID = 'ecd4bee1-a31f-4c5c-83b6-ee7df83c885d';

const RegisterFormModal = ({ isOpen, closeModal }) => (
  <CustomModal
    className="relative p-11 overflow-scroll lg:p-8 md:py-7"
    title="Register form"
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <CloseIcon className="absolute w-4 h-4 top-4 right-5" role="button" onClick={closeModal} />
    <Heading className="text-center" size="lg" tag="h2">
      Register for eBPF Summit
    </Heading>
    <HubspotForm className="min-h-[400px] mt-8" hubspotFormId={HUBSPOT_FORM_ID} />
  </CustomModal>
);

RegisterFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default RegisterFormModal;
