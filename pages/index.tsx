import type { NextPage } from 'next'
import Card from '../components/CardOne'
import { EventItem } from '../components/events'
import { GroupCard } from '../components/Group'
import { HeroComponent } from '../components/Hero'
import PrayerRequest from '../components/prayer'
import { SermonsSection } from '../components/Sermons'
import { client } from '../lib/client'
import React, { useRef, useState } from 'react'
import { data } from '../components/data'
import ButtonComponent from '../components/button'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/outline'

const Home: NextPage = ({
  bannerData,
  summaryData,
  groupsData,
  eventsData,
}: any) => {
  const [expand, setExpand] = useState(true)
  const quickLinksRef = useRef(null)

  const scrolFunction = (id: string) => {
    document.getElementById(id)?.scrollTop
  }

  return (
    <div className="flex flex-col items-center">
      <HeroComponent heroBanner={bannerData.length && bannerData[0]} />

      {/* Quick Links Section */}
      <div className="flex flex-col items-center" ref={quickLinksRef}>
        <div
          className={`w-full flex flex-col my-5 md:flex-row md:justify-center items-center overflow-y-hidden ${
            expand && 'h-[460px]'
          } md:h-[350px]`}
        >
          {summaryData?.map((item: any) => (
            <Card key={item._id} infoCardData={item} />
          ))}
        </div>
        <p
          className={`md:hidden text-center bg-red-200 mb-4 py-2 w-[60%] rounded-full ${
            expand ? 'block' : 'hidden'
          }`}
          onClick={() => setExpand(false)}
        >
          View more information
        </p>

        <p
          className={`md:hidden text-center bg-red-400 mb-4 py-2 w-[60%] rounded-full text-white  ${
            expand ? 'hidden' : 'block'
          }`}
          onClick={() => {
            setExpand(true)
            window.scrollTo({
              top: 600,
              behavior: 'smooth',
            })
          }}
        >
          showLess
        </p>
      </div>

      <SermonsSection />

      {/* Teams and Groups */}
      <div className="py-5 px-5 w-full flex justify-center items-center flex-col">
        <p className=" font-thin text-3xl mb-5">Teams & Groups</p>

        <div className="flex flex-row gap-4 w-full md:w-full md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-scroll scrollbar-hide  no-scrollbar">
          {groupsData?.map((groupItem: any) => (
            <GroupCard key={groupItem} groupCardData={groupItem} />
          ))}
        </div>

        <p className=" py-6 text-gray-700 font-bold text-3xl text-center">
          Our Commitment to Racial Diversity
        </p>
        <p className="w-full md:w-3/4 font-light text-2xl pb-4 px-4 text-gray-700 text-center ">
          {data.DiversityText}
        </p>
        <ButtonComponent isFontBig title="READ MORE" />
      </div>

      {/* Events */}
      <div className="py-5 px-5 w-full flex justify-center items-center flex-col bg-lightGray">
        <p className=" py-5 font-thin text-4xl text-gray-700">Events</p>

        <div className="py-6 flex flex-row gap-4 w-full md:w-[80%] overflow-x-scroll scrollbar-hide md:overflow-x-visible no-scrollbar">
          {eventsData?.map((item: any) => (
            <EventItem
              key={item.slug}
              ThumbNailTitle={item.EventTitle}
              ButtonPlaceholder={item.buttonText}
              date={item.EventDate}
              StartTime={item.time1}
              EndTime={item.time2}
              imageUrl={item.image}
            />
          ))}
        </div>
      </div>

      {/* Prayer */}
      <PrayerRequest />

      {/* Footer */}
    </div>
  )
}

//Get data
export const getServerSideProps = async (pageContext: any) => {
  const bannerData = await client.fetch(`*[_type == "Hero"]`)

  const summaryData = await client.fetch(`*[_type == "summaryStrip"]`)

  const groupsData = await client.fetch(`*[_type == "groups"]`)

  const eventsData = await client.fetch(`*[_type == "event"]`)

  return {
    props: {
      bannerData,
      summaryData,
      groupsData,
      eventsData,
    },
  }
}

export default Home
