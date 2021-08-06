import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';

const Ctf = ({ description, name, url }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "pages/capture-the-flag/ctf/image.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1008)
        }
      }
    }
  `);
  return (
    <section className="py-28 md:py-20">
      <Container className="text-xl md:text-lg" small>
        <GatsbyImage image={getImage(image)} alt="" />
        <p className="mt-28 md:mt-20">{description}</p>
        <div className="mt-8">
          <span className="font-bold">Moderator & Commentator:</span> The awesome{' '}
          <Link className="font-bold" theme="primary" to={url}>
            {name}
          </Link>
        </div>
      </Container>
    </section>
  );
};

Ctf.propTypes = {
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Ctf;
