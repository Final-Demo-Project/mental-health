import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../component/AdminSidebar';
import { FaBars } from 'react-icons/fa';

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform md:transform-none md:relative z-20 w-64 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <AdminSidebar />
      </div>

      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="md:hidden p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Overlay for Sidebar in Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
