import PropTypes from 'prop-types';
import React from 'react';

const navigation = {
  main: [
    { name: 'What is eBPF?', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Slack', href: '#' },
  ],
};
const MainFooter = (props) => (
  <footer className="relative">
    <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
        {navigation.main.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <a
              href={item.href}
              className="font-bold text-black transition-colors duration-200 hover:text-gray-1"
            >
              {item.name}
            </a>
          </div>
        ))}
      </nav>
    </div>
  </footer>
);

MainFooter.propTypes = {};

MainFooter.defaultProps = {};

export default MainFooter;
