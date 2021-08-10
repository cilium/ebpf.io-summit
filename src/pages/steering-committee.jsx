/* eslint-disable react/prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import HeroFoundation from 'components/shared/hero-foundation';
import MemberCards from 'components/shared/member-cards';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const SteeringCommitteePage = ({ location: { pathname } }) => {
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
  const steeringCommittee = {
    title: 'eBPF Steering Committee',
    description:
      'The eBPF Steering Committee (BSC) is responsible for the technical direction and overall vision of eBPF, the collaboration among projects, making recommendations to the governing board, defining the minimal requirements of eBPF runtimes, overseeing community events, maintaining project lifecycle procedures, and communicating on behalf of the eBPF community.',
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
      <SEO data={{ title: 'eBPF Steering Committee', slug: pathname }} />
      <HeroFoundation />
      <MemberCards {...steeringCommittee} />
    </MainLayout>
  );
};

export default SteeringCommitteePage;
