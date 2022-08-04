import { Stats } from 'components/Stats'
import { WorknEco } from 'components/WorknEco'
import type { NextPage } from 'next'
import Image from 'next/image'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="z-[-1] h-[1760px] absolute top-0 w-full">
        <video autoPlay muted loop>
          <source src="/assets/Landing_1920.1760.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="z-[-1] w-full h-[2200px] absolute bottom-0">
        <Image
          className="w-full h-full object-cover"
          priority
          alt="background"
          layout="fill"
          src="/assets/Landing_1920.3440.png"
        />
      </div>
      <Header />
      <Hero />
      <WorknEco />
      <Footer />
    </div>
  )
}

export default Home
