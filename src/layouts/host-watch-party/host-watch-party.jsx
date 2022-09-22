import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/pages/host-watch-party/footer';
import Header from 'components/pages/host-watch-party/header';
import SEO from 'components/shared/seo';

const HostWatchPartyLayout = ({ path, children, footerClassName }) => (
  <>
    <SEO data={{ slug: path }} />
    <Header />
    <main>{children}</main>
    <Footer className={footerClassName} />
  </>
);

HostWatchPartyLayout.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footerClassName: PropTypes.string,
};

HostWatchPartyLayout.defaultProps = {
  footerClassName: null,
};

export default HostWatchPartyLayout;
