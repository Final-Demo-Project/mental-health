import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';



const PostingForm = () => {
const [loading, setLoading] = useState(false);// Optional: Handle loading state




const saveContent = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Get form data
    setLoading(true); // Optional: Start loading

    // try {
    //     const response = await axios.post(`https://advertisement-api.onrender.com/adverts`, formData);
    //     console.log('Advert posted:', response.data);
        
    //     // Show success notification after posting advert
    //     toast.success("Advert posted successfully");
        
    //     // Wait for 3 seconds before navigating
    //     setTimeout(() => {
    //         navigate('/dashboard'); // Navigate to dashboard
    //     }, 2000);
        
    // } catch (error) {
    //     console.error('Error posting advert:', error);
    //     toast.error("Failed to post advert."); // Show error notification if there's a problem
    // } finally {
    //     setLoading(false); // Stop loading after request completes
    // }
};


    return (
        <div className='flex flex-col justify-center items-center mt-[120px]'>
          <ToastContainer/> {/* Make sure this is included */}
          <h1 className="text-center text-2xl font-bold">Post Mental Health Article</h1>
          <form onSubmit={saveContent} className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]">
            
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
                name="image"
                required
                className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
              />
            </div>
    
            {/* Description Field */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold mb-2">Description</label>
              <textarea
                name="description"
                placeholder="Enter the Description"
                rows="3"
                required
                className="p-3 border border--400 rounded-lg focus:outline-none focus:ring-2"
              ></textarea>
            </div>
             {/* Submit Button */}
            <div className='text-center'>
                <button
                 type="submit"
                 disabled={loading} // Disable button while loading
                 className={`mt-4 w-[280px] py-3 ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white text-lg font-semibold transition duration-300 ease-in-out`}>
               {loading ? "Posting..." : "Post Article"}
                </button>

            </div>
     
          </form>
        
        <ToastContainer
        />
        </div>
      );

}
export default PostingForm