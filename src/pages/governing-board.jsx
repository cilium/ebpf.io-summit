/* eslint-disable react/prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import HeroFoundation from 'components/shared/hero-foundation';
import MemberCards from 'components/shared/member-cards';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const GoverningBoardPage = () => {
  const { avatar1, avatar2, avatar3, avatar4 } = useStaticQuery(graphql`
    query {
      avatar1: file(relativePath: { eq: "pages/governing-board/avatar-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 202)
        }
      }
      avatar2: file(relativePath: { eq: "pages/governing-board/avatar-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 202)
        }
      }
      avatar3: file(relativePath: { eq: "pages/governing-board/avatar-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 202)
        }
      }
      avatar4: file(relativePath: { eq: "pages/governing-board/avatar-4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 202)
        }
      }
    }
  `);
  const governingBoard = {
    title: 'Governing Board',
    description:
      'The eBPF Foundation Governing Board (GB) is responsible for marketing and other business oversight and budget decisions.',
    items: [
      {
        avatar: avatar1,
        name: 'Jane Cooper',
        position: 'CEO and Founder',
        twitterUrl: '',
        linkedinUrl: '',
      },
      {
        avatar: avatar2,
        name: 'Cameron Williamson',
        position: 'Head of Business Development',
        twitterUrl: '',
        linkedinUrl: '',
      },
      {
        avatar: avatar3,
        name: 'Kristin Watson',
        position: 'Senior Success Manager',
        twitterUrl: '',
        linkedinUrl: '',
      },
      {
        avatar: avatar4,
        name: 'Devon Lane',
        position: 'Marketing Specialist',
        twitterUrl: '',
        linkedinUrl: '',
      },
    ],
  };

  return (
    <MainLayout>
      <HeroFoundation />
      <MemberCards {...governingBoard} />
    </MainLayout>
  );
};
export default GoverningBoardPage;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Governing Board',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
