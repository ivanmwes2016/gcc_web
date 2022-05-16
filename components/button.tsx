
import React from 'react'
import {ArrowCircleRightIcon} from '@heroicons/react/solid'
import styled, { css } from 'styled-components'

interface Props{
    isOutline?:boolean,
    isTextButton?:boolean,
    title:string
    
}

const Button = styled.button<Props>`
    font-weight: bold;
    font-size: 12px;
    padding:8px 0px 8px 0px;
    width:150px;
    margin-left: 20px;
    border-radius: 20px;
    border-width: 1.5px;

   ${props => !props.isOutline? 
        
        css`
            background-color: #019dae;
            color: white;
            border-color:#019dae;
            .arrow{
                display: none;
            }
            
        `:
        css`
            color: '#019dae';
            border-color:#fe6716;
            .arrow{
                display: none;
            }
        `
    };

    ${props => props.isTextButton?
       
        css`
            .arrow{
                display: inline;
            };
            color: #ff8400;
            padding:0 ;
            border: none;
            background-color: rgba(0,0,0,0);
            
        `
        
        :
        css`
            .arrow{
                display: none;
            };
        `
    

    }

    
`

const ButtonComponent = ({isOutline, isTextButton,title }:Props) => {
    return <Button  isOutline={isOutline} isTextButton={isTextButton} title={title}>
        {title} <span> <ArrowCircleRightIcon className=" arrow w-5 h-5" /> </span>
        </Button>
}


export default ButtonComponent
