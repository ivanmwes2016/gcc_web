import React, { useEffect, useState } from 'react'
import ButtonComponent from './button'
import styled from 'styled-components'
import { urlFor } from '../lib/client'

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface IBannerData {
  heroBanner: any
}

export const HeroComponent = ({ heroBanner }: IBannerData) => {
  return (
    // to have a main bg image/video
    <div
      className={`w-full h-[100vh] top-0 m-0 p-0 flex justify-center items-center`}
      style={{
        backgroundImage: `url(${urlFor(heroBanner.mainImage).toString()})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl font-extrabold text-gray-300 text-center px-5">
          {heroBanner.title}
        </p>
        <p className="text-gray-300 text-lg font-bold py-5 w-96 lg:w-4/6 px-8 text-center">
          {heroBanner.description}
        </p>
        <ButtonComponent
          isOutline={false}
          title={heroBanner.ButtonName}
          urlLink={heroBanner.urlLink}
        />
      </div>
    </div>
  )
}
