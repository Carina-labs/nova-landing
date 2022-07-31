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
      className="hidden md:block relative pt-80 pb-80 overflow-hidden mx-28 xl:mx-44 2xl:mx-96 3xl:mx-160"
    >
      <h1 className="text-tw-white font-extrabold text-center text-24 md:text-32 lg:text-40 xl:text-48 2xl:text-62 3xl:text-64">
        Supernova Ecosystem
      </h1>
      <div className="w-full mx-auto">
        <dl className="mt-2 py-2 lg:flex lg:justify-center">
          {/* ATOM */}
          <div className="w-1/3 h-[160px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-2 flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[100px] h-[100px]" src="/assets/ATOM.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left font-bold text-gray-500 truncate text-24 xl:text-28 2xl:text-30 3xl:text-32">
                ATOM
              </dt>
              <dd className="mt-1 text-left font-medium text-black text-12 xl:text-14 2xl:text-16 3xl:text-18">
                Cosmos is the Internet of Blockchains.
              </dd>
            </div>
          </div>
          {/* OSMO */}
          <div className="w-1/3 h-[160px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-2 flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[100px] h-[100px]" src="/assets/OSMO.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left font-bold text-gray-500 truncate text-24 xl:text-28 2xl:text-30 3xl:text-32">
                OSMO
              </dt>
              <dd className="mt-1 text-left font-medium text-black text-12 xl:text-14 2xl:text-16 3xl:text-18">
                A cross-chain automated market maker(AMM) protocol built using
                the Cosmos SDK.
              </dd>
            </div>
          </div>
          {/* JUNO */}
          <div className="w-1/3 h-[160px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-2 flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[100px] h-[100px]" src="/assets/JUNO.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left font-bold text-gray-500 truncate text-24 xl:text-28 2xl:text-30 3xl:text-32">
                JUNO
              </dt>
              <dd className="mt-1 text-left font-medium text-black text-12 xl:text-14 2xl:text-16 3xl:text-18">
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
