import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const Challenge = () => {
  const location = useLocation();
  return (
    <div className="p-4 space-y-4">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:ml-40">
        <div className="flex items-center mb-4 mt-3">
          <Link
            to={'/baselayout/details'}
            className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
          >
            <FiArrowLeft className="mr-1" />
            Back to ContestDetails
          </Link>
        </div>
        <h1 className="lg:text-3xl text-lg leading-5 mb-1">Bikash Malu</h1>
        <a href="" className='text-blue-500 underline mb-20'>wwww.hackerrank.com/bikash-malu</a>

        <h1 className="lg:text-3xl text-lg leading-5 mb-4 mt-10">Contest Challenges</h1>
        <p className="text-gray-400 italic mb-3">
          Add challenges to your contest by selecting challenges from our library or create and add your own challenges here. <br /> To reorder your challenges, simply select the challenge and then drag and drop to the desired location.
        </p>
        <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
          Add Challenge Here!!
        </button>
        <div className="mt-10 w-full md:w-[80%] h-[10vh] border-2 border-gray-700 border-dotted text-center flex items-center justify-center">
          No challenges have been added yet.
        </div>
        <hr className='mt-7' />

        <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-[80%] mt-4 space-y-4 md:space-y-0'>
          <div className="w-full md:w-auto mb-4 md:mb-0">
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
         
            <Link to={'/baselayout/advanced'}>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 w-full md:w-auto "
              >
                Save Changes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
