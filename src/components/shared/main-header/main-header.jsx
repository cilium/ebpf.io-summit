import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import CiliumLogo from 'images/cilium-logo.inline.svg';
import Logo from 'images/logo.inline.svg';

import EnglishFlag from './icons/english.inline.svg';
import FrenchFlag from './icons/french.inline.svg';
import ChineseFlag from './icons/сhinese.inline.svg';
import SubMenu from './sub-menu';

const navigation = [
  { name: 'What is eBPF?', href: '/' },
  { name: 'Blog', href: '/' },
  { name: 'Projects', href: '/' },
  {
    name: `Conferences`,
    href: `/`,
    menuItems: [
      { name: 'eBPF Summit' },
      { name: '2021', href: '/summit-2021' },
      { name: '2020', href: '/summit-2020' },
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
  { name: `Slack`, href: `/` },
  {
    name: `About`,
    href: `/`,
    menuItems: [
      { name: 'Members', href: '/members' },
      { name: 'Governing Board', href: '/governing-board' },
      { name: 'eBPF Steering Committee', href: '/steering-committee' },
      { name: 'Charter', href: '/charter' },
      { name: 'How to Contribute', href: '/how-to-contribute' },
    ],
  },
];

const languages = [
  { icon: EnglishFlag, name: 'English' },
  { icon: FrenchFlag, name: 'Français' },
  { icon: ChineseFlag, name: '简体中文' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MainHeader = () => (
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
            <div className="flex space-x-10 items-center lg:hidden lg:space-x-3.5">
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
              <div className="absolute -translate-y-1/2 top-1/2 -left-36">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-black',
                          'group bg-white rounded-md flex items-center text-base focus:outline-none font-bold leading-none transition-colors duration-200 hover:text-gray-1'
                        )}
                      >
                        <EnglishFlag className="mr-3" />
                        <span>English</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-900' : 'text-black',
                            'h-5 w-5 group-hover:text-gray-1 transition-colors duration-200'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          className="absolute z-10 w-screen max-w-[180px] px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
                          static
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900 ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {languages.map(({ icon: Icon, name }) => (
                                <button
                                  type="button"
                                  key={name}
                                  className="flex items-center px-3 py-2 -m-3 space-x-5 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                >
                                  <Icon />
                                  <span>{name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
              <Link className="block pl-8 border-l-2 border-gray-2" to="https://cilium.io/">
                <CiliumLogo />
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
);

export default MainHeader;
