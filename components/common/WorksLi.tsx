import React from 'react'

export const WorksLi = (props: any) => {
  return (
    <>
      <li className="mt-2 text-8 md:text-14 lg:text-18 2xl:text-22 3xl:text-26 text-black">
        {props.children}
      </li>
    </>
  )
}
