import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../assets/logo.jpg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-blue-900 text-white">
            <div className="container mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-28">
                {/* Logo */}
                {/* <div className="flex items-center">
                    <Link to="/">
                        <img src={NavLogo} alt="Logo" className="h-10 w-10" />
                    </Link>
                </div> */}

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-10">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <Link to="/helpline" className="hover:text-gray-300">Contact</Link>
                </nav>

                {/* Action Buttons */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/login" className="hover:text-gray-300">Login</Link>
                    <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden flex items-center focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-900 px-4 pb-4">
                    <nav className="space-y-4">
                        <Link to="/" className="block hover:text-gray-300">Home</Link>
                        <a href="#about" className="block hover:text-gray-300">About</a>
                        <Link to="/helpline" className="block hover:text-gray-300">Contact</Link>
                    </nav>
                    <div className="mt-4 space-y-4">
                        <Link to="/login" className="block hover:text-gray-300">Login</Link>
                        <Link to="/signup" className="block hover:text-gray-300">Sign Up</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
