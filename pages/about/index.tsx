import React, { PropsWithChildren } from 'react'
import { FetchConfig } from '../../lib/FetchConfig'
import { IAboutPage } from '../../lib/types/interfaces'
import { urlFor } from '../../lib/client'
import BlockContent from '../../components/BlockContent'
import Image from 'next/image'
import ButtonComponent from '../../components/button'

interface Props {
  data: IAboutPage
}

export default function index({ data }: Props) {
  return (
    <div>
      <div
        className="h-[900px] md:h-[700px] lg:h-[900px] bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center text-white "
        style={{
          backgroundImage: `url(${urlFor(data?.headerImg?.url)})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="flex flex-col items-center w-full">
          <p className=" text-5xl text-center font-bold shadow-sm">
            {data?.title}
          </p>
          <p className=" text-3xl md:text-5xl text-center font-thin mt-5 w-[70%] md:w-[30%]">
            {data.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full bg-gray-50 flex justify-center items-center md:py-8 py-4">
          {data.body?.slice(0, 1).map((el, key: number) => (
            <BlockContent
              key={key}
              blocks={el.desc}
              className="text-center max-w-6xl md:py-10 md:px-0 font-light md:text-xl text-lg py-10 px-16 leading-8 flex flex-col justify-center items-center"
            />
          ))}
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          {data.body?.slice(1, 4).map((el, key: number) => (
            <div
              key={key}
              className={`flex flex-col justify-center items-center w-full py-12 ${
                key === 1 &&
                `bg-gradient-to-r from-sky-500 to-indigo-500 text-white`
              }
              }`}
            >
              <p className={`text-center font-black text-2xl text-gray-700 `}>
                {el.title}
              </p>

              {el.ministers && (
                <div className="flex flex-col justify-center items-center w-full">
                  <p className="my-4 font-thin text-3xl text-center px-2">
                    {el.ministers.name}
                  </p>
                  <div className=" w-48 h-48 overflow-hidden rounded-full ">
                    <Image
                      src={urlFor(el.ministers?.minImage.url).toString()}
                      width={200}
                      height={200}
                      className=" w-40 hover:scale-125 transition-all ease-in hover:grayscale object-cover "
                    />
                  </div>
                </div>
              )}

              {el.ministers && (
                <>
                  <BlockContent
                    blocks={el.ministers.bio}
                    className="text-center max-w-3xl md:py-5 md:px-0 font-light md:text-xl text-lg py-5 px-16 leading-8"
                  />
                  <ButtonComponent title="See our leadershp" />
                </>
              )}

              {el.desc && (
                <BlockContent
                  blocks={el.desc}
                  className="text-center max-w-3xl md:py-5 md:px-0 font-light md:text-xl text-lg py-5 px-16 leading-8"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async (): Promise<any> => {
  const data = await FetchConfig.GetAboutPageInformation()
  return {
    props: {
      data,
    },
  }
}
