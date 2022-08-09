import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { LogoIcon } from './icons/LogoIcon'

export const Header = () => {
  return (
    <Disclosure as="nav" className="w-full relative z-20 bg-tw-black">
      <div className="max-w-[1050px] lg:mx-auto">
        <div className="w-full relative flex items-center h-[50px] md:h-[4.7rem] justify-between">
          <div className="mx-auto md:mx-0 md:flex items-center">
            <LogoIcon />
          </div>
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
    </Disclosure>
  )
}
