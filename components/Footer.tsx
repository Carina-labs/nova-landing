import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LogoIcon } from './icons/LogoIcon'

export const Footer = () => {
  return (
    <footer
      className="border-yellow-default border-t-2 relative z-20 xl:w-[1300px] mx-auto"
      aria-labelledby="footer-heading"
    >
      <div className="block text-left w-full justify-between py-[3.2rem] md:flex md:py-[4.8rem] px-[3rem]">
        <div className="block">
          <LogoIcon />
          <div className="hidden md:flex justify-start align-center mt-[2.4rem]">
            <Link href="https://twitter.com/Supernovazone">
              <a target="_blank">
                <div className="mr-[1.1rem]">
                  <Image
                    alt="twitter"
                    width={25}
                    height={25}
                    src="/assets/twitter.svg"
                  />
                </div>
              </a>
            </Link>

            <Link href="https://discord.com/invite/D43YEygt">
              <a target="_blank">
                <div className="mr-[1.1rem]">
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
                <div className="mr-[1.1rem]">
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
        <div className="hidden md:block mt-12 md:mt-0">
          <h3 className="text-12 lg:text-20 font-semibold text-yellow-default">
            Technology
          </h3>
          <ul role="list" className="mt-3 space-y-2">
            {navigation.technology.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-10 lg:text-15 text-tw-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block mt-12 md:mt-0">
          <h3 className="text-12 lg:text-20 font-semibold text-yellow-default tracking-wider">
            Community
          </h3>
          <ul role="list" className="mt-3 space-y-2">
            {navigation.community.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-10 lg:text-15 text-tw-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block mt-12 md:mt-0">
          <h3 className="text-12 lg:text-20 font-semibold text-yellow-default tracking-wider">
            More
          </h3>
          <ul role="list" className="mt-3 space-y-2">
            {navigation.about.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-10 lg:text-15 text-tw-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Version */}
        <div className="flex justify-between md:hidden mr-11">
          <div className="mt-12 md:mt-0">
            <h3 className="text-12 lg:text-20 font-semibold text-yellow-default">
              Technology
            </h3>
            <ul role="list" className="mt-3 space-y-2">
              {navigation.technology.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-10 lg:text-15 text-tw-white hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-12 lg:text-20 font-semibold text-yellow-default tracking-wider">
              Community
            </h3>
            <ul role="list" className="mt-3 space-y-2">
              {navigation.community.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-10 lg:text-15 text-tw-white hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between md:hidden">
          <div className="mt-12 md:mt-0">
            <h3 className="text-12 lg:text-20 font-semibold text-yellow-default tracking-wider">
              More
            </h3>
            <ul role="list" className="mt-3 space-y-2">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-10 lg:text-15 text-tw-white hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex mt-12 md:mt-0">
            <Link href="https://twitter.com/Supernovazone">
              <a target="_blank">
                <div className="mr-[1.1rem]">
                  <Image
                    alt="twitter"
                    width={25}
                    height={25}
                    src="/assets/twitter.svg"
                  />
                </div>
              </a>
            </Link>
            <Link href="https://discord.com/invite/D43YEygt">
              <a target="_blank">
                <div className="mr-[1.1rem]">
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
                <div className="mr-[1.1rem]">
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
    </footer>
  )
}

const navigation = {
  technology: [
    { name: 'Documentation', href: '#' },
    { name: 'Github - Soon', href: '#' },
  ],
  community: [
    { name: 'Twitter', href: 'https://twitter.com/Supernovazone' },
    { name: 'Discord', href: 'https://discord.com/invite/D43YEygt' },
  ],
  about: [
    { name: 'Contact us', href: 'https://twitter.com/Supernovazone' },
    { name: 'Medium', href: 'https://medium.com/supernovazone' },
    { name: 'F&Q - Soon', href: '#' },
  ],
}
