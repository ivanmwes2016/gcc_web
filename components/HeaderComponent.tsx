import React, { useState } from 'react'
import { data } from './data'
import { MenuIcon } from '@heroicons/react/outline'
import ButtonComponent from './button'
import styled from 'styled-components'



const NavHeader = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: rgb(229 231 235);
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    height: 90px;
    padding-left: 20px;
    padding-right: 20px;
    z-index:1;

    .title{
        font-size: 18px;
        width: 30%;
        font-weight: bold;
        color: #464646;
        
    }

    ul{
        
        /* flex-direction: row; */
        width: 83%;
        justify-content: center;
        align-items: center;
    }

    li{
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 20px;
        align-items: center;
        font-size: 12px;
        height: 90px;
        color: #606060;

        :hover{
            border-bottom-width: 2px;
            border-bottom-color: #019dae ;
            height: 90px;
        }
    }

    a{
        color: #019dae;
        font-weight: bold;
    }

`

interface Props{
    title:String
}


export const HeaderComponent = ({title}:Props) => {

    const [state, setstate] = useState(null)

    return (
        <NavHeader className="flex justify-between space-x-8 items-center lg:flex ">
            <img className='w-20 h-20' src='/LOGO_GCM.png' />
            <h2 className='title hidden lg:inline'>{title}</h2>

            <ul className='hidden lg:flex'>
                {data.MenuItems.map( item => (
                    <li key={item.name}>
                        <div>{item.icon}</div>
                        <a>{item.name}</a>
                    </li>
                ))}
            </ul>

            <ButtonComponent title={'GIVE'} isOutline={false} />

            <ButtonComponent title={'CONTACT'} isOutline={true} />

            <MenuIcon className='w-10 h-10 inline lg:hidden stroke-1 stroke-sky-900 ' />

       
        </NavHeader>
    )
}





// export const HeaderComponent = () => {
//     console.log(data.MenuItems);
//     return (
//         <nav className='flex  flex-row w-full h-20 bg-gray-200 items-center'>
//             <h2>GREAT COMMISION</h2>
//             <ul className='flex flex-row w-10/12 justify-center items-center list-none'>
//                 {data.MenuItems.map( item => (
//                     <li  className='flex-3 justify-center list-none items-center mr-6 ml-6 text-xs  hover:border-b-2 h-20 pt-3 border-b-cyan-800 '>
//                         <div>{item.icon}</div>
//                         <a className='cursor-pointer'>{item.name}</a>
//                         </li>
//                 ))}
//             </ul>
       
//         </nav>
//     )
// }







