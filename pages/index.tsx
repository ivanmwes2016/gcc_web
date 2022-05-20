import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CardContainer from '../components/CardOne'
import GroupComponent from '../components/Group'


import { HeroComponent } from '../components/Hero'
import { SermonsSection } from '../components/Sermons'

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

          {/* Quick Links Section */}
        <CardContainer />

        {/* Sermon Section */}

          <SermonsSection />
    

        {/* Teams and Groups */}
        <GroupComponent />

        {/* Events */}

        {/* Prayer */}

        {/* Footer */}
       
      </main>


    </div>
  )
}

export default Home
