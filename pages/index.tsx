import { Stats } from 'components/Stats'
import { WorknEco } from 'components/WorknEco'
import type { NextPage } from 'next'
import Image from 'next/image'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  const styling = {
    backgroundImage: "url('/assets/1440-02.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <>
      <div style={styling}>
        <Header />
        <Hero />
        <WorknEco />
        <Footer />
      </div>
    </>
  )
}

export default Home
