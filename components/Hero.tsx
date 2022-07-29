import Link from 'next/link'
import React, { useEffect } from 'react'

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
    <div className="relative overflow-hidden mx-10 md:mx-28 xl:mx-44 2xl:mx-100 3xl:mx-120">
      <div className="w-full">
        <div
          id="down"
          className="relative text-left flex justify-start pb-8  md:pb-20 lg:pb-28 pt-12 2xl:pt-30"
        >
          <main className="mt-12 md:mt-48 w-full">
            <h1 className="text-center font-bold text-24 md:leading-16 md:text-48 lg:text-left xl:leading-20 xl:text-64 2xl:leading-24 2xl:text-90">
              <span className="text-tw-white block">Ultimate money lego </span>
              <span className="text-tw-white block">for staked assets</span>
            </h1>
            <p className="text-center lg:text-left text-tw-white pb-10 mt-10 text-8 md:text-18 xl:text-20 2xl:leading-12 2xl:text-26">
              <span className="block">
                Supernova will enable liquid staking on Cosmos through
              </span>
              <span className="block">
                a combination of ICA, proprietary module and IBC query.
              </span>
            </p>
            <div className="mt-12 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:mt-18">
              <div className="bg-blue-default hover:bg-purple mt-3 rounded-2xl">
                <Link href="https://twitter.com/Supernovazone">
                  <a target="_blank">
                    <button className="text-tw-white w-full flex items-center justify-center font-bold py-3 text-12 sm:px-10 md:py-4 md:text-lg md:px-12 2xl:text-24">
                      Follow for Updates
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
