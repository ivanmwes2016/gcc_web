import React from 'react'
import styled from 'styled-components'
import ButtonComponent from './button'
import { data } from './data'

const PrayerContainer = styled.div`
    background-color: #002237;
    width: 100%;
    color: white;

`

interface Iprops{

}

const PrayerRequest = () => {
    return (
        <PrayerContainer className="py-5">
            {data.PrayerText.map((item) => (
                <div className="flex-col flex justify-center items-center">

                    <p className=" py-5 font-black text-4xl">{item.title}</p>
                    <p className="py-5 w-3/4 font-thin text-2xl">{item.description}</p>
                    <ButtonComponent  isFontBig title="Prayer Request" />

                </div>
            ))}
           
            
        </PrayerContainer>
    )
}

export default PrayerRequest
