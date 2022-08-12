import React, { useEffect, useState } from 'react'
import { removeWhitespace, validateEmail } from 'utils/util'

export const Hero = () => {
  const API_KEY =
    '382e10fec5875a9d0b03c9513141cfebf28ecf7c4e598d62609b1d9b2bfe9dce03ebd8ab5dc8fce78b6b3ae87bac9e37254a1f55d79e9e3b68bca193dff87ff9'
  const BASE_URL = 'https://api.stibee.com/v1'
  const listId = '198670'
  const [email, setEmail] = useState('')
  const [hide, setHide] = useState(true)
  const [errorMsg, setErrorMessage] = useState('')
  const [disabled, setDisabled] = useState(false)

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
  const handleSubscribe = async () => {
    try {
      const res = await fetch(`${BASE_URL}/lists/${listId}/subscribers`, option)
      const data = res.json()
      console.log(data)
      setHide(false)
    } catch (err) {
      console.log(err)
    }
  }
  const onChangeEmail = (e: any) => {
    const email = e.target.value
    const changedEmail = removeWhitespace(email)
    setEmail(changedEmail)
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email',
    )
  }
  useEffect(() => {
    setDisabled(!(email && !errorMsg))
  }, [email, errorMsg])

  return (
    <div className="relative overflow-hidden max-w-[1050px] mx-[2rem] lg:mx-auto">
      <div className="w-full">
        <div
          id="down"
          className="relative text-center md:text-left flex justify-start md:pb-20 lg:pb-28"
        >
          <main className="mt-[3.6rem] md:mt-[12.5rem] w-full">
            <h1 className="font-bold text-[2rem] md:leading-20 md:text-64 lg:text-left xl:leading-22 xl:text-70 2xl:leading-24 2xl:text-90">
              <span className="text-tw-white block">Ultimate platform </span>
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
                  <div>
                    <div className="flex">
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="text-center text-8 rounded-lg my-[0.1rem] ml-[0.2rem] mr-[0.5rem] px-[1rem] w-[12rem] h-[1.8rem] md:text-16 md:h-[3.3rem] md:w-[23rem]"
                        placeholder="Submit email for subscription"
                        value={email}
                        onChange={onChangeEmail}
                      />
                      {disabled ? (
                        <div className="h-full bg-blue-default rounded-lg mt-[0.1rem]">
                          <button
                            disabled
                            type="submit"
                            onClick={handleSubscribe}
                            className="h-[1.8rem] w-[4rem] md:h-[3.3rem] md:w-[9rem] opacity-30 text-tw-white flex items-center justify-center font-bold py-2 px-5 text-8 md:py-3 md:text-20 md:px-10"
                          >
                            Submit
                          </button>
                        </div>
                      ) : (
                        <div className="h-full bg-blue-default hover:bg-purple rounded-lg">
                          <button
                            type="submit"
                            onClick={handleSubscribe}
                            className="h-[1.8rem] w-[4rem] md:h-[3.3rem] md:w-[9rem] text-tw-white flex items-center justify-center font-bold py-2 px-5 text-8 md:py-3 md:text-20 md:px-10"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="text-left text-8 md:text-16 text-red font-bold ml-3 mt-1 md:ml-4 md:mt-2">
                      {errorMsg}
                    </div>
                  </div>
                ) : (
                  <div className="border-[#3838F4] border-3 bg-gradient-to-r from-[#E6FF67] to-[#fff] rounded-[8px] md:rounded-[15px]">
                    <p className="flex items-center justify-center font-bold py-2 px-4 text-10 md:py-3 md:text-20 md:px-6">
                      Check your email to confirm subscription 👍🏼
                    </p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
