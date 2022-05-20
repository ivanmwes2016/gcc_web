import React, { useState } from 'react'
import Slider from "react-slick"
import styled from 'styled-components'
import ButtonComponent from './button'

interface Iprops{

    ThumbNailTitle:string,
    ButtonPlaceholder:string
    data?:object
}

interface IImage{
    imageUrl:string
}

const Container = styled.div<IImage>`
    .groupthumb{
        /* background-image: url("${props => props.imageUrl}"); */
        background-image: url("/bg-bg.jpg");
    }
`

const GroupThumbnail = ({ThumbNailTitle , ButtonPlaceholder, data, imageUrl}:Iprops & IImage) => {

    // const [display, setDisplay] = useState<boolean>(false)
    // const [width, setWidth] = useState<number>(600)

    const settings:any ={
        dots:true,
        infinite:false,
        speed:500,
        slidesToshow:3,
        slidesToScroll:1
    }

    return(
        <div>
            <div className="groupthumb w-80 h-56 bg-local rounded-2x">
                <div className="w-44 text-black">{ThumbNailTitle}</div>
            </div>
                <ButtonComponent isTextButton={true} isFontBig={true} title={ButtonPlaceholder} />
        </div>
    )
}


const GroupComponent = () => {
    return (
        <div className="py-5">
            <p className="text-2xl pb-2 font-thin px-4">Teams & Groups</p>
            <GroupThumbnail
                ThumbNailTitle="Tile is Hear"
                ButtonPlaceholder ="I am Button"
                imageUrl="/bg-bg.jpg"
            />
        </div>
    )
}

export default GroupComponent
