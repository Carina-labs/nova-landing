import { ChatIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { Stats } from './Stats'

export const Hero = () => {
  useEffect(() => {
    const downCallback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInDtoU')
        } else {
          entry.target.classList.remove('animate-fadeInDtoU')
        }
      })
    }

    const downObserver = new IntersectionObserver(downCallback)

    const down = document.querySelectorAll('#down')
    down.forEach(function (target) {
      downObserver.observe(target)
    })
  }, [])
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Image
          className="z-0 h-auto"
          src="/assets/BG_Landiing1.png"
          alt="bg1"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div
          id="down"
          className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="tracking-tight font-bold sm:text-5xl md:text-6xl text-48">
                <span className="text-tw-white block xl:inline">
                  Ultimate money lego
                </span>{' '}
                <span className="text-tw-white block xl:inline">
                  for staked assets
                </span>
              </h1>
              <p className="text-tw-white mt-3 pb-10 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <span className="block">
                  Supernova will enable liquid staking on Cosmos through
                </span>
                <span className="block">
                  a combination of ICA, proprietary module and IBC query
                </span>
              </p>
              <div className="mt-12 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="bg-blue-default hover:bg-purple rounded-md mt-3 sm:mt-0 sm:ml-3">
                  <button className="text-tw-white w-full flex items-center justify-center px-8 py-3 text-base font-bold rounded-md   md:py-4 md:text-lg md:px-10">
                    Follow for Updates
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Stats />
      </div>
    </div>
  )
}
