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

interface Iprops {
  ThumbNailTitle: string
  ButtonPlaceholder: string
  date?: string
  StartTime?: string
  EndTime?: string
}

interface IImage {
  imageUrl: string
}

const Container = styled.div<IImage>`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    


    .groupthumb{
        background-image: url("${(props) => props.imageUrl}");
        cursor: pointer;
        overflow: hidden;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        width: 20rem;
        height: 30rem; 
    }
    .inner-group-thumb{
        height: 70%;
        margin-top: 150px;
        width: 100%;
        background: rgb(2, 41, 82);
        background: linear-gradient(0deg, rgb(2, 41, 82) 15%, rgba(1,157,174,0) 79%);
    }
`

export const EventItem = ({
  ThumbNailTitle,
  ButtonPlaceholder,
  date,
  StartTime,
  EndTime,
  imageUrl,
}: Iprops & IImage) => {
  return (
    <Link href={'#'}>
      <Container imageUrl={urlFor(imageUrl).toString()}>
        <div className="groupthumb md:hover:scale-110 md:transition-all md:ease-in">
          <div
            className=" inner-group-thumb 
                    w-full 
                    flex 
                    flex-col
                    items-center
                    justify-center 
                    text-white 
                    "
          >
            {/* Title */}
            <p className="text-2xl w-52 uppercase font-extrabold text-center">
              {ThumbNailTitle}
            </p>
            {/* Date */}
            <div className="text-sm py-4 flex flex-row">
              <CalendarIcon className="w-5 h-5 mx-2" />
              {date}
            </div>
            <div className="text-sm py-4">
              {StartTime} to {EndTime}
            </div>

            <ButtonComponent
              isTextButton={true}
              isFontBig={true}
              title={ButtonPlaceholder}
            />
          </div>
        </div>
      </Container>
    </Link>
  )
}
