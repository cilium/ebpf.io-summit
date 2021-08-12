import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

import EnglishFlag from '../icons/english.inline.svg';
import FrenchFlag from '../icons/french.inline.svg';
import ChineseFlag from '../icons/сhinese.inline.svg';

const languages = [
  { icon: EnglishFlag, name: 'English' },
  { icon: FrenchFlag, name: 'Français' },
  { icon: ChineseFlag, name: '简体中文' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Languages = () => (
  <div className="absolute -translate-y-1/2 top-1/2 -left-44 2xl:-left-36 xl:-left-12">
    <Popover className="relative after:absolute after:w-px after:h-6 after:bg-gray-2 after:-right-8 after:top-1/2 after:-translate-y-1/2 2xl:after:-right-4 xl:after:hidden">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-black',
              'group bg-white rounded-md flex items-center text-base focus:outline-none font-bold leading-none transition-colors duration-200 hover:text-gray-1'
            )}
          >
            <EnglishFlag className="mr-3 xl:mr-0" />
            <span className="xl:hidden">English</span>
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
);

export default Languages;
