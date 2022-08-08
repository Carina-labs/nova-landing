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
      <div className="relative overflow-hidden">
        <h1 className="mb-[1.6rem] md:mb-[4.2rem] text-tw-white font-extrabold text-center text-24 md:text-32 lg:text-40 xl:text-[3.75]">
          How it works
        </h1>
        <div className=" bg-tw-white max-w-[1000px] lg:rounded-2xl lg:mx-auto">
          {/* 01 Liquid Staking */}
          <div className="block w-full mx-auto px-6 md:px-16 md:mt-12 md:flex">
            <div className="animate-fadeInLtoR w-1/2 md:w-[450px] mx-auto pt-[4.5rem] pb-6">
              <Image
                id="left"
                priority
                className="rounded-xl"
                src="/assets/icon1.gif"
                width={400}
                height={400}
              />
            </div>
            <div id="right" className="md:pt-[4.5rem] pb-6 w-full mx-auto">
              <div className="md:ml-20 xl:ml-32">
                <div className="flex-column text-center md:text-left">
                  <span className="h-6 w-6 rounded-md">
                    <p className="text-blue-default font-bold mr-1 text-16 md:ml-1 md:text-22 lg:text-26 2xl:ml-2 2xl:text-28">
                      01
                    </p>
                  </span>
                  <h2 className="font-bold text-gray-900 mb-6 text-18 md:text-24 lg:text-28 2xl:text-30 3xl:text-36">
                    Liquid Staking
                  </h2>
                </div>

                <ul className="list-disc font-normal mt-3 ml-4 sm:ml-7">
                  <WorksLi>
                    Stake and mint your snAssets to unlock your liquidity while
                    staking!
                  </WorksLi>
                  <WorksLi>
                    SnAssets also auto-compound your staking reward to make the
                    best yield
                  </WorksLi>
                  <WorksLi>
                    You can redeem your assets by burning snAssets
                  </WorksLi>
                  <WorksLi>
                    We are rapidly building something to make snAssets’ own
                    utility!
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
                    <p className="text-blue-default font-bold text-16 md:ml-1 md:text-22 lg:text-26 2xl:ml-2 2xl:text-28">
                      02
                    </p>
                  </span>
                  <h2 className="font-bold text-gray-900 mb-6 text-18 md:text-24 lg:text-28 2xl:text-30 3xl:text-36">
                    Staked Swap
                  </h2>
                  <ul className="list-disc font-normal mt-3 ml-4 sm:ml-7">
                    <WorksLi>
                      Swap your shadow tokens with our novel AMM
                    </WorksLi>
                    <WorksLi>
                      SnAssets also auto-compound your staking reward to make
                      the best yield
                    </WorksLi>
                    <WorksLi>
                      Staked assets’ pricing is arbitrary so far now
                    </WorksLi>
                    <WorksLi>
                      Supernova’s staked swap suggests decent price for various
                      financial positions
                    </WorksLi>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 lg:w-[450px] text-center pb-6 mx-auto pt-10 sm:pt-24 lg:py-24">
                <Image
                  id="right"
                  priority
                  className="rounded-xl"
                  src="/assets/icon2.gif"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 03 Governance */}
          <div className="block w-full mx-auto px-6 pb-6 md:pb-22 md:px-16 md:mt-12 md:flex">
            <div className="w-1/2 lg:w-[450px] text-center mx-auto py-6">
              <Image
                id="left"
                priority
                className="rounded-xl"
                src="/assets/icon3.gif"
                width={400}
                height={400}
              />
            </div>
            <div id="right" className="pb-6 sm:py-6 w-full mx-auto">
              <div className="md:ml-20 xl:ml-32">
                <div className="flex-column text-center md:text-left">
                  <span className="h-6 w-6 rounded-mdr">
                    <p className="text-blue-default font-bold text-16 md:ml-1 md:text-22 lg:text-26 2xl:ml-2 2xl:text-28">
                      03
                    </p>
                  </span>
                  <h2 className="font-bold text-gray-900 mb-6 text-18 md:text-24 lg:text-28 2xl:text-30 3xl:text-36">
                    Governance
                  </h2>
                </div>
                <ul className="list-disc font-normal mt-3 ml-4 sm:ml-7">
                  <WorksLi>
                    Vote with NOVA and influence to all app-chains by our own
                    validator
                  </WorksLi>
                  <WorksLi>
                    NOVA if-self could be a governance hub on Cosmos
                  </WorksLi>
                  <WorksLi>
                    All supported chain’s governance can be voted by NOVA own
                    governance
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
