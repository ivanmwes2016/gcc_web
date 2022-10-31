import React from 'react'
import ButtonComponent from './button'
import styled from 'styled-components'
import { urlFor } from '../lib/client'
import Link from 'next/link'

export const Wrapper = styled.div`
    width: 100%;
    /* display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center; */
`


const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    width: 410px;
    height: 150;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.2);
    

    .InfoContainter{
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title{
        color: #555555;
        font-size: 18px;
        font-weight: 900;
        padding-left: 1rem;
        
    }

    .descrition{
        color: #555555;
        font-size:14px;
    }

    .infoCard{
        transform: scale(1,1);
        transition: transform 0.5s ease;
        cursor: pointer;

        &:hover{
            transform: scale(1.1, 1.1);
            background-color: red;
        }
    }

`

const Card = ({infoCardData}:any) => {

    

    return (

                <Container key={infoCardData._id}
                className="py-3 rounded-xl m-3 flex flex-row i
                tems-center cursor-pointer 
                transform 
                transition-all
                duration-500
                ease-out delay-75
                 hover:scale-110
                 hover:bg-gray-200

                
                ">
                    <img src={urlFor(infoCardData.image).toString()} className="w-40 h-32"/>
                    <div className="InfoContainter">
                        <div className="title">{infoCardData.title}</div>
                        <div className="descrition px-4">{infoCardData.descr}</div>
                        <div className="button" ><ButtonComponent title={infoCardData.button} isTextButton={true} urlLink={`/about/${infoCardData.slug.current}`} /></div>
                    </div>
                </Container>
    
        
    )
}
 export default Card