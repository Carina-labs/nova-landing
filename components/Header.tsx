import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { classNames } from 'utils/className'
import { LogoIcon } from './icons/LogoIcon'

const navigation = [
  { name: 'Stake', href: '#', current: true },
  { name: 'Swap', href: '#', current: true },
  { name: 'Pools', href: '#', current: true },
  { name: 'Govern', href: '#', current: true },
  { name: 'Dashboard', href: '#', current: true },
]

export const Header = () => {
  return (
    <Disclosure as="nav" className="w-full relative z-10 bg-tw-black">
      {({ open }) => (
        <>
          <div className="mx-32 lg:mx-44">
            <div className="w-full relative flex items-center h-22 justify-between">
              <div className="mx-auto lg:mx-0 lg:flex items-center">
                <LogoIcon />
              </div>
              <div className="block">
                <div className="hidden lg:flex space-x-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'text-tw-white hover:text-yellow-default focus:outline-none',
                        'px-3 py-2 rounded-md text-12 font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="bg-blue-default hover:bg-purple mt-0 ml-3 rounded-lg">
                    <button className="text-tw-white w-full flex items-center justify-center font-bold py-2 text-12 px-6">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
