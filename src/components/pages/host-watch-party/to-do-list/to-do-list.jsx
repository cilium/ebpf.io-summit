import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import EmailIcon from './images/email.inline.svg';
import FoodIcon from './images/food.inline.svg';
import PlaceIcon from './images/place.inline.svg';
import SwagIcon from './images/swag.inline.svg';
import WayIcon from './images/way.inline.svg';

const icons = {
  place: PlaceIcon,
  way: WayIcon,
  food: FoodIcon,
  email: EmailIcon,
  swag: SwagIcon,
};

const ToDoList = ({ title, list }) => (
  <section className="pt-36 pb-32 md:py-28 sm:py-24">
    <Container className="max-w-[800px] mx-auto">
      <Heading className="text-center leading-denser text-[40px]" tag="h2" size="lg">
        {title}
      </Heading>

      <ul className="border-t border-gray-6 border-dashed mt-10">
        {list.map(({ iconName, title, description, buttonText, buttonUrl }) => {
          const Icon = icons[iconName];
          return (
            <li
              className="flex py-8 border-b border-gray-6 border-dashed space-x-5 sm:space-x-3.5"
              key={title}
            >
              <Icon className="inline-block h-10 flex-shrink-0" />

              <div className="flex items-center justify-between space-x-2 w-full md:block md:space-x-0">
                <div>
                  <h3 className="font-bold leading-tight text-xl sm:text-lg">{title}</h3>
                  <p className="mt-2 text-lg sm:text-sm">{description}</p>
                </div>

                {buttonText && buttonUrl && (
                  <Button
                    className="rounded-lg h-10 px-6 md:mt-2 text-sm"
                    to={buttonUrl}
                    type="button"
                    theme="black"
                    size="none"
                  >
                    {buttonText}
                  </Button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

ToDoList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonUrl: PropTypes.string,
    })
  ).isRequired,
};

export default ToDoList;
