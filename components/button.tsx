
import React from 'react'
import {ArrowCircleRightIcon} from '@heroicons/react/solid'
import styled, { css } from 'styled-components'
import Link from 'next/link'

interface IProps{
    isOutline?:boolean,
    isTextButton?:boolean,
    isFontBig?:boolean,
    title:string,
    urlLink?:any
    
}

const Button = styled.button<IProps>`
    font-weight: bold;
    font-size: ${props => props.isFontBig? '15px': '12px'};
    padding:8px 0px 8px 0px;
    width:150px;
    margin-left: 20px;
    border-radius: 20px;
    border-width: 1.5px;


   ${props => !props.isOutline?
        
        css`
            
            background-color: #ff8400;
            color: white;
            border-color:#ff8400;
            transition: all 0.5s;
            :hover{
                background-color: #ffcc00;
                color: white;
                border-color:#ffcc00;
                transition: all 0.5s;
                /* font-size: medium; */
                
            }
           
    
        `:
        css`
            color: white;
            border-color:#fe6716;
           
        `
    };

    ${props => props.isTextButton?
       
        css`
            .arrow{
                display: inline;
            };
            color: #ff8400;
            padding:0;
            border: none;
            background-color: rgba(0,0,0,0);
            :hover{

                .arrow{
                display: inline;
                color: gray;
                font-size: small;
                background-color: rgba(0,0,0,0);
                transition: 0.5s;
                
                }
                
            }
        `
        :
        css`
            .arrow{
                display: none;
            };
        `
    };
`

const ButtonComponent = ({isOutline, isTextButton, isFontBig,title, urlLink }:IProps) => {
    return <Button isOutline={isOutline} isTextButton={isTextButton} title={title} isFontBig={isFontBig}>
        <Link href={`${urlLink}`}>
        <a>{title} <span> <ArrowCircleRightIcon className=" arrow w-5 h-5" /> </span></a>
        </Link>
        </Button>
       
}


export default ButtonComponent
