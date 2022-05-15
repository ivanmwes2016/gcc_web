import React from 'react'
import styled from 'styled-components'
import { ButtonComponent } from './button'
import { data } from './data'

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
                <div>
                    {/* big title */}
                    <p className='text-6xl font-extrabold text-gray-300'>{item.title}</p>
                    {/* small text */}
                    <p className ='text-gray-300 text-lg font-bold py-5'>{item.description}</p>
                    <ButtonComponent isPrimary={true} title='WATCH US LIVE'/>
                </div>
                
            ))}

            


            
           
        </Hero>
    )
}
