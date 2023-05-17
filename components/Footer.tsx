import React from 'react'
import { Interface } from 'readline'
import ButtonComponent from './button'
import { data } from './data'

interface Iprops {
  title: string
  desc: string
  btnDesc: any | string
  btnUrl?: string
}

const FooterHolder = ({ title, desc, btnDesc }: Iprops) => {
  return (
    <div className="flex-col flex items-center justify-between  md:w-64 md:h-55 ">
      <p className="font-black text-lg text-center text-gray-700">{title}</p>
      <p className="text-center my-4 text-gray-600 text-sm">{desc}</p>
      <div className="hidden md:block">
        <ButtonComponent isOutline={false} title={btnDesc} />
      </div>
      <div className="text-sm md:hidden p-3 rounded-full">
        <ButtonComponent title="MORE INFO" />
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <div>
      <div className="md:w-full grid w-full md:grid-cols-3 grid-cols-2 md:justify-center md:px-56 md:py-8 border-t-2 border-gray-200 bg-lightGray ">
        {data.FooterData.map((item) => (
          <div key={item.title} className="py-4 flex justify-center">
            <FooterHolder
              title={item.title}
              desc={item.description}
              btnDesc={item.buttonDesc}
            />
          </div>
        ))}
      </div>

      <p className=" text-gray-500 text-xs w-full flex justify-center items-center py-5">
        Designed and Coded by Ivan Mwesigwa | 07951192016
      </p>
    </div>
  )
}
