import { Disclosure } from '@headlessui/react'
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
    <Disclosure
      as="nav"
      className="xl:w-[1300px] mx-auto relative z-10 bg-tw-black "
    >
      <div className="mx-[2rem]">
        <div className="w-full relative flex items-center h-[50px] md:h-[90px] justify-between">
          <div className="mx-auto lg:mx-0 lg:flex items-center">
            <LogoIcon />
          </div>
          {/* <div className="block">
              <div className="hidden space-x-3 lg:flex ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'text-tw-white hover:text-yellow-default focus:outline-none',
                      'px-3 py-2 rounded-md text-12 font-medium lg:text-16 2xl:text-20 3xl:text-22',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="bg-blue-default hover:bg-purple mt-0 ml-3 rounded-lg">
                  <button className="text-tw-white w-full flex items-center justify-center font-bold py-2 text-12 px-6 lg:text-16 2xl:text-20 3xl:text-22">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </Disclosure>
  )
}
