import React,{useState, useEffect, useReducer} from 'react'
import styled from 'styled-components'
import { env } from 'process';
import ButtonComponent from './button'
import axios from 'axios'


interface ISermons{
    SectionTitle:string,
    SermonTitle:string,
    description:string
    videoSrc:any
}

const SermonsWrapper =({SectionTitle, SermonTitle, description, videoSrc}:ISermons) => {
    return(
        <div className="flex flex-col md:flex-row justify-start">
            {/* Infor section */}
            <div className="flex flex-col w-full md:items-start md:w-3/6 md:text-left">
                <div className="text-2xl pb-2 font-thin px-4">{SectionTitle}</div>
                <div className="text-4xl font-black px-4 py-4 text-orange-500">{SermonTitle}</div>
                <p className="font-thin text-xl pb-4 px-4 ">{description}</p>
                <div className="hidden md:inline-block md:w-5/6"><ButtonComponent isTextButton={true} title="View all Sermons" isFontBig={true} /></div>
            </div>

            {/* Video Section */}
            <div className='right flex flex-col justify-center items-center md:w-full'>
                <iframe
                    width="520"
                    height="345"
                    src={videoSrc}


                />
                    

                
                <div className="py-8 md:hidden"><ButtonComponent isTextButton={true} isFontBig={true} title="View all Sermons" /></div>
            </div>

        </div> 
    )
}


export const SermonsSection = () => {
    const [title, setTitle] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [url, setUrl] = useState<any>("")

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            try{
                const res = await axios('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1UXAPGt8hjxZ1ZYgWqUQrw&key=AIzaSyAfU2lXuOZnoR8a5y1fq_0LK4LAIx44res&id&order=date&maxResults=12')
                setUrl(res.data.items[0]["id"])
                setTitle(res.data.items[0]["snippet"])
            }catch(err){
                setIsError(true)
            }

            setIsLoading(false)
        }    
        fetchData()
   
    },[])

    // console.log(data["videoId"]);
   
    return (
        
        <div className="w-full bg-cyan-800 text-gray-200 py-6 px-6">

            <SermonsWrapper
                SectionTitle="Latest Sermon"
                SermonTitle={title["title"]}
                description={title["description"]}
                videoSrc={"https://www.youtube.com/embed/"+ url["videoId"]}
            />

        </div>
    )
}
