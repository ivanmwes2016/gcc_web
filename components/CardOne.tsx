import React from 'react'
import ButtonComponent from './button'
import { urlFor } from '../lib/client'
import Image from 'next/image'

const Card = ({ infoCardData }: any) => {
  return (
    <div
      key={infoCardData._id}
      className="md:w-[450px] md:h-[250px] rounded-xl m-3 flex flex-col justify-between items-center cursor-pointer transition-all
      duration-500 ease-in delay-75 hover:scale-11 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 bg-slate-200 shadow-md p-5 hover:text-white"
    >
      <div className="flex md:flex-row flex-col w-full">
        <div className=" w-40 h-40 overflow-hidden rounded-full">
          <Image
            width={200}
            height={200}
            src={urlFor(infoCardData.image).toString()}
            className="md:w-48"
          />
        </div>
        <div className="pl-4 w-60">
          <div className="font-black text-lg md:mt-0 mt-4">
            {infoCardData.title}
          </div>
          <div className="descrition">{infoCardData.descr}</div>

          <ButtonComponent
            title={infoCardData.button}
            isTextButton={true}
            urlLink={`/about/${infoCardData.slug.current}`}
            className="w-full bottom-0 mt-4 mb-0"
          />
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default Card
