import React, { useState } from 'react'
import styled from 'styled-components'
// import ButtonComponent from './button'
import { data } from '../components/data'
import Carousel from 'react-elastic-carousel'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import { GetStaticProps } from 'next'
import mainData from "../data/data.json"


interface Iprops{

    ThumbNailTitle:string,
    ButtonPlaceholder:string
    data?:object
    Link?:any
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
const GroupCard = ({ThumbNailTitle , ButtonPlaceholder, data, imageUrl, Link}:Iprops & IImage) => {


    return(
        
        <Container imageUrl={imageUrl}>
            <div className="groupthumb w-80 h-56">
                <div className=" inner-group-thumb 
                    w-full 
                    flex 
                    items-center
                    justify-center 
                    text-white 
                    bg-black 
                    bg-opacity-60">{ThumbNailTitle}</div>
            </div>
                {/* <ButtonComponent isTextButton={true} isFontBig={true} title={ButtonPlaceholder} urlLink={Link} /> */}
        </Container>
    )
}

const breakPoints:any =[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2, itemsToScoll:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:3},

]

// Implementing SSG
export const getStaticProps: GetStaticProps = async() => {
   
    return{
        props:{
            mainData,
        }
    } 
}

export const GroupComponent = ({props}:any) => {
    console.log("props", props);
    return (
        <div className="py-5 px-5 w-full flex justify-center items-center flex-col">
            <p className=" pb-5 font-thin text-3xl">Teams & Groups</p>
{/*        
            <Carousel breakPoints={breakPoints} className="py-6">
               
            {data.TeamGroups.map((item: { title: string; LinkName: string; image: string; slug: any }) => (
                
                <GroupCard 
                ThumbNailTitle={item.title}
                ButtonPlaceholder ={item.LinkName}
                imageUrl={item.image}
                Link={item.slug}
            />

            ))}
            </Carousel> */}

            <p className=" py-6 text-gray-700 font-bold text-3xl">Our Commitment to Racial Diversity</p>
            <p className="w-3/4 font-thin text-2xl pb-4 px-4 text-gray-700">{data.DiversityText}</p>
            {/* <ButtonComponent  isFontBig title="READ MORE" /> */}
        </div>
    )
}

export default GroupComponent
