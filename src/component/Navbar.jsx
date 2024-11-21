import React from 'react'
import NavLogo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='bg-blue-900 flex justify-between pr-28 h-16 items-center text-white'>
                {/* <div className='w-[15vw] p-14 ml-10 '>
                    <Link to='/'><img src={NavLogo} alt="img" /></Link>
                </div> */}
                <nav className='space-x-10 ml-96'> 
                    <a href="/" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>About</a>
                    <Link to ='/helpline'><a href="#" className='nav-link'>Contact</a></Link>
                </nav>
                <div className='space-x-10'> 
                    <Link to ='/login' className='nav-link'>Login</Link>
            <Link to ='/signup' className='nav-link'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar