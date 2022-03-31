/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/shared/content';
import HeroFoundation from 'components/shared/hero-foundation';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const StaticPage = ({ data, location: { pathname } }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <MainLayout>
      <SEO data={{ title: `eBPF ${frontmatter.title}`, slug: pathname }} />
      <HeroFoundation title={frontmatter.title} description={frontmatter.description} />
      <Content content={html} pathname={pathname} />
    </MainLayout>
  );
};

export default StaticPage;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`;
