import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { LogoIcon } from './icons/LogoIcon'

const navigation = [
  { name: 'Documents', href: '#', current: true },
  { name: 'Twitter', href: 'https://twitter.com/Supernovazone', current: true },
  {
    name: 'Discord',
    href: 'https://discord.com/invite/AZUrXKGq8t',
    current: false,
  },
  { name: 'Medium', href: 'https://medium.com/supernovazone', current: false },
]

export const Header = () => {
  const [hide, setHide] = useState(true)
  console.log('hide', hide)
  return (
    <Disclosure as="nav" className="w-full relative z-20 bg-tw-black">
      {({ open }) => (
        <>
          <div className="max-w-[1050px] mx-[1.3rem] lg:mx-auto">
            <div className="w-full relative flex items-center h-[50px] md:h-[4.7rem] justify-between">
              <div className=" md:mx-0 md:flex items-center">
                <LogoIcon />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon
                      onClick={() => setHide(true)}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      onClick={() => setHide(false)}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              {hide ? null : (
                <div className="absolute top-12 bottom-0 -right-[21px] items-center justify-center md:hidden">
                  {navigation.map((item) => (
                    <div className="flex-col bg-tw-black px-3 py-2 text-sm font-medium">
                      <Link href={item.href}>
                        <a
                          target="_blank"
                          key={item.name}
                          className=" text-white"
                        >
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              <div className="hidden md:flex">
                <Link href="/">
                  <a target="_blank" className="mb-[0.5rem] mr-[1.7rem]">
                    <p className="text-white text-22">Docs</p>
                  </a>
                </Link>
                <Link href="https://twitter.com/Supernovazone">
                  <a target="_blank">
                    <div className="mt-1 mr-[1.7rem]">
                      <Image
                        alt="twitter"
                        width={25}
                        height={25}
                        src="/assets/twitter.svg"
                      />
                    </div>
                  </a>
                </Link>
                <Link href="https://discord.com/invite/AZUrXKGq8t">
                  <a target="_blank">
                    <div className="mt-1 mr-[1.7rem]">
                      <Image
                        alt="discord"
                        width={25}
                        height={25}
                        src="/assets/discord.svg"
                      />
                    </div>
                  </a>
                </Link>
                <Link href="https://medium.com/supernovazone">
                  <a target="_blank">
                    <div className="mt-1 mr-[1.7rem]">
                      <Image
                        alt="medium"
                        width={25}
                        height={25}
                        src="/assets/medium.svg"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
