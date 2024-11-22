import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch data whenever debouncedQuery or category changes
  useEffect(() => {
    if (debouncedQuery.length >= 3) {
      fetchData(debouncedQuery);
    } else if (debouncedQuery === '') {
      setData([]);
    }
  }, [debouncedQuery, category]);

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
        }
      );
      setData(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 3) setError(null);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = () => {
    if (query.length >= 3) {
      fetchData(query);
    } else {
      setError('Please enter at least 3 characters.');
    }
  };

  return (
    <div className="pt-10 flex flex-col items-center">
      {/* Search Bar Section */}
      <div className="w-full px-4 sm:w-[80%] lg:w-[60%]">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Category Dropdown */}
          <select
            value={category}
            onChange={handleCategoryChange}
            className="h-12 w-full sm:w-1/3 border border-gray-300 rounded-lg px-3"
          >
            <option value="">All Categories</option>
            <option value="Anxiety Management">Anxiety Management</option>
            <option value="Stress Management">Stress Management</option>
            <option value="Depression Management">Depression Management</option>
            <option value="Mood Disorder">Mood Disorder</option>
            <option value="Trauma and Recovery">Trauma and Recovery</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by title..."
            value={query}
            onChange={handleInputChange}
            className="h-12 flex-grow border border-gray-300 rounded-lg px-4"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="h-12 w-32 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </div>

      {/* Feedback Message */}
      <div className="mt-4 text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 w-full">
        {data.length > 0 ? (
          data.map((edu) => (
            <div
              key={edu.id}
              className="edu-item border p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`https://savefiles.org/${edu.cover}?shareable_link=493`}
                alt={edu.title || 'Untitled'}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-800">
                  {edu.title || 'Untitled'}
                </h2>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Author:</span> {edu.author}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Date:</span> {edu.date}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Category:</span>{' '}
                  {edu.category}
                </p>
                <p className="text-gray-700 mt-2 text-sm">{edu.content}</p>
              </div>
            </div>
          ))
        ) : (
          !loading &&
          !error &&
          query.length >= 3 && (
            <p className="text-gray-500 col-span-full text-center">
              No results found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
