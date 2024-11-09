import React, { useState } from 'react'

const SearchBar = () => {
      // State for managing the search query, fetched data, and category filter
const [query, setQuery] = useState("");
const [category, setCategory] = useState("automobile"); // Default filter set to automobile
const [data, setData] = useState([])
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null)

  // Function to fetch data based on the query and selected category
const fetchData = async (searchQuery) => {
    try {
        setLoading(true);
        const response = await axios.get(
            `https://advertisement-api.onrender.com/adverts?search=${searchQuery}&category=${category}`
 );
   console.log('respo', response.data)
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
   };

     // Handle the search when the button is clicked or Enter is pressed
const handleSearch = () => {
    if (query.length >= 3) {
        fetchData(query);
    } else {
        setError("Please enter at least 3 character.");
    }
};
  // Handle Enter key press for search
const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
};
  return (
    <div className='search-container pt-10 flex justify-center items-center flex-col '>
    <div className="search-bar-wrapper w-[60vw] flex flex-col  items-center">
    {/* Search input, button, and filter combined into a flex container */}
     <div className="flex w-full ">
        <input
        type="text"
        placeholder={`Search ${category.charAt(0).toUpperCase() + category.slice(1)} content...`}
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}  // Trigger search on Enter
        className="search-input p-5 flex-grow border rounded-full"
        />
     {/* Search button */}
     <button    onClick={handleSearch}
        className="search-button flex justify-center items-center bg-blue-600 p-5 text-white w-[140px] ml-[-65px] rounded-full">
     {loading ? "Loading..." : "Search"}


     </button>

     </div>
    </div>
          {/* Feedback messages beside or below the search bar */}
<div className="feedback-message ml-72">
{loading && <p>Loading...</p>}
{error && <p className="text-red-500">{error}</p>}
</div>

      {/* Render search results */}
      <div className="search-results grid grid-cols-3 gap-4 mt-8 m-36">
        {data.length > 0 ?(
            data.map((ad) => (
            <div
            key={ad.id}
                className="ad-item border p-4 bg-white rounded-lg shadow-md"

            >
                              {/* Clickable image that links to a single ad component */}
                 <Link to={`/adverts/${ad.id}`}>
                 <p className="text-black font-bold">{ad.author}</p>

                 <img
                 src={`https://savefiles.org/${ad.image}?shareable_link=450`} 
                 alt={ad.title}
                 className="w-full h-40 object-cover"
                 />
                 </Link>
                 <h3 className="text-lg font-bold mt-2">{ad.title}</h3>
              <p>{ad.description}</p>
              <p className="text-gray-500">{ad.category?.brand}</p>
                </div>    
            ))
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