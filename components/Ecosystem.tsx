import React, { useEffect } from 'react'

export const Ecosystem = () => {
  useEffect(() => {
    const downCallback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInDtoU')
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
    <div
      id="down"
      className="px-[1.7rem] md:block relative z-20 mt-[5.2rem] md:mt-[16rem] mb-[5.4rem] md:mb-[20rem] overflow-hidden max-w-[1050px] mx-auto"
    >
      <h1 className="text-tw-white font-extrabold text-center text-24 md:text-32 lg:text-40 xl:text-48 2xl:text-62 3xl:text-64">
        Supernova Ecosystem
      </h1>
      <div className="w-full mx-auto">
        <dl className="mt-[1.5rem] md:mt-[4.5rem] py-2 lg:flex lg:justify-center">
          {/* ATOM */}
          <div className="md:w-1/3 h-[140px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-[1.1rem] flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[80px] h-[80px]" src="/assets/ATOM.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left font-bold text-gray-500 truncate text-20 xl:text-28">
                ATOM
              </dt>
              <dd className="mt-1 text-left font-medium text-black text-10 xl:text-14">
                Cosmos is the Internet of Blockchains.
              </dd>
            </div>
          </div>
          {/* OSMO */}
          <div className="md:w-1/3 h-[140px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-[1.1rem] flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[80px] h-[80px]" src="/assets/OSMO.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left font-bold text-gray-500 truncate text-20 xl:text-28">
                OSMO
              </dt>
              <dd className="mt-1 text-left font-medium text-black text-10 xl:text-14">
                A cross-chain automated market maker(AMM) with the Cosmos SDK.
              </dd>
            </div>
          </div>
          {/* JUNO */}
          <div className="md:w-1/3 h-[140px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-[1.1rem] flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[80px] h-[80px]" src="/assets/JUNO.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left font-bold text-gray-500 truncate text-20 xl:text-28">
                JUNO
              </dt>
              <dd className="mt-1 text-left font-medium text-black text-10 xl:text-14">
                A decentralized, public, permission-less network for cross-chain
                smart contracts.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}
