import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { LogoIcon } from './icons/LogoIcon'

export const Header = () => {
  return (
    <Disclosure as="nav" className="relative z-20 bg-tw-black px-[3rem]">
      <div className="xl:w-[1300px] mx-auto ">
        <div className="w-full relative flex items-center h-[50px] md:h-[90px] justify-between">
          <div className="mx-auto lg:mx-0 lg:flex items-center">
            <LogoIcon />
          </div>
          <div className="hidden md:flex">
            <Link href="/">
              <a target="_blank" className="mr-6">
                <p className="text-white text-22">Docs</p>
              </a>
            </Link>
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
    </Disclosure>
  )
}
