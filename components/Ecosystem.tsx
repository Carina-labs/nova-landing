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
      className="hidden md:block relative pt-80 pb-80 overflow-hidden mx-28 xl:mx-44 2xl:mx-100 3xl:mx-120"
    >
      <h1 className="text-tw-white text-40 font-extrabold text-center mb-8">
        Supernova Ecosystem
      </h1>
      <div className="w-full mx-auto">
        <dl className="mt-2 py-2 lg:flex lg:justify-center">
          {/* ATOM */}
          <div className="w-1/3 h-[200px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-2 flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[100px] h-[100px]" src="/assets/ATOM.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className=" text-left text-24 font-bold text-gray-500 truncate">
                ATOM
              </dt>
              <dd className="mt-1 text-left text-12 font-medium text-black">
                Cosmos is the Internet of Blockchains.
              </dd>
            </div>
          </div>
          {/* OSMO */}
          <div className="w-1/3 h-[200px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-2 flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[100px] h-[100px]" src="/assets/OSMO.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left text-24 font-bold text-gray-500 truncate">
                OSMO
              </dt>
              <dd className="mt-1 text-left text-12 font-medium text-black">
                A cross-chain automated market maker(AMM) protocol built using
                the Cosmos SDK.
              </dd>
            </div>
          </div>
          {/* JUNO */}
          <div className="w-1/3 h-[200px] lg:h-[180px] mx-auto px-6 lg:mx-2 mb-2 flex border-2 border-yellow-default bg-white shadow rounded-2xl overflow-hidden">
            <div className="w-1/3 pr-4 flex items-center">
              <img className="w-[100px] h-[100px]" src="/assets/JUNO.svg" />
            </div>
            <div className="w-2/3 my-auto">
              <dt className="text-left text-24 font-bold text-gray-500 truncate">
                JUNO
              </dt>
              <dd className="mt-1 text-left text-12 font-medium text-black">
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
