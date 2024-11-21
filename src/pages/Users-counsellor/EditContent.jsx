import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 

const EditContentForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        cover: null,
        author: '',
        date: '',
        category: '',
        content: ''
    });
    const { _id } = useParams(); // Get article ID from route params
    const navigate = useNavigate();

    // Fetch existing content data
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get(`https://mental-health-api-ur3r.onrender.com/educationals/${_id}`);
                const data = response.data;
                setFormData({
                    title: data.title,
                    // author: data.author,
                    // date: data.date,
                    category: data.category,
                    content: data.content
                });
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };
        fetchContent();
    }, [_id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            cover: e.target.files[0],
        }));
    };

    const updateContent = async (event) => {
        event.preventDefault();
        setLoading(true);

        const updatedData = new FormData();
        updatedData.append("title", formData.title);
        if (formData.cover) updatedData.append("cover", formData.cover);
        // updatedData.append("author", formData.author);
        // updatedData.append("date", formData.date);
        updatedData.append("category", formData.category);
        updatedData.append("content", formData.content);

        try {
            await axios.patch(`https://mental-health-api-ur3r.onrender.com/educationals/${_id}`, updatedData);
            toast.success("Content updated successfully");
            setTimeout(() => {
                navigate('/admindashboard/content-management');
            }, 2000);
        } catch (error) {
            console.error("Error updating content:", error);
            console.log("Updating content with _id:", _id);

            toast.error("Failed to update content.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center mt-[120px]'>
            <ToastContainer />
            <h1 className="text-center text-2xl font-bold">Edit Mental Health Article</h1>
            <form onSubmit={updateContent} className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]">
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Article Title</label>
                    <input
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Image</label>
                    <input
                        type="file"
                        name="cover"
                        onChange={handleFileChange}
                        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                    />
                </div>

                {/* <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Author</label>
                    <input
                        name="author"
                        type="text"
                        value={formData.author}
                        onChange={handleInputChange}
                        required
                        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Date</label>
                    <input
                        name="date"
                        type="text"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                    />
                </div> */}

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Category</label>
                    <input
                        name="category"
                        type="text"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Description</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        rows="3"
                        required
                        className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                    ></textarea>
                </div>

                <div className='text-center'>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-4 w-[280px] py-3 ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white text-lg font-semibold transition duration-300 ease-in-out`}>
                        {loading ? "Updating..." : "Update Article"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditContentForm;
