import Image from 'next/image'
import React, { useEffect } from 'react'
import { WorksLi } from './common/WorksLi'

export const Work = () => {
  useEffect(() => {
    const leftCallback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInLtoR')
        }
      })
    }
    const rightCallback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInRtoL')
        }
      })
    }

    const leftObserver = new IntersectionObserver(leftCallback)
    const rightObserver = new IntersectionObserver(rightCallback)

    const left = document.querySelectorAll('#left')
    left.forEach(function (target) {
      leftObserver.observe(target)
    })
    const right = document.querySelectorAll('#right')
    right.forEach(function (target) {
      rightObserver.observe(target)
    })
  }, [])
  return (
    <>
      <div className="relative z-20 overflow-hidden pt-[7rem]">
        <h1 className="mb-[1.6rem] md:mb-[4.2rem] text-tw-white font-extrabold text-center text-24 md:text-32 lg:text-40 xl:text-[3.75]">
          How it works
        </h1>
        <div className="border-2 border-yellow-default bg-tw-white max-w-[780px] lg:max-w-[1050px] rounded-xl md:rounded-2xl mx-[1.3rem] md:mx-auto">
          {/* 01 Liquid Staking */}
          <div className="block w-full mx-auto px-6 md:px-16 md:flex">
            <div className="animate-fadeInLtoR w-1/2 mx-auto pt-[3rem] pb-6">
              <Image
                id="left"
                priority
                className="rounded-lg"
                src="/assets/icon1.gif"
                width={450}
                height={450}
              />
            </div>
            <div id="right" className="md:pt-[3rem] pb-6 w-full mx-auto">
              <div className="md:ml-20 xl:ml-32">
                <div className="flex-column text-center md:text-left">
                  <span className="h-6 w-6 rounded-md">
                    <p className="text-blue-default font-bold text-16 md:text-24">
                      01
                    </p>
                  </span>
                  <h2 className="font-bold text-gray-900 mb-6 text-18 md:text-26">
                    Liquid Staking
                  </h2>
                </div>

                <ul className="list-disc font-normal mt-3 ml-4 sm:ml-7">
                  <WorksLi>
                    Stake and mint your snAssets to unlock your liquidity while
                    staking!
                  </WorksLi>
                  <WorksLi>
                    snAssets also auto-compound your staking reward and provide
                    the best yield
                  </WorksLi>
                  <WorksLi>
                    You can redeem your assets by burning snAssets
                  </WorksLi>
                  <WorksLi>
                    We shall bring more updates to add utility to the snAssets!
                  </WorksLi>
                </ul>
              </div>
            </div>
          </div>

          {/* 02 Staked Swap */}
          <div className="block w-full mx-auto px-6 md:px-16 md:mt-12 lg:pl-24 lg:flex">
            <div className="w-full flex flex-col-reverse md:flex md:flex-row border-y-4 border-yellow-default">
              <div
                id="left"
                className="pl-1 pb-8 sm:pt-12 sm:pb-24 lg:py-24 w-full mx-auto"
              >
                <div className="md:mr-20 flex-column text-center md:text-left">
                  <span className="h-6 w-6 rounded-md">
                    <p className="text-blue-default font-bold text-16 md:text-24">
                      02
                    </p>
                  </span>
                  <h2 className="font-bold text-gray-900 mb-6 text-18 md:text-26">
                    Staked Swap
                  </h2>
                  <ul className="text-left list-disc font-normal mt-3 ml-4 sm:ml-7">
                    <WorksLi>
                      Swap your shadow tokens through our novel AMM
                    </WorksLi>
                    <WorksLi>
                      The pricing of staked assets has been arbitrary until now
                      on other protocols
                    </WorksLi>
                    <WorksLi>
                      Supernova’s staked swap will take various factors like
                      unbonding period and interest rate to provide the best
                      swap experience
                    </WorksLi>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 text-center pb-6 mx-auto pt-10 sm:pt-24 lg:py-24">
                <Image
                  id="right"
                  priority
                  className="rounded-lg"
                  src="/assets/icon2.gif"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>

          {/* 03 Governance */}
          <div className="block w-full mx-auto px-6 pb-6 md:pb-22 md:px-16 md:mt-12 md:flex">
            <div className="w-1/2 text-center mx-auto py-6">
              <Image
                id="left"
                priority
                className="rounded-lg"
                src="/assets/icon3.gif"
                width={450}
                height={450}
              />
            </div>
            <div id="right" className="pb-6 sm:py-6 w-full mx-auto">
              <div className="md:ml-20 xl:ml-32">
                <div className="flex-column text-center md:text-left">
                  <span className="h-6 w-6 rounded-mdr">
                    <p className="text-blue-default font-bold text-16 md:text-24">
                      03
                    </p>
                  </span>
                  <h2 className="font-bold text-gray-900 mb-6 text-18 md:text-26">
                    Governance
                  </h2>
                </div>
                <ul className="list-disc font-normal mt-3 ml-4 sm:ml-7">
                  <WorksLi>
                    Vote with NOVA and participate in governance on all
                    app-chains through Supernova validator
                  </WorksLi>
                  <WorksLi>
                    NOVA will become the linchpin of the governance on Cosmos
                    ecosystem
                  </WorksLi>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
