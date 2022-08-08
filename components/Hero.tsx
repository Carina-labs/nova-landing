import Link from 'next/link'
import { useSubscribe } from 'pages/api/subscribe'
import { env } from 'process'
import React, { useEffect, useState } from 'react'

export const Hero = () => {
  const [hide, setHide] = useState(false)
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
  const API_KEY =
    '382e10fec5875a9d0b03c9513141cfebf28ecf7c4e598d62609b1d9b2bfe9dce03ebd8ab5dc8fce78b6b3ae87bac9e37254a1f55d79e9e3b68bca193dff87ff9'
  const BASE_URL = 'https://api.stibee.com/v1'
  const listId = '198055'
  const [res, setRes] = useState()
  const [email, setEmail] = useState('')
  let option = {
    method: 'POST',
    headers: {
      AccessToken: API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventOccuredBy: 'MANUAL',
      confirmEmailYN: 'N',
      subscribers: [
        {
          email: email,
          name: 'supernova',
        },
      ],
    }),
  }
  console.log(option)
  const handleSubscribe = async () => {
    try {
      const data = await (
        await fetch(`${BASE_URL}/lists/${listId}/subscribers`, option)
      ).json()
      setRes(data)
    } catch (err) {
      console.log(err)
    }
    setEmail('')
  }
  console.log(res)

  const onChangeEmail = (e: any) => {
    const email = e.target.value
    setEmail(email)
    console.log(email)
  }

  return (
    <div className="relative overflow-hidden mx-[2.5rem] xl:mx-auto xl:w-[1300px]">
      <div className="w-full">
        <div
          id="down"
          className="relative text-left flex justify-start md:pb-20 lg:pb-28"
        >
          <main className="mt-[6rem] md:mt-[12.5rem] w-full">
            <h1 className="font-bold text-24 md:leading-20 md:text-64 lg:text-left xl:leading-22 xl:text-70 2xl:leading-24 2xl:text-90">
              <span className="text-tw-white block">Ultimate money lego </span>
              <span className="text-tw-white block">for staked assets</span>
            </h1>
            <p className="text-tw-white mt-[1rem] md:mt-[2.4rem] text-8 md:text-20 lg:text-left xl:text-23 2xl:leading-12 2xl:text-26">
              <span className="block">
                Supernova will enable liquid staking on Cosmos through
              </span>
              <span className="block">
                a combination of ICA, proprietary module and IBC query.
              </span>
            </p>
            <div className="mt-[2rem] md:mt-[9.25rem] flex justify-start lg:mt-18">
              {hide ? (
                <div className="flex items-center">
                  <input
                    className="py-1 px-4 md:py-5 md:px-10 rounded-2xl mr-4"
                    type="email"
                    placeholder="Write your E-mail"
                    value={email}
                    onChange={onChangeEmail}
                  />

                  <div className=" bg-blue-default hover:bg-purple rounded-2xl">
                    <button
                      onClick={handleSubscribe}
                      className="text-tw-white w-full flex items-center justify-center font-bold text-12 py-2 px-5 md:py-3 md:text-16 md:px-10 xl:text-20 2xl:text-24 3xl:text-30"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-default hover:bg-purple mt-3 rounded-2xl">
                  <button
                    onClick={() => setHide(true)}
                    className="text-tw-white w-full flex items-center justify-center font-bold py-3 px-10 text-12 md:py-4 md:text-16 md:px-12 xl:text-20 2xl:text-24"
                  >
                    Follow for Updates
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
