import sanityClient from '@sanity/client'
import imgUrlBuilder from '@sanity/image-url'

export const client = sanityClient(
    {
    projectId:'dbb2n83w',
    dataset:'production',
    useCdn:true,
    apiVersion:'v2021-10-21',
    token:process.env.NEXT_PUBLIC_SANITY
    }
)

const  builder = imgUrlBuilder(client)
export const urlFor = (source:string) => builder.image(source)