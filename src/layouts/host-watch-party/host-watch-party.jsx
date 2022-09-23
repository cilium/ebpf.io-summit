import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/pages/host-watch-party/footer';
import Header from 'components/pages/host-watch-party/header';
import SEO from 'components/shared/seo';

const HostWatchPartyLayout = ({ path, children, seo }) => (
  <>
    <SEO data={{ slug: path, ...seo }} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

HostWatchPartyLayout.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default HostWatchPartyLayout;
