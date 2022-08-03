import { Stats } from 'components/Stats'
import { WorknEco } from 'components/WorknEco'
import type { NextPage } from 'next'
import Image from 'next/image'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <div className="relative w-full h-auto z-[1]">
        <Image
          priority
          alt="background"
          layout="fill"
          objectFit="cover"
          src={'/assets/1920(c).svg'}
        />
        <Header />
        <Hero />
        <WorknEco />
        <Footer />
      </div>
    </>
  )
}

export default Home
