import type { NextPage } from 'next'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Ecosystem } from 'components/Ecosystem'
import { Work } from 'components/Work'
import Head from 'next/head'

const imgPath = `${process.env.NEXT_PUBLIC_LANDING_URL}/assets/Supernova.svg`
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Supernova</title>
        <meta
          name="description"
          content="Ultimate platform for the staked assets"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Supernova" />
        <meta
          property="og:description"
          content="Ultimate platform for the staked assets"
        />
        <meta property="og:site_name" content="Supernova" />
        <meta property="og:image" content={imgPath} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630"></meta>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
    </>
  )
}

export default Home
