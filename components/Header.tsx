import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { useState } from 'react'
import { LogoIcon } from './icons/LogoIcon'

export const Header = () => {
  return (
    <Disclosure as="nav" className="w-full relative z-20 bg-tw-black">
      <div className="max-w-[1050px] mx-[1.3rem] lg:mx-auto">
        <div className="w-full relative flex items-center h-[50px] md:h-[4.7rem] justify-between">
          <div className=" md:mx-0 md:flex items-center">
            <LogoIcon />
          </div>

          <div className="flex">
            <Link href="https://bit.ly/3QgueN0">
              <a
                target="_blank"
                className=" md:mb-[0.5rem] mr-2 md:mr-[1.7rem]"
              >
                <p className="mt-[0.2rem] md:mt-1 text-white hover:text-yellow-default text-13 md:text-22">
                  Docs-soon
                </p>
              </a>
            </Link>
            <Link href="https://twitter.com/Supernovazone">
              <a target="_blank">
                <div className="mt-[0.35rem] md:mt-2 mr-2 md:mr-[1.7rem]">
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 fill-white hover:fill-yellow-default"
                    viewBox="0 0 25 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 17.9018C3.1329 18 5.47431 17.3283 7.54958 15.703C5.36342 15.421 3.82994 14.3311 3.0125 12.2843L5.04659 12.1766L5.03708 12.0372C2.39151 10.8649 1.11783 9.24902 1.21922 7.18959L3.24696 7.74405L3.33568 7.61098C1.1907 5.767 0.705943 3.57767 1.86873 0.954274C4.64737 4.17649 8.06602 5.94443 12.2926 6.23275C12.2704 5.80819 12.2292 5.44066 12.2324 5.07313C12.2578 2.92182 13.259 1.34398 15.2012 0.479021C17.1212 -0.376434 18.9588 -0.0754401 20.5715 1.29646C20.882 1.55943 21.1418 1.62596 21.4935 1.49289C22.3331 1.1824 23.1727 0.878234 24.0313 0.561399C23.6828 1.59111 22.989 2.38637 22.0987 3.03905L22.1715 3.1943L24.627 2.54796L24.7252 2.64301C24.006 3.34638 23.2773 4.04025 22.5739 4.75946C22.425 4.91155 22.2888 5.16185 22.2919 5.36462C22.3838 11.5936 18.2586 18.2757 10.9461 19.6982C7.37532 20.3921 3.95984 19.9042 0.775647 18.0792C0.680596 18.0254 0.591882 17.962 0.5 17.9018H0.5Z" />
                  </svg>
                </div>
              </a>
            </Link>
            <Link href="https://discord.com/invite/AZUrXKGq8t">
              <a target="_blank">
                <div className="mt-[0.35rem] md:mt-2 mr-2 md:mr-[1.7rem]">
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 fill-white hover:fill-yellow-default"
                    viewBox="0 0 28 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.94101 16.656C7.5432 17.045 8.13044 17.3405 8.74386 17.5724C9.08049 17.6996 9.10668 17.8492 8.93088 18.126C8.58677 18.6646 8.25013 19.207 7.92098 19.7568C7.77885 19.9962 7.62549 20.0485 7.35245 19.9588C5.16807 19.2294 3.14079 18.2045 1.26313 16.873C1.03871 16.7121 1.01253 16.5064 0.990084 16.2745C0.675894 12.796 1.18458 9.43711 2.48623 6.2017C3.08095 4.72425 3.8365 3.3291 4.70053 1.99379C4.85388 1.7544 5.02968 1.58609 5.29525 1.47388C6.77643 0.826792 8.30624 0.359246 9.88467 0.0300938C10.2924 -0.0521943 10.5168 0.0226131 10.629 0.40039C10.8572 1.15594 11.2574 1.39907 12.1027 1.25319C13.6325 0.991368 15.1923 1.07366 16.7333 1.31678C17.0437 1.3654 17.1746 1.25693 17.3018 0.987628C17.803 -0.0596749 17.8143 -0.0671557 18.9364 0.172228C20.3427 0.471457 21.693 0.935262 23.0096 1.51128C23.2191 1.60479 23.35 1.75066 23.4659 1.9302C26.3311 6.28773 27.6402 11.0455 27.2175 16.2633C27.1951 16.5588 27.1091 16.757 26.8585 16.9328C25.0406 18.2158 23.0695 19.1845 20.9749 19.9214C20.627 20.0448 20.4101 20.0037 20.2193 19.667C19.935 19.1621 19.6208 18.6721 19.3067 18.1821C19.1122 17.8754 19.1084 17.6884 19.5124 17.5462C19.9687 17.3891 20.3988 17.161 20.829 16.9403C20.9749 16.8655 21.2965 16.8243 21.1768 16.5924C21.0684 16.3755 20.8439 16.1773 20.5036 16.3381C19.7854 16.6785 19.0373 16.9328 18.2668 17.146C14.7359 18.1222 11.2911 17.8417 7.92472 16.4428C7.58061 16.3007 7.24896 16.373 6.92979 16.6598L6.94101 16.656ZM12.084 10.9894C12.084 9.83359 11.4668 8.85736 10.5168 8.4908C9.61163 8.14295 8.67654 8.39355 8.00327 9.16407C7.09436 10.2076 7.15047 11.9469 8.11922 12.9344C9.17026 14.0041 10.7936 13.8395 11.6127 12.5753C11.9269 12.0928 12.099 11.5654 12.084 10.9856V10.9894ZM16.1348 10.6527C16.1311 12.3247 16.9951 13.4505 18.2145 13.6338C19.2767 13.7946 20.3914 13.0279 20.7317 11.8309C21.0459 10.7238 20.8477 9.71016 19.965 8.91346C19.2693 8.28882 18.4501 8.13173 17.5936 8.54317C16.6099 9.01819 16.1722 9.86352 16.1348 10.649V10.6527Z" />
                  </svg>
                </div>
              </a>
            </Link>
            <Link href="https://medium.com/supernovazone">
              <a target="_blank">
                <div className="mt-[0.35rem] md:mt-2 md:mr-[1.7rem]">
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 fill-white hover:fill-yellow-default"
                    viewBox="0 0 23 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.6449 17.8888H13.6632C13.7989 17.6388 13.8596 17.4353 13.9918 17.2996C14.456 16.821 14.9632 16.3818 15.4096 15.8925C15.5774 15.7068 15.7274 15.4175 15.731 15.1747C15.7524 11.9534 15.7488 8.73215 15.7453 5.51088C15.7453 5.48588 15.7131 5.45731 15.6596 5.3716C15.5774 5.56802 15.506 5.72872 15.4417 5.88943C13.9346 9.71067 12.4311 13.5283 10.9241 17.3496C10.8276 17.596 10.8026 17.8674 10.4027 17.8817C9.9884 17.8995 9.91698 17.6317 9.79199 17.3674C7.96708 13.3819 6.14217 9.39997 4.26369 5.30374C4.22798 5.51802 4.19583 5.62873 4.19583 5.73587C4.19226 8.40359 4.17798 11.0677 4.20655 13.7355C4.20655 14.0533 4.37083 14.4211 4.57082 14.6818C5.22078 15.5354 5.93146 16.3425 6.60286 17.1782C6.73857 17.346 6.81713 17.5603 6.96713 17.8388H0.0996094C0.235317 17.5674 0.303171 17.3496 0.435307 17.1853C1.1067 16.3461 1.81381 15.5389 2.46735 14.6854C2.66734 14.4247 2.82805 14.0569 2.82805 13.739C2.85304 10.5178 2.82805 7.2965 2.84233 4.07523C2.84233 3.5824 2.71019 3.18956 2.38164 2.82172C1.8031 2.16461 1.26027 1.48251 0.710293 0.807539C0.581728 0.646833 0.503161 0.450414 0.353168 0.178999C0.628155 0.154 0.78529 0.12543 0.938853 0.12543C2.79233 0.121859 4.64224 0.136144 6.49572 0.111145C6.88142 0.107574 7.04212 0.261137 7.18854 0.58255C8.69918 3.9181 10.2205 7.25008 11.7419 10.5821C11.8026 10.7142 11.8633 10.8499 11.9704 11.0785C12.0776 10.8249 12.1597 10.6499 12.2312 10.4713C13.5561 7.17508 14.8846 3.88239 16.1917 0.58255C16.3309 0.232567 16.4988 0.111145 16.8738 0.114716C18.5951 0.136144 20.3165 0.121859 22.0378 0.12543C22.2021 0.12543 22.3628 0.143286 22.6699 0.157571C22.5271 0.41113 22.4592 0.61112 22.3271 0.746828C21.8735 1.21109 21.3736 1.62893 20.9414 2.10747C20.7629 2.30389 20.6093 2.61102 20.6093 2.86815C20.5879 6.9608 20.5879 11.0499 20.6093 15.1425C20.6093 15.4032 20.7522 15.7139 20.9307 15.9139C21.3593 16.3996 21.8521 16.8246 22.3021 17.2924C22.4342 17.4317 22.5021 17.6317 22.6485 17.8888H22.6449Z" />
                  </svg>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
