import React, { useState } from 'react'
import { data } from './data'
import { MenuIcon } from '@heroicons/react/outline'
import ButtonComponent from './button'
import styled from 'styled-components'
import Link from 'next/link'

const NavHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #1b2128;
  /* display: flex;
    justify-content: space-between;
    align-items: center; */
  height: 90px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 1;

  .title {
    font-size: 18px;
    width: 30%;
    font-weight: bold;
    color: #e6e6e6;
  }

  ul {
    /* flex-direction: row; */
    width: 83%;
    justify-content: center;
    align-items: center;
  }

  li {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 20px;
    align-items: center;
    font-size: 12px;
    height: 90px;
    color: #e6e6e6;

    :hover {
      border-bottom-width: 4px;
      border-bottom-color: #019dae;
      /* height: 90px; */
      color: #019dae;
      cursor: pointer;

      a {
        color: #019dae;
      }

      transition: all 0.5s;
    }

    a {
      color: #e6e6e6;
      font-weight: bold;
      transition: all 0.5s;
    }
    transition: all 0.5s;
  }
`

interface Props {
  title: String
}

export const HeaderComponent = ({ title }: Props) => {
  return (
    <NavHeader className="flex justify-between space-x-8 items-center lg:flex ">
      <img className="w-20 h-20" src="/LOGO_GCM.png" />
      <h2 className="title hidden lg:inline">{title}</h2>

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
    </NavHeader>
  )
}
