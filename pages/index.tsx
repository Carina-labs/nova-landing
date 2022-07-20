import type { NextPage } from 'next'
import { Audits } from '../components/Audits'
import { Ecosystem } from '../components/Ecosystem'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Partners } from '../components/Partners'
import { Work } from '../components/Work'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <Ecosystem />
      <Audits />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
