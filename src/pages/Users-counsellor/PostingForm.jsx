import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 

const PostingForm = () => {
  const [loading, setLoading] = useState(false); // Optional: Handle loading state
  const navigate = useNavigate();

  const saveContent = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Get form data
    setLoading(true); // Optional: Start loading

    try {
      const response = await axios.post(`https://mental-health-api-ur3r.onrender.com/educationals`, formData);
      console.log('Content posted:', response.data);

      // Show success notification after posting
      toast.success("Content posted successfully");

      // Wait for 3 seconds before navigating
      setTimeout(() => {
        navigate('/admindashboard/content-management'); // Navigate to dashboard
      }, 2000);

    } catch (error) {
      console.error('Error posting content:', error.response ? error.response.data : error.message);
      toast.error("Failed to post content."); // Show error notification if there's a problem
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 px-4 sm:px-8">
      <ToastContainer /> {/* Make sure this is included */}
      <h1 className="text-center text-2xl font-bold mb-6">Post Mental Health Article</h1>
      <form
        onSubmit={saveContent}
        className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-full max-w-[620px]"
      >
        {/* Title Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Article Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter article title"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Image</label>
          <input
            type="file"
            name="cover"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Author Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Author</label>
          <input
            name="author"
            type="text"
            placeholder="Enter author name"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Date Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Date</label>
          <input
            name="date"
            type="date"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Category Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Category</label>
          <input
            name="category"
            type="text"
            placeholder="Enter article category"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Content</label>
          <textarea
            name="content"
            placeholder="Enter the description"
            rows="3"
            required
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`mt-4 w-full sm:w-[280px] py-3 ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white text-lg font-semibold transition duration-300 ease-in-out`}
          >
            {loading ? "Posting..." : "Post Article"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostingForm;
