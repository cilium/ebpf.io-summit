import React from 'react';

import leftShape from './images/left-shape.svg';
import rightShape from './images/right-shape.svg';

const navigation = {
  main: [
    { name: 'What is eBPF?', href: 'https://ebpf.io/what-is-ebpf' },
    { name: 'Blog', href: 'https://ebpf.io/blog' },
    { name: 'Projects', href: 'https://ebpf.io/projects' },
    { name: 'Slack', href: 'https://ebpf.io/contribute' },
  ],
};
const Footer = () => (
  <footer className="relative overflow-hidden">
    <img
      className="absolute bottom-0 left-0 h-full xl:-left-1/4 md:hidden"
      src={leftShape}
      alt=""
      aria-hidden
    />
    <img
      className="absolute bottom-0 right-0 h-full xl:-right-1/4 md:hidden"
      src={rightShape}
      alt=""
      aria-hidden
    />
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

export default Footer;
