import React from 'react'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import styled, { css } from 'styled-components'
import Link from 'next/link'

interface IProps {
  isOutline?: boolean
  isTextButton?: boolean
  isFontBig?: boolean
  title: string
  urlLink?: any
}

const ButtonComponent = ({
  isOutline,
  isTextButton,
  isFontBig,
  title,
  urlLink,
}: IProps) => {
  return (
    <div
      className={` max-w-[30%] py-4 px-4 rounded-lg cursor-pointer ${
        isOutline
          ? ' border-sky-700 border-2 hover:bg-sky-500 hover:text-white transition-all ease-in hover:border-sky-500'
          : ' bg-sky-700 text-white hover:bg-sky-500 transition-all ease-in'
      }`}
    >
      <Link href={`${urlLink}`}>
        <div className="flex flex-row justify-center items-center gap-2">
          <a>{title}</a>
          <div>
            <ArrowCircleRightIcon className=" arrow w-5 h-5" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ButtonComponent
