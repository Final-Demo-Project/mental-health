import React from 'react'
import { Link } from 'react-router-dom'

const Forgotten = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white w-[700px] p-12  rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">Find Your Account</h1>
                <hr className="w-full mb-4" />
                <p className="text-center mb-6 text-gray-700">
                    Please enter your email or mobile number to search for your account.
                </p>
                <input
                    type="email"
                    placeholder="Email or mobile number"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
                />
                <hr className="w-full mb-4" />

                <div className="flex gap-2 w-full mt-4 ml-[700px]">

                    <button


                        type="button"
                        className="w-[20%] py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"

                    >
                        <Link to="/Login">Cancel</Link>

                    </button>
                    <button
                        type="submit"
                        className="w-[20%] py-3 bg-[#1877F2] hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
                    >
                        Search
                    </button>

                </div>
            </form>
        </div>


    )
}

export default Forgotten