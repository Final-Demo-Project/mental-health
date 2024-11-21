import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AllEduContent = () => {
    const [educationals, setEducationals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEducationals();
    }, []);



    const fetchEducationals = async () => {
        try {
            const response = await axios.get("https://mental-health-api-ur3r.onrender.com/educationals");
            setEducationals(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching contents:", error);
        }
    };

    return (
        <div className="flex flex-wrap w-full mt-10">
            {educationals.length > 0 ? (
                educationals.map((educational) => (
                    <div
                        id="all-educationals"
                        key={educational.id}
                        className="shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
                    >
                        <Link to={`/educationals/${educational._id}`}>
                            <img
                                src={`https://savefiles.org/${educational.cover}?shareable_link=493`}
                                alt={educational.title}
                                className="w-full h-48 object-cover"
                                style={{ objectPosition: 'center' }}
                            />
                        </Link>
                        <div className="mt-4">
                            <h2 className="font-bold text-lg text-gray-800">{educational.title}</h2>
                            <p className="text-gray-600">{educational.author}</p>
                            <p className="text-gray-500 text-sm">{educational.date}</p>
                            <p className="text-gray-600">{educational.category}</p>
                            <a target='_blank' href={educational.content} className="text-gray-700 mt-2">Link to book</a>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading contents...</p>
            )}
        </div>
    );
};

export default AllEduContent;