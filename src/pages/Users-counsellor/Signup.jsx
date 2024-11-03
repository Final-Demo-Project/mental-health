import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify'
import { apiSignup } from '../services/auth'
import 'react-toastify/dist/ReactToastify.css'

// const getRoles = async () => {
//   try {
//     const response = await axios.get(`https://advertisement-api.onrender.com/categories`);
//     getRoles(response.data); // Set roles from API response
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     toast.error("Failed to load categories");
//   }
// };

// // Fetch roles when the component mounts
// useEffect(() => {
//   getRoles();
// }, []);

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) =>{
    event.preventDefault() //prevent the page from reloading
    try{
      //prepare data to be sent to backend
      setLoading(true)
      const formData = new FormData(event.target) //takes data from the form
      const fullName = formData.get("fullName")
      const email = formData.get("email")
      const password = formData.get ("password")
      const confirmPassword = formData.get("confirmPassword")
      const phone = formData.get("phone")
      const userType = formData.get("role")

      console.log(fullName, email, password ,phone)

       //Check if passwords match
       if (password !== confirmPassword) {
        toast.error("Passwords do not match!")
        return
       }
       // if (name && email && password && userType)

       const payload = {fullName: fullName, email: email, password: password, role:"counselor" }

       const response = await apiSignup(payload)
       console.log(response.data)
       toast.success("Sign Up Successfull")
       navigate("/login")

   } catch (error) {
    toast.error("Sign Up failed. please try again.")

    console.log(error)

   } finally {
    setLoading(false)
   }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-center text-2xl font-bold pt-8">Sign Up</h1>
      <form className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px] mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Full Name </label>
          <input
            name="fullName"
            type="text"
            placeholder="Enter your Full Name"
            required
            className=" p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Email </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            required
            className=" p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Contact </label>
          <input
            name="phone"
            type="email"
            placeholder="Enter your Phone Number"
            required
            className=" p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Role</label>
          <select name="category" required className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2">
            <option value="">Select a Role</option>
            {/* {Array.isArray(role) && categories.length > 0 ? (
              roles.map((role) => (
                <option key={role.id} value={role.id}>
                
                </option>
              ))
            ) : (
              <option disabled>Loading roles...</option>
            )} */}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2"> Password </label>
          <input
            name="password"
            type="password"
            required
            className=" p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 " />

        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Confirm Password </label>
          <input
            name="confirmPassword"
            type="password"
            required
            className=" p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 " />

        </div>


        <div className='flex flex-row items-center justify-center gap-6'>


          <button
            type="submit"
            className="mt-4 w-[190px]  py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out "
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <p className='flex justify-center mt-6 text-blue-500'> <Link to="/login">Already have an Account? <span className=' text-blue-500'>Login</span> </Link> </p>
        </div>


      </form>
      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
    
  )
}

export default Signup