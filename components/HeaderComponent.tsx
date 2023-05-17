import React from 'react'
import { data } from './data'
import { MenuIcon } from '@heroicons/react/outline'
import ButtonComponent from './button'
import Link from 'next/link'

interface Props {
  title: String
}

export const HeaderComponent = ({ title }: Props) => {
  return (
    <div className="flex justify-center items-center fixed z-40  bg-gray-100/70 backdrop-blur-sm  w-full shadow-sm border-b-[1px] border-b-gray-100/60 h-32">
      <div className="w-[90%] flex justify-around items-center">
        <div className="flex flex-row items-center md:w-[30%] md:mr-10">
          <img className="md:w-20 md:h-20 w-28" src="/LOGO_GCM.png" />
          <div className=" text-slate-800 hidden md:text-lg lg:block font-bold whitespace-nowrap">
            {title}
          </div>
        </div>

        <ul className=" hidden md:flex md:flex-row md:w-[60%] md:justify-around">
          {data.MenuItems.map((item) => (
            <li
              key={item.name}
              className="flex lg:flex-col items-center md:flex-col  hover:text-sky-500 transition-all ease-in hover:scale-110 "
            >
              <div>{item.icon}</div>
              <Link href={`/${encodeURIComponent(item.slug)}`}>
                <a className="text-sm font-black whitespace-nowrap text-gray-600">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-row md:w-[30%] gap-4 md:justify-end w-full justify-around">
          <ButtonComponent title={'GIVE'} isOutline={false} />

          <ButtonComponent
            title={'CONTACT'}
            isOutline={true}
            urlLink={'/contact'}
            className={'hidden md:block'}
          />
        </div>

        <div className="w-10 inline md:hidden stroke-1">
          <MenuIcon className="  stroke-white " />
          <p>Menu</p>
        </div>
      </div>
    </div>
  )
}
