import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import CustomModal from 'components/shared/custom-modal';
import Heading from 'components/shared/heading';
import HubspotForm from 'components/shared/hubspot-form';
import Link from 'components/shared/link';
import CloseIcon from 'icons/close.inline.svg';
import Logo from 'images/logo.inline.svg';

import SubMenu from './sub-menu';

const HUBSPOT_FORM_ID = 'ecd4bee1-a31f-4c5c-83b6-ee7df83c885d';

const navigation = [
  { name: 'Summit', href: '/summit-2022/' },
  { name: 'Agenda', href: '/summit-2022/#agenda' },
  { name: 'Information', href: '/summit-2022/#information' },
  { name: `Last year's summit`, href: `/summit-2022/#last-year's-summit` },
  {
    name: 'Parties',
    menuItems: [
      { name: 'Host a watch party', href: '/host-a-watch-party' },
      {
        name: 'Zurich',
        href: 'https://community.cncf.io/events/details/cncf-cilium-zurich-presents-ebpf-summit-watch-party/',
        target: '_blank',
      },
    ],
  },
];

const mobileNavigation = [
  { name: 'Summit', href: '/summit-2022/' },
  { name: 'Agenda', href: '/summit-2022/#agenda' },
  { name: 'Information', href: '/summit-2022/#information' },
  { name: `Last year's summit`, href: `/summit-2022/#last-year's-summit` },
  { name: 'Host a watch party', href: '/host-a-watch-party' },
  {
    name: 'Zurich',
    href: 'https://community.cncf.io/events/details/cncf-cilium-zurich-presents-ebpf-summit-watch-party/',
    target: '_blank',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Popover>
        {({ open }) => (
          <>
            <Container className="pt-5 pb-4">
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
                  {navigation.map(({ name, href, menuItems, target }, index) => {
                    const hasSubmenu = menuItems?.length > 0;
                    return (
                      <Fragment key={index}>
                        {hasSubmenu ? (
                          <SubMenu name={name} href={href} menuItems={menuItems} />
                        ) : (
                          <a
                            className="font-bold leading-none transition-colors duration-200 hover:text-gray-1"
                            href={href}
                            target={target}
                          >
                            {name}
                          </a>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
                <div className="flex space-x-4 lg:hidden">
                  <Button
                    className="rounded-lg h-10 text-sm px-6"
                    size="none"
                    theme="black"
                    onClick={openModal}
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
                  <div className="px-2 pt-2">
                    {mobileNavigation.map((item, index) => (
                      <a
                        className="block px-3 py-2 font-medium text-black transition-colors duration-200 rounded-md hover:text-gray-1 hover:bg-gray-5"
                        href={item.href}
                        target={item.target}
                        key={index}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="my-6 mx-5">
                    <Button className="w-full" theme="orange" type="button" onClick={openModal}>
                      Register
                    </Button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <CustomModal
        className="relative p-11 overflow-scroll lg:p-8 md:py-7"
        title="Register form"
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <CloseIcon className="absolute w-4 h-4 top-4 right-5" role="button" onClick={closeModal} />
        <Heading className="text-center" size="lg" tag="h2">
          Register for eBPF Summit
        </Heading>
        <HubspotForm className="min-h-[400px] mt-8" hubspotFormId={HUBSPOT_FORM_ID} />
      </CustomModal>
    </div>
  );
};

export default Header;
