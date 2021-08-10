import React from 'react';

import Button from '../button';
import Container from '../container';

const Banner = () => (
  <div className="bg-primary-4 min-h-[60px] flex items-center justify-center py-3">
    <Container className="flex items-center sm:space-y-2.5 sm:flex-col">
      <span className="mr-8 font-bold md:text-sm md:mr-4 sm:mr-0 sm:text-center">
        eBPF Summit 2021 on August 18-19, 2021 is coming!
      </span>
      <Button
        className="sm:self-center"
        size="xs"
        theme="with-border"
        to="https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register
      </Button>
    </Container>
  </div>
);

export default Banner;
