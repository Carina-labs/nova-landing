import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { WorksLi } from './common/WorksLi'

export const Work = () => {
  useEffect(() => {
    const leftCallback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInLtoR')
        } else {
          entry.target.classList.remove('animate-fadeInLtoR')
        }
      })
    }
    const rightCallback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInRtoL')
        } else {
          entry.target.classList.remove('animate-fadeInRtoL')
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
      <div className="relative pt-12 pb-32 overflow-hidden">
        <h1 className="text-tw-white text-40 font-extrabold text-center">
          How it works
        </h1>
        <div className="border-2 border-yellow-default rounded-2xl mt-12 bg-tw-white mx-32 lg:mx-44">
          {/* 01 Liquid Staking */}
          <div className="mt-12 block lg:flex w-full px-16 mx-auto">
            <div
              id="left"
              className="w-1/2 lg:w-[450px] text-center mx-auto py-6"
            >
              <Image
                className="rounded-2xl"
                src="../../assets/icon1.gif"
                width={250}
                height={250}
              />
            </div>
            <div id="right" className="py-6 w-full mx-auto">
              <div className="lg:ml-20">
                <span className="h-6 w-6 rounded-md flex items-center justify-center">
                  <p className="text-blue-default font-bold text-26">01</p>
                </span>
                <h2 className="text-28 font-bold text-gray-900 mb-8">
                  Liquid Staking
                </h2>
                <ul className="list-disc font-normal ml-4 mt-3">
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
          <div className="mt-12 w-full px-16 mx-auto">
            <div className="w-full flex flex-col-reverse lg:flex lg:flex-row border-y-4 border-yellow-default">
              <div
                id="left"
                className="pl-1 pt-12 pb-24 lg:py-24 w-full mx-auto"
              >
                <div className="mr-20">
                  <span className="h-6 w-6 rounded-md flex items-center justify-center">
                    <p className="text-blue-default font-bold text-26 ml-1">
                      02
                    </p>
                  </span>
                  <h2 className=" text-28 font-bold text-gray-900 mb-8">
                    Staked Swap
                  </h2>
                  <ul className="list-disc font-normal ml-4 mt-3">
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
              <div
                id="right"
                className="w-1/2 lg:w-[450px] text-center mx-auto pt-24 lg:py-24"
              >
                <Image
                  className="rounded-2xl"
                  src="../../assets/icon2.gif"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>

          {/* 03 Governance */}
          <div className="mt-12 block lg:flex w-full px-16 mx-auto pb-22">
            <div
              id="left"
              className="w-1/2 lg:w-[450px] text-center mx-auto py-6"
            >
              <Image
                className="rounded-2xl"
                src="../../assets/icon3.gif"
                width={250}
                height={250}
              />
            </div>
            <div id="right" className="py-6 w-full mx-auto">
              <div className="lg:ml-20">
                <span className="h-6 w-6 rounded-md flex items-center justify-center">
                  <p className="text-blue-default font-bold text-26">03</p>
                </span>
                <h2 className="text-28 font-bold text-gray-900 mb-8">
                  Governance
                </h2>
                <ul className="list-disc font-normal ml-4 mt-3">
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
