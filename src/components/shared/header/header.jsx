import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import CiliumLogo from 'images/cilium-logo.inline.svg';
import Logo from 'images/logo.inline.svg';

import Languages from './languages';
import SubMenu from './sub-menu';

const navigation = [
  { name: 'What is eBPF?', href: 'https://ebpf.io/what-is-ebpf' },
  { name: 'Blog', href: 'https://ebpf.io/blog' },
  { name: 'Projects', href: 'https://ebpf.io/projects' },
  {
    name: `Conferences`,
    menuItems: [
      { name: 'eBPF Summit' },
      { name: '2021', href: '/summit-2021' },
      { name: '2020', href: 'https://ebpf.io/summit-2020' },
      { name: 'eBPF Track (LPC)' },
      {
        name: '2021 CFP',
        href: 'https://lore.kernel.org/bpf/6d225920-9ecc-ef24-2bf8-848ca86c7fb0@iogearbox.net/',
      },
      { name: '2020', href: 'https://linuxplumbersconf.org/event/7/sessions/91/#all' },
      { name: '2019', href: 'https://linuxplumbersconf.org/event/4/sessions/62/#20190911' },
      { name: '2018', href: 'http://vger.kernel.org/lpc-bpf2018.html' },
      {
        name: '2017',
        href: 'https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#day_2017_09_15',
      },
      { name: 'bpfconf (LSF/MM/BPF)' },
      {
        name: '2021 CFP',
        href: 'https://lore.kernel.org/bpf/60997079.1c69fb81.77f3f.a045@mx.google.com/',
      },
      {
        name: '2019',
        href: 'http://vger.kernel.org/bpfconf2019.html',
      },
    ],
  },
  { name: `Slack`, href: `https://ebpf.io/slack` },
  {
    name: `About`,
    menuItems: [
      { name: 'Members', href: '/members' },
      { name: 'Governing Board', href: '/governing-board' },
      { name: 'eBPF Steering Committee', href: '/steering-committee' },
      { name: 'Charter', href: '/charter' },
      { name: 'How to Contribute', href: 'https://ebpf.io/contribute' },
    ],
  },
];

const mobileNavigation = [
  { name: 'What is eBPF?', href: 'https://ebpf.io/what-is-ebpf' },
  { name: 'Blog', href: 'https://ebpf.io/blog' },
  { name: 'Projects', href: 'https://ebpf.io/projects' },
  { name: `Slack`, href: `https://ebpf.io/slack` },
  { name: 'Members', href: '/members' },
  { name: 'Governing Board', href: '/governing-board' },
  { name: 'eBPF Steering Committee', href: '/steering-committee' },
  { name: 'Charter', href: '/charter' },
  { name: 'How to Contribute', href: 'https://ebpf.io/contribute' },
];

const Header = ({ switchLanguages }) => (
  <Popover>
    {({ open }) => (
      <>
        <Container className="pt-5 pb-4" large>
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
            <div className="flex items-center space-x-10 xl:space-x-8 lg:hidden">
              {navigation.map(({ name, href, menuItems }) => {
                const hasSubmenu = menuItems?.length > 0;
                return (
                  <Fragment key={name}>
                    {hasSubmenu ? (
                      <SubMenu name={name} href={href} menuItems={menuItems} />
                    ) : (
                      <a
                        href={href}
                        className="font-bold leading-none transition-colors duration-200 hover:text-gray-1"
                      >
                        {name}
                      </a>
                    )}
                  </Fragment>
                );
              })}
            </div>
            <div className="relative lg:hidden">
              {switchLanguages && <Languages />}
              <Link
                className="block"
                to="https://cilium.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiliumLogo className="xl:h-7 xl:w-auto" />
              </Link>
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
                {mobileNavigation.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="block px-3 py-2 font-medium text-black transition-colors duration-200 rounded-md hover:text-gray-1 hover:bg-gray-5"
                  >
                    {name}
                  </a>
                ))}
              </div>
              <Link
                className="block px-4 pb-4"
                to="https://cilium.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiliumLogo />
              </Link>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

export default Header;
