import axios from 'axios';
import React, { useState,useEffect } from 'react'

const SearchBar = () => {
      // State for managing the search query, fetched data, and category filter
const [query, setQuery] = useState("");
const [category, setCategory] = useState(""); // Default filter set to automobile
const [data, setData] = useState([])
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null)
const [debouncedQuery, setDebouncedQuery] = useState(query); // Debounced query

 // Debounce logic to delay API calls until typing stops
 useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedQuery(query);
  }, 500); // Delay of 500ms
  return () => clearTimeout(timer);
}, [query]);

// Fetch data whenever debouncedQuery or category changes
useEffect(() => {
  if (debouncedQuery.length >= 3) {
    fetchData(debouncedQuery);
  } else if (debouncedQuery === "") {
    setData([]); // Clear results if query is empty
  }
}, [debouncedQuery, category]);

  // Function to fetch data based on the query and selected category
const fetchData = async (searchQuery) => {
    try {
        setLoading(true);
        const response = await axios.get(
            `https://mental-health-api-ur3r.onrender.com/educationals`,
            {
            params: {
            search: searchQuery,
            category: category || undefined,
        },
        },
        );

  setData(response.data);
  setLoading(false);
  setError(null);
 

    } catch (err) {
        setError("Error fetching data")
        setLoading(false);
    }
};
  // Handle the input change in the search bar
   const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 3) setError(null);
   };

   // Handle category filter change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
     //Handle the search when the button is clicked or Enter is pressed
const handleSearch = () => {
    if (query.length >= 0) {
        fetchData(query);
    } else {
        setError("Please enter at least 3 character.");
    }
};
//   // Handle Enter key press for search
// const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//         handleSearch();
//     }
// };
  return (
    <div className='search-container pt-10 flex justify-center items-center flex-col '>
    <div className="search-bar-wrapper w-[60vw] flex flex-col  items-center">
    {/* Search input, button, and filter combined into a flex container */}
     <div className="flex w-full ">
     <select
          value={category}
          onChange={handleCategoryChange}
          className="category-dropdown h-[80px]  p-3 border rounded-lg mb-4 l"
        >
          <option value="">All Categories</option>
          <option value="Anxiety Management">Anxiety Management</option>
          <option value="Stress Management">Stress Management</option>
          <option value="Depression Management">Depression Management</option>
          <option value="Mood Disorder">Mood Disorder</option>
          <option value="Mood Disorder">Trauma and R</option>
        </select>
        <input
        type="text"
        placeholder="search by title...`"
        value={query}
        onChange={handleInputChange}
        // onKeyPress={handleKeyPress}  // Trigger search on Enter
        className="search-input p-5 flex-grow border h-[80px] "
        />
        
     {/* Search button */}
      <button    onClick={handleSearch}
        className="search-button flex justify-center items-center bg-blue-600 p-5 text-white w-[140px] h-[80px] ml-[-65px] ">
     {loading ? "Loading..." : "Search"}


     </button> 
     
     </div>
      {/* Category Dropdown */}
      
      </div>
    
          {/* Feedback messages beside or below the search bar */}
<div className="feedback-message ml-72">
{loading && <p>Loading...</p>}
{error && <p className="text-red-500">{error}</p>}
</div>

      {/* Render search results */}
      <div className="search-results grid grid-cols-3 gap-4 mt-8 m-36">
        {data.length > 0 ?(
            data.map((edu) =>(
              <div key={edu.id}className="edu-item border p-4 bg-white rounded-lg shadow-md">
        <img

                      src={`https://savefiles.org/${edu.cover}?shareable_link=493`} 
                      alt={edu.title || "Untitled"}
                      className="w-full h-64 object-cover rounded-lg shadow-sm"
                      />
                      
                      <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">{edu.title || "Untitled"}</h2>
                      <p className="text-gray-600 mb-2">
                        <span className='font-semibold'>Author</span>{edu.author}</p>
                  <p className="text-gray-500 mb-2">
                    <span className='font-semi'>Date</span>{edu.date}</p>
                  <p className="text-gray-600 mb-2"><span className='font-semibold'>Category</span>{edu.category}</p>
                  <p className="text-gray-700 mt-2 leading-relaxed">{edu.content}</p>
                  
                </div>
                  
            </div>))
            // key={edu.id}
            //     className="edu-item border p-4 bg-white rounded-lg shadow-md"

            // >
            //                   {/* Clickable image that links to a single ad component */}
            //      <Link to={`/adverts/${ad.id}`}>
            //      <p className="text-black font-bold">{edu.author}</p>

            //      <img
            //      src={`https://savefiles.org/${edu.image}?shareable_link=450`} 
            //      alt={edu.title}
            //      className="w-full h-40 object-cover"
            //      />
            //      </Link>
            //      <h3 className="text-lg font-bold mt-2">{edu.title}</h3>
            //   <p>{edu.description}</p>
            //   <p className="text-gray-500">{edu.category?.brand}</p>
            //     </div>    
           
        ) :(
            !loading && !error && query.length >= 3 && (
                <p className="ml-72">No result found</p>
            )
        )}

      </div>

    </div>
  );
};

export default SearchBar