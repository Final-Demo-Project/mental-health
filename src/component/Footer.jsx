import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-blue-900 text-white pt-12">
            {/* Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 text-center md:text-left">
                    {/* Mental Health Section */}
                    <div className="w-full md:w-auto max-w-xs">
                        <h1 className="mb-3 text-lg font-bold">Mental Health</h1>
                        <p className="mb-3 text-sm">
                            Mental pain is less dramatic than physical pain, but it is more common and also
                            harder to bear.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4 text-2xl">
                            <FaFacebook className="hover:text-gray-300" />
                            <FaTwitterSquare className="hover:text-gray-300" />
                            <FaInstagramSquare className="hover:text-gray-300" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-auto max-w-xs">
                        <h1 className="mb-3 text-lg font-bold">Quick Links</h1>
                        <ul className="space-y-2 text-sm">
                            <li>About</li>
                            <li>Blogs</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="w-full md:w-auto max-w-xs">
                        <h1 className="mb-3 text-lg font-bold">Services</h1>
                        <ul className="space-y-2 text-sm">
                            <li>Start Self Assessment</li>
                            <li>Mood</li>
                            <li>Counseling</li>
                            <li>Helpline</li>
                            <li>Community Support</li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="w-full md:w-auto max-w-xs">
                        <h1 className="mb-3 text-lg font-bold">Address</h1>
                        <p className="text-sm">
                            200, D-block, Green Lane, USA <br />
                            +10 367 467 8934 <br />
                            docmed@contact.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <footer className="text-center py-6 mt-8 bg-blue-800">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Mental Health and Well-Being. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
