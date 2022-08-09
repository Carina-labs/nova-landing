import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const Hero = () => {
  const API_KEY =
    '382e10fec5875a9d0b03c9513141cfebf28ecf7c4e598d62609b1d9b2bfe9dce03ebd8ab5dc8fce78b6b3ae87bac9e37254a1f55d79e9e3b68bca193dff87ff9'
  const BASE_URL = 'https://api.stibee.com/v1'
  const listId = '198670'
  const [res, setRes] = useState()
  const [email, setEmail] = useState('')
  const [hide, setHide] = useState(true)
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
  }, [hide])
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
    setHide(false)
  }
  console.log(res)

  const onChangeEmail = (e: any) => {
    const email = e.target.value
    setEmail(email)
  }

  return (
    <div className="relative overflow-hidden max-w-[1050px] mx-[2rem] lg:mx-auto">
      <div className="w-full">
        <div
          id="down"
          className="relative text-center md:text-left flex justify-start md:pb-20 lg:pb-28"
        >
          <main className="mt-[3.6rem] md:mt-[12.5rem] w-full">
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
            <div className="mt-[4rem] md:mt-[6rem] flex justify-center md:justify-start">
              <div className="flex items-center">
                {hide ? (
                  <form className="flex">
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 text-center text-8 rounded-lg my-[0.1rem] mx-[0.5rem] md:mx-[0.7rem] px-[1rem] w-[12rem] h-[1.8rem] md:text-16 md:h-[3.3rem] md:w-[23rem]"
                      placeholder="Follow for updates @your.mail"
                      value={email}
                      onChange={onChangeEmail}
                    />
                    <div className="bg-blue-default hover:bg-purple rounded-lg">
                      <button
                        type="submit"
                        onClick={() => handleSubscribe}
                        className="h-[1.8rem] w-[4rem] md:h-[3.3rem] md:w-[9rem] text-tw-white flex items-center justify-center font-bold py-2 px-5 text-8 md:py-3 md:text-20 md:px-10"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="bg-blue-default rounded-lg">
                      <p className="text-tw-white flex items-center justify-center font-bold py-2 px-5 text-8 md:py-3 md:text-20 md:px-10">
                        Thanks for your following 🎉
                      </p>
                    </div>
                    <div className="mt-1 mr-[1.7rem]">
                      <Image
                        alt="twitter"
                        width={25}
                        height={25}
                        src="/assets/twitter.svg"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
