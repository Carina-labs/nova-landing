import Image from 'next/image'
import React from 'react'
import { Ecosystem } from './Ecosystem'
import { Work } from './Work'

export const WorknEco = () => {
  return (
    <>
      <div className="relative z-20 pt-60 pb-32 overflow-hidden">
        <Work />
        <Ecosystem />
      </div>
    </>
  )
}
