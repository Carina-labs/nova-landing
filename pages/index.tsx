import { Background } from 'components/Background'
import { Stats } from 'components/Stats'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Audits } from '../components/Audits'
import { Ecosystem } from '../components/Ecosystem'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Partners } from '../components/Partners'
import { Work } from '../components/Work'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Hero />
      <Stats />
      <Work />
      <Ecosystem />
      <Audits />
      <Partners />

      <Footer />
    </>
  )
}

export default Home
