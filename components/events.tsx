import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonComponent from './button'
import { data } from './data'
import Carousel, {consts} from 'react-elastic-carousel'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'


interface Iprops{

    ThumbNailTitle:string,
    ButtonPlaceholder:string
    date?:string
}

interface IImage{
    imageUrl:string
}

const Container = styled.div<IImage>`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    


    .groupthumb{
        background-image: url("${props => props.imageUrl}");
        overflow: hidden;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        width: 20rem;
        height: 30rem;
        box-shadow: 0px 0px 6px -1px rgba(0,0,0,0.5);
        
    }
    .inner-group-thumb{
        height: 70%;
        margin-top: 150px;
        width: 100%;
        background: rgb(2, 41, 82);
        background: linear-gradient(0deg, rgb(2, 41, 82) 15%, rgba(1,157,174,0) 79%);
    }
`

const EventItem = ({ThumbNailTitle , ButtonPlaceholder, date, imageUrl}:Iprops & IImage) => {


    return(
        
        <Container imageUrl={imageUrl}>
            <div className="groupthumb">
                <div 
                    className=" inner-group-thumb 
                    w-full 
                    flex 
                    flex-col
                    items-center
                    justify-center 
                    text-white 
                    ">
                        {/* Title */}
                        <p className="text-2xl w-52 uppercase font-light">{ThumbNailTitle}</p>
                        {/* Date */}
                        <div className="text-sm py-4">{date}</div>
                        <ButtonComponent isTextButton={true} isFontBig={true} title={ButtonPlaceholder} />
                        
                        </div>
            </div>
                
        </Container>
    )
}

const breakPoints:any =[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2, itemsToScoll:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:3},

]

const EventComponent = ({type, onClick, isEdge}:any) => {


    return (
        <div className="py-5 px-5 w-full flex justify-center items-center flex-col bg-gray-200">
            <p className=" py-5 font-thin text-4xl text-gray-700">Events</p>
       
            <Carousel breakPoints={breakPoints} className="py-6 z-0">
               
            {data.Events.map(item => (
                
                <EventItem key={item.LinkName}
                ThumbNailTitle={item.title}
                date={item.date}
                ButtonPlaceholder ={item.LinkName}
                imageUrl={item.image}
            />

            ))}
            </Carousel>

            <ButtonComponent  isFontBig title="VIEW CALENDAR" />
        </div>
    )
}

export default EventComponent
