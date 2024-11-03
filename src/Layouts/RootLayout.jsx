import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = ({children, headerText}) => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout