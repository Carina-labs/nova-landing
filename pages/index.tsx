import { Background } from 'components/Background'
import { Stats } from 'components/Stats'
import { WorknEco } from 'components/WorknEco'
import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <WorknEco />
      <Footer />
    </>
  )
}

export default Home
