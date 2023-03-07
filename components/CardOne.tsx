import React from 'react'
import ButtonComponent from './button'
import { urlFor } from '../lib/client'

const Card = ({ infoCardData }: any) => {
  return (
    <div
      key={infoCardData._id}
      className=" w-[450px] h-[35vh] rounded-xl m-3 flex flex-col justify-between items-center cursor-pointer transform transition-all
      duration-500 ease-out delay-75 hover:scale-11 hover:bg-gray-200 bg-slate-200 shadow-md p-5"
    >
      <div className="flex md:flex-row flex-col">
        <img
          src={urlFor(infoCardData.image).toString()}
          className="md:w-48 md:h-32 w-full "
        />
        <div className=" md:w-[250px] pl-4">
          <div className="font-black text-lg md:mt-0 mt-4">
            {infoCardData.title}
          </div>
          <div className="descrition">{infoCardData.descr}</div>
        </div>
      </div>

      <ButtonComponent
        title={infoCardData.button}
        isTextButton={true}
        urlLink={`/about/${infoCardData.slug.current}`}
        className="w-full bottom-0 mt-4 mb-0"
      />
    </div>
  )
}
export default Card
