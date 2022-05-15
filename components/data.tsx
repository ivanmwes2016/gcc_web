import React, { SVGProps } from "react";
import {
    VideoCameraIcon,
    BookOpenIcon,
    InformationCircleIcon,
    CalendarIcon,
    GlobeIcon,
    
 } from '@heroicons/react/outline'
import { HtmlProps } from "next/dist/shared/lib/html-context";


interface IMenu{
    name:string,
    url:string,
    icon:any
}

interface IHero{
    title:string,
    description:string,
    image:string
}



//Interface for the Menu data.
interface IData{
    MenuItems: IMenu[]
    Logo: string
    Hero:IHero[]
    SocialMediaIcons:IMenu[]
}


//This is the main static data.
export const data:IData = {

// menu items data
    MenuItems:[
        {
            name:'LIVE SERVICE',
            url:'#',
            icon:<VideoCameraIcon className='w-8 h-8 stroke-1' />
        },

        {
            name:'ABOUT',
            url:'#',
            icon: <InformationCircleIcon className='w-8 h-8 stroke-1' />
        },

        {
            name:'SERMONS',
            url:'#',
            icon: <BookOpenIcon className='w-8 h-8 stroke-1' />
        },

        {
            name:'EVENTS',
            url:'#',
            icon: <CalendarIcon className='w-8 h-8 stroke-1' />
        },

        {
            name:'MISSIONS',
            url:'#',
            icon: <GlobeIcon className='w-8 h-8 stroke-1' />
        },
    ],

// Logo Area data
    Logo: '../public/LOGO_GCM.png',

    

//Hero Image data

    Hero:[
        {
            title:'Welcome Home',
            description:'Have you ever wondered what it feels like to be part of a global community? In these uprecendented times, we need to stay connected and build each other up. There has been never been a better time to find your familiy and get plugged in',
            image:'#'
        },
    ],

    SocialMediaIcons:[
        {
            name:'facebook',
            url:'facebook',
            icon:<GlobeIcon />
        }

    ]

}





