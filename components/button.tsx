import React from 'react'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

interface IProps {
  isOutline?: boolean
  isTextButton?: boolean
  isFontBig?: boolean
  title: string
  urlLink?: any
  className?: string
}

const ButtonComponent = ({ isOutline, title, urlLink, className }: IProps) => {
  return (
    <div
      className={` text-2xl md:text-base ${className}  rounded-full cursor-pointer px-4 py-2 ${
        isOutline
          ? ' border-indigo-500 border-2 hover:bg-sky-500 hover:text-white transition-all ease-in duration-200 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500'
          : ' bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:bg-sky-500 hover:bg-gradient-to-r hover:from-violet-500 hover:hover:to-indigo-500 transition-all ease-in duration-200'
      }`}
    >
      <Link href={`${urlLink}`}>
        <div className="flex flex-row items-center justify-between w-full">
          <a className="font-bold text-sm">{title}</a>
          <div>
            <ArrowCircleRightIcon className="w-8 h-8" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ButtonComponent
