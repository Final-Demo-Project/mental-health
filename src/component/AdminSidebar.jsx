import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdMood } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";
import { FaHandsHelping } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

const AdminSidebar = () => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch('https://mental-health-api-ur3r.onrender.com/users/me')
//         const data = await response.json();
//         setProfile(data);
// } catch (error) {
//   console.error('Error fetching profile:', error);
// }
//     };
//     fetchProfile();
//   }, []);

  return (
    <div className='w-64 h-screen bg-blue-500 text-white p-6 flex flex-col fixed '>
    <div className='flex items-center mb-10'>
        <div className='w-8 h-8 bg-white rounded-full flex item-center justify-center mr-2'>
            <span className='text-black font-bold flex items-center'>M</span>
        </div>
        <span className='text-xl font-bold'>MindCare</span>
    </div>
    <nav>
        <ul>
          {/* <li className='flex flex-col items-start mt-6'>
            {profile ? (
              <>
              <span className='font-bold'>{profile.name}</span>
              <span className='text-sm'>{profile.email}</span>
              </>
            ) : (
              <p>Loading profile</p>
            )}
          </li> */}
            <li> <Link to = "/admindashboard" className='flex items-center mt-6'><MdDashboard className='mr-3 h-5 w-5' />User Management </Link></li>
            <li> <Link to = "/admindashboard/postingform" className='flex items-center mt-6'><MdDashboard className='mr-3 h-5 w-5' />Post a Content </Link></li>
            <li> <Link to = "/admindashboard/counselor-management" className='flex items-center mt-6'><MdAssessment className='mr-3 h-5 w-5'/>Counselor Management </Link></li>
            <li> <Link to = "/admindashboard/appointments" className='flex items-center mt-6'><MdMood  className='mr-3 h-5 w-5'/>Appointments</Link></li>
            <li> <Link to = "/admindashboard/content-management" className='flex items-center mt-6'><HiOutlineHeart className='mr-3 h-5 w-5' />Content Management </Link></li>
            <li> <Link to = "/admindashboard/community-support" className='flex items-center mt-6'><FaHandsHelping className='mr-3 h-5 w-5'/>Community Support</Link></li>
            <li> <Link to = "/admindashboard/mood-tracking-insights" className='flex items-center mt-6'><FaRegThumbsUp className='mr-3 h-5 w-5'/>Mood Tracking Insights</Link></li>
            <li> <Link to = "/admindashboard/helpline-resources" className='flex items-center mt-6'><FaRegThumbsUp className='mr-3 h-5 w-5'/>Helpline Resources</Link></li>
            <li> <Link to = "/admindashboard/analytics-reports" className='flex items-center mt-6'><FaRegThumbsUp className='mr-3 h-5 w-5'/>Analytics & Reporting</Link></li>
            <li> <Link to = "/admindashboard/feedback-surveys" className='flex items-center mt-6'><FaRegThumbsUp className='mr-3 h-5 w-5'/>Feedback & Surveys</Link></li>
        </ul>
    </nav>
    <div className="mt-auto pt-6">
        <ul className="space-y-4">
          <li><Link to = "/userdashboard/settings" className="flex items-center"><IoIosSettings  className="mr-3 h-5 w-5" /> Settings</Link></li>

        
          <li><Link to="/" className="flex items-center"><LuLogOut className="mr-3 h-5 w-5" /> Logout</Link></li>
        </ul>
      </div>
       
        </div>
  )
}

export default AdminSidebar