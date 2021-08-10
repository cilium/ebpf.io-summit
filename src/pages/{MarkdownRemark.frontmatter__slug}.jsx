/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Content from 'components/shared/content';
import HeroFoundation from 'components/shared/hero-foundation';
import MainLayout from 'layouts/main';

const StaticPage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <MainLayout>
      <HeroFoundation />
      <Content title={frontmatter.title} content={html} />
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
      }
    }
  }
`;
