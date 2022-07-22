import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

export const Work = () => {
  return (
    <div className="relative bg-tw-black pt-16 pb-32 overflow-hidden">
      <h1 className="text-tw-white text-34 font-extrabold text-center tracking-tight mb-8">
        How it works
      </h1>

      <div className="border-2 border-yellow-default rounded-md mt-12 mx-24 bg-tw-white">
        {/* 01 Liquid Staking */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-36 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-6 w-6 rounded-md flex items-center justify-center">
                  <p className="text-blue-default font-bold text-24">01</p>
                </span>
              </div>
              <div className="mt-2">
                <h2 className="text-24 font-extrabold tracking-tight text-gray-900 mb-8">
                  Liquid Staking
                </h2>
                <ul className="list-disc font-normal lg:text-lg md:text-base mb-3 md:ml-5 ml-4 md:mt-0 mt-3">
                  <li className="mt-3 text-18 text-black">
                    Stake and mint your snAssets to unlock your liquidity while
                    staking!
                  </li>
                  <li className="mt-3 text-18 text-black">
                    SnAssets also auto-compound your staking reward to make the
                    best yield
                  </li>
                  <li className="mt-3 text-18 text-black">
                    You can redeem your assets by burning snAssets
                  </li>
                  <li className="mt-3 text-18 text-black">
                    We are rapidly building something to make snAssets’ own
                    utility!
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
            <div className="border-2 border-yellow-default bg-tw-black rounded-md w-full h-full">
              <img src="../../assets/icon-01.svg" />
            </div>
          </div>
        </div>

        {/* 02 Staked Swap */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-36 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
            <div>
              <div>
                <span className="h-6 w-6 rounded-md flex items-center justify-center">
                  <p className="text-blue-default font-bold text-24">02</p>
                </span>
              </div>
              <div className="mt-2">
                <h2 className="text-24 font-extrabold tracking-tight text-gray-900 mb-8">
                  Staked swap
                </h2>
                <ul className="list-disc font-normal lg:text-lg md:text-base mb-3 md:ml-5 ml-4 md:mt-0 mt-3">
                  <li className="mt-3 text-18 text-black">
                    Swap your shadow tokens with our novel AMM
                  </li>
                  <li className="mt-3 text-18 text-black">
                    SnAssets also auto-compound your staking reward to make the
                    best yield
                  </li>
                  <li className="mt-3 text-18 text-black">
                    Staked assets’ pricing is arbitrary so far now
                  </li>
                  <li className="mt-3 text-18 text-black">
                    Supernova’s staked swap suggests decent price for various
                    financial positions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div className="border-2 border-yellow-default bg-tw-black rounded-md w-full h-full">
              <img src="../../assets/icon-02.svg" />
            </div>
          </div>
        </div>

        {/* 03 Governance */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-36 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-6 w-6 rounded-md flex items-center justify-center">
                  <p className="text-blue-default font-bold text-24">03</p>
                </span>
              </div>
              <div className="mt-2">
                <h2 className="text-24 font-extrabold tracking-tight text-gray-900 mb-8">
                  Governance
                </h2>
                <ul className="list-disc font-normal lg:text-lg md:text-base mb-3 md:ml-5 ml-4 md:mt-0 mt-3">
                  <li className="mt-3 text-18 text-black">
                    Vote with NOVA and influence to all app-chains by our own
                    validator
                  </li>
                  <li className="mt-3 text-18 text-black">
                    NOVA if-self could be a governance hub on Cosmos
                  </li>
                  <li className="mt-3 text-18 text-black">
                    All supported chain’s governance can be voted by NOVA own
                    governance
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
            <div className="border-2 border-yellow-default bg-tw-black rounded-md w-full h-full">
              <img src="../../assets/icon-03.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
