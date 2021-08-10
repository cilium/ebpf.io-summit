import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SubMenu = ({ name, menuItems }) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? 'text-gray-900' : 'text-black',
            'group bg-white rounded-md inline-flex items-center text-base focus:outline-none font-bold leading-none transition-colors duration-200 hover:text-gray-1'
          )}
        >
          <span>{name}</span>
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
            className="absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
            static
          >
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900 ring-opacity-5">
              <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                {menuItems.map(({ name, href }, index) => (
                  <Fragment key={index}>
                    {!href ? (
                      <h3 className="-mb-2 font-bold tracking-wide uppercase text-gray-1">
                        {name}
                      </h3>
                    ) : (
                      <a
                        key={name}
                        href={href}
                        className="block px-3 py-2 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                      >
                        {name}
                      </a>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

SubMenu.propTypes = {};

SubMenu.defaultProps = {};

export default SubMenu;
