import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Moderate = () => {
  const location = useLocation();

  return (
    <div className="p-4 space-y-4">
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:ml-40">
        <div className="flex items-center mb-4 mt-3">
          <Link
            to={'/baselayout/advanced'}
            className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
          >
            <FiArrowLeft className="mr-1" />
            Back to Advanced Setting
          </Link>
        </div>
        <h1 className="lg:text-3xl text-lg leading-5 mb-1">Bikash Malu</h1>
        <a href="" className="text-blue-500 underline mb-20">
          wwww.hackerrank.com/bikash-malu
        </a>

        <h1 className="lg:text-3xl text-lg leading-5 mb-4 mt-10">Modify Existing Moderators</h1>
        <p className="text-gray-400 italic mb-3">Users with moderator access can edit your contest.</p>

        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Add Moderators
        </label>
        <div className="w-full md:w-[40%] flex space-x-1">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
            placeholder="John"
            required
          />
             <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
          Add
        </button>
        </div>
        <hr className="mt-7" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[80%] mt-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto mb-4 md:mb-0 space-y-2 md:space-y-0 md:flex md:flex-row md:space-x-2">
            <Link to="/teacher/add-question">
              <button
                type="button"
                className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mb-2 ${
                  location.pathname === '/teacher/add-question' ? 'bg-gray-900 text-white' : ''
                } w-full md:w-auto`}
              >
                Preview Landing Page
              </button>
            </Link>
            <Link to="/teacher/add-contest">
              <button
                type="button"
                className={`ml-0 md:ml-1 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mb-2 ${
                  location.pathname === '/teacher/add-contest' ? 'bg-gray-900 text-white' : ''
                } w-full md:w-auto`}
              >
                Preview Challenge Page
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
            <button
              type="reset"
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Reset Here!!
            </button>
            <Link to={'/baselayout/notification'}>
              <button
                type="submit"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full md:w-auto text-center"
              >
                Save Changes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moderate;
