import Link from 'next/link'
import { useSubscribe } from 'pages/api/subscribe'
import React, { useEffect, useState } from 'react'

export const Hero = () => {
  // useEffect(() => {
  //   const downCallback = function (entries: any) {
  //     entries.forEach((entry: any) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animate-fadeInDtoU')
  //       }
  //     })
  //   }

  //   const downObserver = new IntersectionObserver(downCallback)

  //   const down = document.querySelectorAll('#down')
  //   down.forEach(function (target) {
  //     downObserver.observe(target)
  //   })
  // }, [])
  // const [subRes, subFetch] = useSubscribe()
  // console.log(subRes)

  // const handleSubscribe: React.MouseEventHandler<
  //   HTMLButtonElement | HTMLAnchorElement
  // > = (e) => {
  //   console.log('click!')
  //   props.onClick?.(e)
  //   subFetch()
  // }
  const API_KEY =
    'c9dfdff367c22118f33d459fd2e13293768693a1b769f96fda73814ae5a547e9755ec8b968baf176000adc5a98bc376ee0ee5f7aff850da57f51d7052c4d1e69'
  const BASE_URL = 'https://api.stibee.com/v1'
  const listId = '198055'
  const [res, setRes] = useState()
  let option = {
    method: 'POST',
    headers: {
      AccessToken: API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventOccuredBy: 'MANUAL',
      confirmEmailYN: 'Y',
      subscribers: [
        {
          email: 'ckh0601@gmail.com',
          name: 'scott choo',
        },
      ],
    }),
  }
  const handleSubscribe = async () => {
    try {
      const data = await (
        await fetch(`${BASE_URL}/lists/${listId}/subscribers`, option)
      ).json()
      setRes(data)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(res)

  return (
    <div className="relative overflow-hidden mx-10 md:mx-28 xl:mx-44 2xl:mx-96 3xl:mx-160">
      <div className="w-full">
        <div
          id="down"
          className="relative text-left flex justify-start pb-8 md:pb-20 lg:pb-28 pt-12 2xl:pt-30"
        >
          <main className="mt-12 md:mt-48 w-full">
            <h1 className="text-center font-bold text-24 md:leading-20 md:text-64 lg:text-left xl:leading-22 xl:text-70 2xl:leading-24 2xl:text-90 3xl:leading-32 3xl:text-102">
              <span className="text-tw-white block">Ultimate money lego </span>
              <span className="text-tw-white block">for staked assets</span>
            </h1>
            <p className="text-center text-tw-white sm:pb-10 mt-4 text-8 sm:mt-10 md:text-20 lg:text-left xl:text-23 2xl:leading-12 2xl:text-26 3xl:text-32">
              <span className="block">
                Supernova will enable liquid staking on Cosmos through
              </span>
              <span className="block">
                a combination of ICA, proprietary module and IBC query.
              </span>
            </p>
            <div className="mt-12 flex justify-center lg:justify-start lg:mt-18">
              <div className="bg-blue-default hover:bg-purple mt-3 rounded-2xl">
                <button className="text-tw-white w-full flex items-center justify-center font-bold py-3 px-10 text-12 md:py-4 md:text-16 md:px-12 xl:text-20 2xl:text-24 3xl:text-30">
                  <Link href="https://twitter.com/Supernovazone">
                    <a target="_blank">Follow for Updates</a>
                  </Link>
                </button>

                {/* <button
                  onClick={handleSubscribe}
                  className="text-tw-white w-full flex items-center justify-center font-bold py-3 px-10 text-12 md:py-4 md:text-16 md:px-12 xl:text-20 2xl:text-24 3xl:text-30"
                >
                  Subscribe
                </button> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
