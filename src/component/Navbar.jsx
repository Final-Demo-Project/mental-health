import React from 'react'
import NavLogo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='bg-blue-900 flex justify-between pr-28 h-16 items-center text-white'>
                <div className='w-[15vw] p-14 ml-10 '>
                    <Link to='/'><img src={NavLogo} alt="img" /></Link>
                </div>
                <nav className='space-x-10 ml-96'> 
                    <a href="/">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <div>
                    {/* <button><Link to ='/login'>Login</Link></button>
            <button><Link to ='/signup'>Sign Up</Link></button> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar