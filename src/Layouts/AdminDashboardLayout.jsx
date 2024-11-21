import React from 'react'

import { Outlet } from 'react-router-dom'
import AdminSidebar from '../component/AdminSidebar'

const AdminDashboardLayout = () => {
  return (
    <div className='min-h-[100vh] h-auto flex bg-gray-50'>
       {/* Sidebar */}
       <div className='w-64 bg-white shadow-lg h-full'>
        <AdminSidebar/>
       </div>

      {/* Main content section */}
       <div className='h-auto w-[100%] p-6 flex justify-center'>
        <Outlet/>

       </div>
    </div>
  )
}

export default AdminDashboardLayout