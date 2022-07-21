import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { classNames } from 'utils/className'

import { LogoIcon } from './icons/LogoIcon'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Work', href: '#', current: true },
  { name: 'Ecosystem', href: '#', current: true },
  { name: 'Audits', href: '#', current: true },
  { name: 'Partners', href: '#', current: true },
]

export const Header = () => {
  return (
    <Disclosure as="nav" className="bg-tw-black">
      {({ open }) => (
        <>
          <div className="max-w-4xl mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-tw-white hover:text-yellow-default hover:bg-tw-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center mr-20">
                  <LogoIcon />
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'text-tw-white hover:text-yellow-default hover:bg-tw-gray-800 focus:outline-none',
                          'px-3 py-2 rounded-md text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-white'
                      : 'text-yellow-default hover:bg-tw-gray-700',
                    'px-3 py-2 rounded-md text-sm font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
