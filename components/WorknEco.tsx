import Image from 'next/image'
import React from 'react'
import { Ecosystem } from './Ecosystem'
import { Work } from './Work'

export const WorknEco = () => {
  return (
    <>
      <div className="relative pt-16 pb-32 overflow-hidden">
        <Image
          className="z-0 h-auto"
          src="/assets/BG_Landiing2.png"
          alt="bg2"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Work />
        <Ecosystem />
      </div>
    </>
  )
}
