import React from 'react'
import { LogoIcon } from './icons/LogoIcon'

export const Footer = () => {
  return (
    <footer
      className="relative z-20 xl:w-[1300px] mx-auto"
      aria-labelledby="footer-heading"
    >
      <div className="hidden w-full justify-between md:flex py-12">
        <div>
          <LogoIcon />
        </div>
        <div className="mt-12 md:mt-0">
          <h3 className="text-12 lg:text-20 font-semibold text-yellow-default uppercase">
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
          <h3 className="text-12 lg:text-20 font-semibold text-yellow-default tracking-wider uppercase">
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
        <div className="mt-12 md:mt-0">
          <h3 className="text-12 lg:text-20 font-semibold text-yellow-default tracking-wider uppercase">
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
