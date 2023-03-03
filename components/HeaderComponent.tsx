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
    <div className="flex justify-between space-x-8 items-center lg:flex  bg-gray-100">
      <img className="w-20 h-20" src="/LOGO_GCM.png" />
      <div className="w-[30%] hidden text-slate-800 md:text-lg font-bold">
        {title}
      </div>

      <ul className="hidden lg:flex">
        {data.MenuItems.map((item) => (
          <li key={item.name}>
            <div>{item.icon}</div>
            <Link href={`/${encodeURIComponent(item.slug)}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ButtonComponent title={'GIVE'} isOutline={false} />

      <ButtonComponent
        title={'CONTACT'}
        isOutline={true}
        urlLink={'/contact'}
      />

      <MenuIcon className="w-10 h-10 inline lg:hidden stroke-1 stroke-slate-100 " />
    </div>
  )
}
