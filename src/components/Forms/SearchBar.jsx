import React from 'react';

function SearchForm() {
  return ( 
    <div className='p-4'>
    <form className="max-w-md mx-auto">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-black border rounded-lg bg-gray-50 focus:ring-orange-300 focus:border-gray-300 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-300 dark:focus:border-gray-300"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Search
        </button>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
