import React from 'react'

export const WorksLi = (props: any) => {
  return (
    <>
      <li className="mt-2 text-12 md:text-18 lg:text-20 xl:text-22 text-black">
        {props.children}
      </li>
    </>
  )
}
