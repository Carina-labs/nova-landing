import Image from 'next/image'
import React from 'react'

export const Background = (props: any) => {
  return (
    <div>
      <Image
        src="/assets/fake.jpg"
        alt="메인 배경 이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {props.children}
    </div>
  )
}
