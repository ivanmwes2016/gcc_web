import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonComponent from './button'
import { data } from './data'
import Carousel, {consts} from 'react-elastic-carousel'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'


interface Iprops{

    ThumbNailTitle:string,
    ButtonPlaceholder:string
    data?:object
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
        background-size: 120%;
        background-repeat: no-repeat;
    }
    .inner-group-thumb{
        height: 34%;
        margin-top: 150px;
        width: 100%;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: #683bb7;
    color: #fff;
    margin: 15px;
    font-size: 4em;
`



const GroupItem = ({ThumbNailTitle , ButtonPlaceholder, data, imageUrl}:Iprops & IImage) => {


    return(
        
        <Container imageUrl={imageUrl}>
            <div className="groupthumb w-80 h-56">
                <div 
                    className=" inner-group-thumb 
                    w-full 
                    flex 
                    items-center
                    justify-center 
                    text-white 
                    bg-black 
                    bg-opacity-60">{ThumbNailTitle}</div>
            </div>
                <ButtonComponent isTextButton={true} isFontBig={true} title={ButtonPlaceholder} />
        </Container>
    )
}

const breakPoints:any =[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2, itemsToScoll:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},

]

const GroupComponent = ({type, onClick, isEdge}:any) => {

    const myArrow = () => {
        const pointer = type === consts.PREV ? `${ArrowCircleLeftIcon}` :`${ArrowCircleRightIcon}`
        return(
            <button onClick={onClick} disabled={isEdge}>{pointer}</button>
        )

    }

    return (
        <div className="py-5 px-5 w-full flex justify-center items-center flex-col">
            <p className="text-2xl pb-5 font-thin">Teams & Groups</p>
       
            <Carousel breakPoints={breakPoints}>
               

            {data.TeamGroups.map(item => (
                
                <GroupItem key={item.LinkName}
                ThumbNailTitle={item.title}
                ButtonPlaceholder ={item.LinkName}
                imageUrl={item.image}
    
            />

            ))}
            </Carousel>
          
        </div>
    )
}

export default GroupComponent
