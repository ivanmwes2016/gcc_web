import type { NextPage } from 'next'
import Card from '../components/CardOne'
import { EventItem } from '../components/events'
import { GroupCard } from '../components/Group'
import { HeroComponent } from '../components/Hero'
import PrayerRequest from '../components/prayer'
import { SermonsSection } from '../components/Sermons'
import Carousel from 'react-elastic-carousel'
import { client } from '../lib/client'
import React from 'react'
import { data } from '../components/data'
import ButtonComponent from '../components/button'


const breakPoints:any =[
  {width:1, itemsToShow:1},
  {width:550, itemsToShow:2, itemsToScoll:2},
  {width:768, itemsToShow:3},
  {width:1200, itemsToShow:3},

]

const Home: NextPage = ({bannerData, summaryData, groupsData, eventsData}:any) => {
 
  return (
    <div className="flex min-h-screen flex-col items-center">

        {/* Hero */}
          <HeroComponent heroBanner ={bannerData.length && bannerData[0]}/>
          
          
          {/* Quick Links Section */}
        <div className="w-full flex flex-row justify-center py-3">
          {summaryData?.map((item:any) => 
            <Card key={item._id} infoCardData={item} />
          )}
        </div>
          
       
        {/* Sermon Section */}

          <SermonsSection />
    

        {/* Teams and Groups */}
        <div className="py-5 px-5 w-full flex justify-center items-center flex-col">
        <p className=" pb-5 font-thin text-3xl">Teams & Groups</p>
        <Carousel breakPoints={breakPoints} isRTL className="py-6">
               
            {groupsData?.map((groupItem: any) => (
                <GroupCard  key={groupItem} groupCardData ={groupItem} />
            ))}
            </Carousel>

            <p className=" py-6 text-gray-700 font-bold text-3xl">Our Commitment to Racial Diversity</p>
            <p className="w-3/4 font-thin text-2xl pb-4 px-4 text-gray-700">{data.DiversityText}</p>
            <ButtonComponent  isFontBig title="READ MORE" />

        </div>

        {/* Events */}
        <div className="py-5 px-5 w-full flex justify-center items-center flex-col bg-gray-200">
            <p className=" py-5 font-thin text-4xl text-gray-700">Events</p>

            <Carousel breakPoints={breakPoints} className="py-6">
              {
                eventsData?.map((item:any) => (
                  <EventItem 
                    key={item.slug}
                    ThumbNailTitle={item.EventTitle}
                    ButtonPlaceholder={item.buttonText}
                    date={item.EventDate}
                    StartTime={item.time1}
                    EndTime={item.time2}
                    imageUrl={item.image}
                    />
                ))
              }

            </Carousel>
        </div>
        

        {/* Prayer */}
        <PrayerRequest />

        {/* Footer */}


    </div>
  )
}


//Get data
export const getServerSideProps = async (pageContext:any) => {

  const bannerData = await client.fetch(
    `*[_type == "Hero"]`
  )

  const summaryData = await client.fetch(
    `*[_type == "summaryStrip"]`
  )

  const groupsData = await client.fetch(
    `*[_type == "groups"]`
  )

  const eventsData = await client.fetch(
    `*[_type == "event"]`
  )
 


  return{
    props:{
      bannerData,
      summaryData,
      groupsData,
      eventsData
    }
  }

}



export default Home
