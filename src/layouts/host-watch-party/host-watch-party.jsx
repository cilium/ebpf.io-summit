import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/pages/host-watch-party/footer';
import Header from 'components/pages/host-watch-party/header';

const HostWatchPartyLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

HostWatchPartyLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HostWatchPartyLayout;
