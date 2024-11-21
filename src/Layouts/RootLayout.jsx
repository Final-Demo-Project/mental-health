import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import { ToastContainer } from 'react-toastify'

const RootLayout = ({children, headerText}) => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ToastContainer/> 

    </div>
  )
}

export default RootLayout