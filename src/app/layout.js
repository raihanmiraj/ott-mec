"use client"
import Sidebar from '@/Component/Sidebar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const [sidebarExtend, setSidebarExtend] = useState(false);
  let renderData =  <div className={`pl-0  ${sidebarExtend ? "sm:pl-[180px]" : "sm:pl-[70px]"} feedGrid grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[4%] pt-20 mx-3 sm:ml-4 md:pr-[28px] lg:pr-14 gap-y-6 max-w-[100%] bg-contain `}>{children}
  </div>
  return (
    <html lang="en">
     <body className={inter.className}>   <Sidebar sidebarExtend = {sidebarExtend} setSidebarExtend={setSidebarExtend}/> {renderData} </body>
    </html>
  )
}