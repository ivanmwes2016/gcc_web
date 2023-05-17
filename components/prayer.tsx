import React from 'react'
import ButtonComponent from './button'
import { data } from './data'
import Background from '../public/pexels-luis-quintero-2774570.jpg'
import { urlFor } from '../lib/client'

interface Iprops {}

const PrayerRequest = () => {
  return (
    <div
      className=" text-white"
      style={{
        backgroundImage:
          "url('https://i.vimeocdn.com/video/1161528326-e0be5db8a08e7679b763ec1a2fe6a78a49ea5cd054a2e20973070f6b8fc564ec-d?mw=1200&mh=675')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'color-burn',
      }}
    >
      {data.PrayerText.map((item) => (
        <div className="flex-col flex justify-center items-center bg-slate-800 bg-opacity-70 py-16">
          <p className=" py-5 font-black text-4xl">{item.title}</p>
          <p className="py-5 px-5 w-full md:w-3/4 font-light text-2xl text-center">
            {item.description}
          </p>
          <ButtonComponent isFontBig title="Prayer Request" />
        </div>
      ))}
    </div>
  )
}

export default PrayerRequest
