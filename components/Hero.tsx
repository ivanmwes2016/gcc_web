import React from 'react'
import ButtonComponent from './button'
import { data } from './data'
import styled from 'styled-components'

const Hero = styled.div`
    
    background-size: cover;
    background-image: url('/bg-bg.jpg');
    width: 100%;
    height: 600px;
    top: 0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        width: 800px;
    }
    
`

export const HeroComponent = () => {
    return (
        // to have a main bg image/video
        <Hero >
            
            
            {data.Hero.map(item => (
                <div key={item.title}>
                    {/* big title */}
                    <p className='text-6xl font-extrabold text-gray-300'>{item.title}</p>
                    {/* small text */}
                    <p className ='text-gray-300 text-lg font-bold py-5'>{item.description}</p>
                    <ButtonComponent isOutline={false} title='WATCH US LIVE'/>
                </div>
                
            ))}
           
        </Hero>
    )
}
