import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Helpline = () => {
  return (
    <div className="counsel min-h-screen bg-gray-100 py-12 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white p-8 shadow-lg rounded-lg flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Contact Information and Helplines Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-blue-700 mb-8">Contact Us</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">General Contact Information</h2>
            <p className="mb-4">
              We’re here to help! For any inquiries, feel free to reach out by email or phone.
            </p>
            <p>
              <strong>Email:</strong> support@mentalhealth.org
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Suicide & Crises Lines</h2>
            <ul className="space-y-2">
              <li>
                <strong>Ambulance:</strong> 193
              </li>
              <li>
                <strong>Ashanti Region:</strong>0322022323
              </li>
              <li>
                <strong>Brong Ahafo Regionn:</strong> 0322022323
              </li>
              <li>
                <strong>Greater Accra Region:</strong> 0302662441
              </li>
              <li>
                <strong>Northern Region:</strong> 0372022889
              </li>
              <li>
                <strong>Western Region:</strong> 0312046121
              </li>
              <li>
                <strong>Police:</strong> 191/18555
              </li>
            </ul>
          </section>
          <h2 className="text-xl font-semibold mt-6 mb-4">FOLLOW US</h2>
          <section className='flex space-x-5'>
            <FaInstagramSquare />   
          <FaFacebook />   
          <FaLinkedin />   
          </section> <section>

          </section>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form
            action="https://formspree.io/f/xeoqgrlr"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="first-name">
                First Name
              </label>
              <input
                type="text"
                name="First Name"
                id="first-name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="last-name">
                Last Name
              </label>
              <input
                type="text"
                name="Last Name"
                id="last-name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="Message"
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className=" py-[10px] px-[25px] bg-blue-700 text-white text-base font-bold rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Helpline