import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonComponent from './button'
import { urlFor } from '../lib/client'


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
        background-size: contain;
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
export const GroupCard = ({groupCardData}:any) => {
    return(
        <Container imageUrl={urlFor(groupCardData.image).toString()}>
            <div className="groupthumb w-80 h-56">
                <div className=" inner-group-thumb 
                    w-full 
                    flex 
                    items-center
                    justify-center 
                    text-white 
                    bg-black 
                    bg-opacity-60">{groupCardData.title}</div>
            </div>
                <ButtonComponent isTextButton={true} isFontBig={true} title={groupCardData.buttonText} urlLink={`/groups/${groupCardData.slug.current}`} />
        </Container>
    )
}
