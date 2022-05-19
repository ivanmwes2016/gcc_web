import React from 'react'
import ButtonComponent from './button'
import { data } from './data'
import styled from 'styled-components'

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
    }

    .descrition{
        color: #555555;
        font-size:14px;
    
    }

`

const CardContainer = () => {
    return (

        <Wrapper className=" py-6 px-6 flex flex-col justify-center items-center lg:flex-row">
            
            {data.CardOne.map(item => (
                <Container key={item.title} className="py-4 rounded-xl m-3">
                    <img src={item.image} alt={item.alt} className="w-40 h-40"/>
                    <div className="InfoContainter">
                        <div className="title">{item.title}</div>
                        <div className="descrition px-4">{item.description}</div>
                        <div className="button" ><ButtonComponent title={item.LinkName} isTextButton={true}/></div>
                    </div>
                </Container>
            ))}
        </Wrapper>
        
    )
}
 export default CardContainer