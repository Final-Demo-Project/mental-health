import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { apiSignup } from '../services/auth';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [loading, setLoading] = useState(false); // Handle loading state
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the page from reloading
    try {
      setLoading(true);
      const formData = new FormData(event.target); // Extract data from the form
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
      const phone = formData.get("phone");
      const role = formData.get("role");

      // Check if passwords match
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }

      const payload = { fullName, email, password, phone, role };
      const response = await apiSignup(payload);
      console.log(response.data);

      toast.success("Sign Up Successful");
      navigate("/login");
    } catch (error) {
      toast.error("Sign Up failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h1 className="text-center text-2xl sm:text-3xl font-bold pt-8">Sign Up</h1>
      <form
        className="bg-white flex flex-col gap-6 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[600px] mt-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Full Name</label>
          <input
            name="fullName"
            type="text"
            placeholder="Enter your Full Name"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Contact</label>
          <input
            name="phone"
            type="text"
            placeholder="Enter your Phone Number"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Role</label>
          <select
            name="role"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          >
            <option value="">Select a Role</option>
            <option value="user">User</option>
            <option value="counselor">Counselor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your Password"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto py-3 px-6 ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <p className="text-center text-blue-500">
            <Link to="/login">
              Already have an Account? <span className="font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
