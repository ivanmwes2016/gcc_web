import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HeroComponent } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Great Commision Church</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center text-center">

        {/* Hero */}
          <HeroComponent />
        {/* Quick Links */}

        {/* Sermon Section */}

        {/* Teams and Groups */}

        {/* Events */}

        {/* Prayer */}

        {/* Footer */}
       
      </main>


    </div>
  )
}

export default Home
