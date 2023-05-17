import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonComponent from './button'
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  CalendarIcon,
} from '@heroicons/react/solid'
import { urlFor } from '../lib/client'
import Link from 'next/link'
import Image from 'next/image'

interface Iprops {
  ThumbNailTitle: string
  ButtonPlaceholder: string
  date?: string
  StartTime?: string
  EndTime?: string
  imageUrl?: string | any
}

export const EventItem = ({
  ThumbNailTitle,
  ButtonPlaceholder,
  date,
  StartTime,
  EndTime,
  imageUrl,
}: Iprops) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className=" w-56 h-56 overflow-hidden rounded-full ">
        <Image
          src={urlFor(imageUrl).toString()}
          width={300}
          height={300}
          className=" w-40 hover:scale-125 transition-all ease-in hover:grayscale object-cover "
        />
      </div>
      <div className=" w-full flex flex-col items-center justify-center text-gray-500 mt-4">
        <p className="text-2xl w-52 uppercase font-extrabold text-center">
          {ThumbNailTitle}
        </p>

        <div className="text-sm py-2 flex flex-row">
          <CalendarIcon className="w-5 h-5 mx-2" />
          {date}
        </div>
        <div className="text-sm py-2">
          {StartTime} to {EndTime}
        </div>

        <ButtonComponent
          isTextButton={true}
          isFontBig={true}
          title={ButtonPlaceholder}
        />
      </div>
    </div>
  )
}

// imageUrl={urlFor(imageUrl).toString()}
