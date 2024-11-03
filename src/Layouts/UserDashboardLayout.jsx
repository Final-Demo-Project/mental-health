import React from 'react'
import Sidebar from '../component/Sidebar'
import { Outlet } from 'react-router-dom'

const UserDashboardLayout = () => {
  return (
    <div className='min-h-sreen flex bg-gray-50'>
       {/* Sidebar */}
       <div className='w-64 bg-white shadow-lg fixed h-full'>
        <Sidebar/>
       </div>

      {/* Main content section */}
       <div className='p-6'>
        <Outlet/>

       </div>
    </div>
  )
}

export default UserDashboardLayout