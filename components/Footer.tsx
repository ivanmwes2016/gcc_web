import React from 'react'
import { Interface } from 'readline'
import ButtonComponent from './button'
import { data } from './data'

interface Iprops{
    title:string,
    desc:string,
    btnDesc:any|string
    btnUrl?:string
    
}

const FooterHolder =({title, desc, btnDesc}:Iprops) => {
    return(
        <div className="md:flex-col md:flex md:items-center md:justify-between  md:w-64 md:h-72 sm: hidden">
            <p className="font-black text-xl text-center py-6 text-gray-700">{title}</p>
            <p className="text-center text-gray-600">{desc}</p>
            <ButtonComponent isOutline={false} title={btnDesc} />
            
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="md:w-full md:flex-wrap md:flex md:justify-between md:px-56 md:py-8">
            {data.FooterData.map(item => (
                <div key={item.title} className="py-3">
                <FooterHolder 
                    title={item.title}
                    desc={item.description}
                    btnDesc={item.buttonDesc}
                />
                </div>
            ))}

        <p className=" text-gray-500 text-sm w-full flex justify-center items-center pt-5">Designed and Coded by Ivan Mwesigwa | 07951192016 </p>
            
            
        </div>
    )
}
