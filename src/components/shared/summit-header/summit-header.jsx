import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const navigation = [
  { name: 'Featured Speakers', href: '/summit-2021/#featured-speakers' },
  { name: 'Information', href: '/summit-2021/#information' },
  { name: 'Schedule', href: '/summit-2021/#schedule' },
  { name: 'CTF', href: '/summit-2021/ctf' },
  { name: `Last year's summit`, href: `/summit-2021/#last-year's-summit` },
];

const SummitHeader = () => (
  <div className="relative bg-primary-1">
    <Popover>
      {({ open }) => (
        <>
          <Container className="pt-5 pb-4">
            <img className="absolute right-6 top-full" src={shape1} alt="" aria-hidden />
            <img className="absolute left-0 top-full" src={shape2} alt="" aria-hidden />
            <nav className="relative flex items-center justify-between" aria-label="Global">
              <div className="flex items-center flex-none lg:flex-1 -mt-2.5">
                <div className="flex items-center justify-between w-auto lg:w-full">
                  <Link to="https://ebpf.io/">
                    <span className="sr-only">eBPF</span>
                    <Logo className="w-auto h-15 lg:w-auto lg:h-8" aria-label="Logo" />
                  </Link>
                  <div className="items-center hidden -mr-2 lg:flex">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-black rounded-md bg-gray-5 hover:text-gray-5 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="flex space-x-10 lg:hidden lg:space-x-3.5">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-bold leading-none transition-colors duration-200 hover:text-gray-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex space-x-4 lg:hidden">
                <Button
                  to="https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  theme="black"
                >
                  Register
                </Button>
              </div>
            </nav>
          </Container>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              className="absolute inset-x-0 top-0 z-50 hidden p-2 transition origin-top-right transform lg:block"
              focus
              static
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900 ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <Logo className="w-auto h-8" aria-label="Logo" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-black bg-white rounded-md hover:text-gray-5 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 font-medium text-black transition-colors duration-200 rounded-md hover:text-gray-1 hover:bg-gray-5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <Button
                  className="w-full"
                  to="https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </Button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </div>
);

export default SummitHeader;
