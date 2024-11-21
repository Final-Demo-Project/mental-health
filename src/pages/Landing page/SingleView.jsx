import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiGetSingleProduct } from '../services/product';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiDelete } from '../services/auth';

const SingleView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [data, setData] = useState({});
    const [educational, setEducational] = useState({});
    const [loading, setLoading] = useState(false);

        // Fetch single product details
     const fetchEducational = async () => {
        try {
            const res = await apiGetSingleProduct(id)
            console.log('Response:',res)
              setEducational(res.data);
        } catch (error) {
            console.error('Error fetching product:', error.response?.data || error.message);
            toast.error("Failed to fetch product.");
    }
     };

     const handleDelete = async () => {
        try {
            await apiDelete(id)
            toast.success("educational deleted successfully!");
            navigate("/admindashboard/content-management")
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to delete the educational.");
        }
     };

     useEffect(() => {
        setLoading(true);
        fetchEducational().finally(() => setLoading(false));
    }, []);
    
    if (loading) return <div className='text-center py-12 text-gray-500'>Loading...</div>;
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 ">
        <div className='flex flex-col md:flex-row gap-8'>
        <div className="md:w-1/2">
        <img

                      src={`https://savefiles.org/${educational.cover}?shareable_link=493`} 
                      alt={educational.title}
                      className="w-full h-64 object-cover rounded-lg shadow-sm"
                      />
                      
                      <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">{educational.title || "Untitled"}</h2>
                      <p className="text-gray-600 mb-2">
                        <span className='font-semibold'>Author: </span>{educational.author}</p>
                  <p className="text-gray-500 mb-2">
                    <span className='font-semi'>Date: </span>{educational.date}</p>
                  <p className="text-gray-600 mb-2"><span className='font-semibold'>Category: </span>{educational.category}</p>
                  <a target='_blank' href={educational.content} className="text-gray-700 mt-2">Link to book</a>
                  
                </div>
                    
                <div className="flex gap-4 mt-6">
                   <Link  to={`/editeducationalform/${educational._id}`}>
                   <button 
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                    >
                        
                        Edit
                    </button>
                   </Link>
                    <button 
                        onClick={handleDelete}
                        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>

                        
                </div>
              
          
                </div>
    
        </div>
      );
    };
export default SingleView 