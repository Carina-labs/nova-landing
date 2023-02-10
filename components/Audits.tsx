import React, { useEffect } from 'react'

export const Audits = () => {
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
      className="overflow-hidden mt-[2.6rem] md:mt-[8rem] mb-[5.4rem] md:mb-[20rem]"
    >
      <div className="relative container mx-auto px-4">
        <div className="relative z-10 flex flex-wrap justify-center items-center">
          <h1 className="text-tw-white font-extrabold text-center text-24 md:text-32 lg:text-40 xl:text-48 2xl:text-62 3xl:text-64">
            Audits
          </h1>
        </div>
      </div>
      <div className="relative flex flex-wrap justify-center md:space-x-6 md:py-16 py-8">
        <div className="md:max-w-md max-w-sm md:mb-0 mb-4 md:w-1/3">
          <div className="px-8 py-7 text-center bg-white rounded-2xl border-2 border-yellow-500">
            <div className="mx-auto mb-4 border-b border-yellow-500 w-full md:py-4 py-2">
              <img
                className="object-contain h-20 md:h-20 mx-auto"
                src="https://static.shuffle.dev/uploads/files/57/5730a5ae134971d53040802f2cf0497fbfee5006/certik-logo-black.svg"
                alt=""
              />
            </div>
            <p className="text-sm font-semibold tracking-widest">12/8/2022</p>
            <a
              target="_blank"
              className="w-full mx-auto"
              href="https://www.certik.com/company/about"
            >
              <p className="font-bold px-8 text-center md:px-6 text-base transform hover:scale-105 ease-in-out transition origin-bottom hover:underline ">
                See report
              </p>
            </a>
          </div>
        </div>
        <div className="w-auto md:max-w-md max-w-sm md:w-1/3">
          <div className="px-8 py-7 text-center bg-white rounded-2xl border-2 border-yellow-500">
            <div className="mx-auto mb-4 border-b border-yellow-500 w-full md:py-4 py-2">
              <img
                className="object-contain h-20 md:h-20 mx-auto"
                src="https://static.shuffle.dev/uploads/files/57/5730a5ae134971d53040802f2cf0497fbfee5006/halborn-logo-black.png"
                alt=""
                data-config-id="image2"
              />
            </div>
            <p className="text-sm font-semibold tracking-widest">12/24/2022</p>
            <a
              target="_blank"
              className="w-full mx-auto"
              href="https://halborn.com/about/brand"
            >
              <p className="font-bold px-8 text-center md:px-6 text-base transform hover:scale-105 ease-in-out transition origin-bottom hover:underline ">
                See report
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
