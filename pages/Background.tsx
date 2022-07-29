import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export const Background = () => {
  return (
    <div className={bgWrap}>
      <Image
        className="-z-1"
        alt="Mountains"
        src="/assets/1920_5006.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  )
}

const bgWrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`
