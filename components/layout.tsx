import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { HeaderComponent } from './HeaderComponent'

const Layout = ({children}:any) => {
    return (
        <div className="p-[0px]">

            <Head>
                <title>Great Commission Church</title>
            </Head>

            <header>
                <HeaderComponent title="GREAT COMMISSION CHURCH"/>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Layout
