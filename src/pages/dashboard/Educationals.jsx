import React, { useEffect, useState } from 'react'
import EducationalTile from './EducationalTile'
import { apiGetUserProducts } from '../services/product';

const Educationals = () => {
      // State to store educationals
  const [educationals, setEducationals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    // Function to get educationals
    const getEducationals = async () => {
   try {
          // Fetch educationals from API
    const response = await apiGetUserProducts();
    console.table(response.data);
    setEducationals(response.data);
  } catch (err) {
    console.error("Error loading educationals:", err); // Log detailed error
    setError("Failed to load educationals.");
} finally {
    setLoading(false);
}
    };

      // Call the function with useEffect
useEffect(() => {
    getEducationals();
}, []);

  // Render loading or error message
  if (loading) {
    return <div className="text-center py-12">Loading contents...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }
  return (
    <div className="w-full bg-blue-50 py-12">
      <div className=" p-8 bg-white rounded-lg shadow-md">
        {/* Add Educational Button */}
        <Link
          to="/postingform"
          className="inline-block px-8 py-3 mb-8 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300 font-poppins"
        >
          + Add Educational Content
        </Link>

        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center font-poppins">
          All Educational Contents
        </h1>

        {educationals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-roboto">
         {educationals.map((educational) => (
            <EducationalTile // Use EducationalTile component
            key={educational.id}
            id={educational.id}
            title={educational.title}
            author={educational.author}
            date={educational.date}
            category={educational.category}
            content={educational.content}
            />
             ))}
             </div>
        ) : (
            <div className="text-center py-12">No educational content available at the moment.</div>

        
        )}
        </div>
        </div>
  );
};

export default Educationals