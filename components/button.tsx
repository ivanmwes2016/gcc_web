import { title } from 'process'
import React from 'react'
import styled, { css } from 'styled-components'

interface Props{
    isPrimary:boolean,
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

   ${props => props.isPrimary?
        
        css`
            background-color: #019dae;
            color: white;
            border-color:#019dae;
            
        `:
        css`
            color: '#019dae';
            border-color:#fe6716;
        `
    }    
`

export const ButtonComponent = ({isPrimary,title }:Props) => {
    return <Button title={title} isPrimary={isPrimary}>{title}</Button>
}
