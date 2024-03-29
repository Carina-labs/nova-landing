import type { NextPage } from 'next'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Ecosystem } from 'components/Ecosystem'
import { Work } from 'components/Work'

const Home: NextPage = () => {
  return (
    <div className="relative h-auto">
      <div className="z-[-1] h-[1795px] absolute top-[2.2rem] w-full">
        <video className="w-full" autoPlay muted loop playsInline>
          <source src="/assets/landing_1920_high.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="z-[-1] w-full xl:h-[2000px] absolute bottom-0">
        <Image
          className="w-full h-full object-cover"
          priority
          alt="background"
          layout="fill"
          src="/assets/under_Landing_BG.svg"
        />
      </div>
      <Header />
      <Hero />
      <Work />
      <Ecosystem />
      <Footer />
    </div>
  )
}

export default Home
