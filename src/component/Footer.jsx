import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='  bg-blue-900 text-white h-[350px] pt-12'>
        <div className='flex gap-x-[60px] justify-center'>
        <div> 
            <h1 className='mb-3'>Mental Health</h1>
            <p className='mb-3'>Firmament morning sixth subdue darkness creeping gathered divide.</p>
            <div className='flex gap-x-3 mt -3 w-[200px] h-[150px]'>
            <FaFacebook />
            <FaTwitterSquare />
            <FaInstagramSquare />
            </div>
        </div>
        <div>
        <h1 className='mb-3'>Quick links</h1>
        <p>About</p>
        <p>Blogs</p>
        <p>Contact</p>
        <p>FAQ</p>
        
      </div>
      <div>
        <h1 className='mb-3'>Account</h1>
        <p>Start self assessment</p>
        <p>Mood</p>
        <p>Counseling</p>
        <p>Helpline</p>
        <p>Community Support</p>
      </div>
      <div className='mb-3'>
        <h1>Address</h1>
        <p>200, D-block, Green lane USA
+10 367 467 8934
docmed@contact.com</p>
      </div>
      </div>
      <footer className='px[30px] py[20px] text-center mt-10'>
        <p>&copy;Mental Haelth and Well-Being. All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default Footer