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
    <div className="relative overflow-hidden mx-32 lg:mx-44">
      <div className="w-full">
        <div
          id="down"
          className="relative pb-8 sm:pb-16 md:pb-20 text-left flex justify-start lg:pb-28 xl:pb-48 pt-12"
        >
          <main className="mt-48 w-full">
            <h1 className="text-center lg:text-left font-bold text-48 leading-16">
              <span className="text-tw-white block">Ultimate money lego </span>
              <span className="text-tw-white block">for staked assets</span>
            </h1>
            <p className="text-center lg:text-left text-tw-white pb-16 mt-10 text-18">
              <span className="block">
                Supernova will enable liquid staking on Cosmos through
              </span>
              <span className="block">
                a combination of ICA, proprietary module and IBC query.
              </span>
            </p>
            <div className="mt-12 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:mt-18">
              <div className="bg-blue-default hover:bg-purple mt-3 sm:mt-0 rounded-2xl">
                <Link href="https://twitter.com/Supernovazone">
                  <a target="_blank">
                    <button className="text-tw-white w-full flex items-center justify-center py-3 text-18 font-bold md:py-4 md:text-lg md:px-12">
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
