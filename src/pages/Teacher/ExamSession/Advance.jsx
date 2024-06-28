import { Label, Select } from 'flowbite-react';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Advance = () => {
  const location = useLocation();
  return (
    <div className="p-4 space-y-4">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:ml-40">
        <div className="flex items-center mb-4 mt-3">
          <Link
            to={'/baselayout/challenge'}
            className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
          >
            <FiArrowLeft className="mr-1" />
            Back to ContestChallenge
          </Link>
        </div>
        <h1 className="lg:text-3xl text-lg leading-5 mb-1">Bikash Malu</h1>
        <a href="" className='text-blue-500 underline mb-20'>wwww.hackerrank.com/bikash-malu</a>

        <h1 className="lg:text-3xl text-lg leading-5 mb-4 mt-10">Leaderboard Configurations</h1>
        <p className="text-gray-400 italic mb-3">
          The ACM style leaderboard allows penalty for wrong submissions and allows freezing leaderboard at a specific time.
        </p>
        <div className="p-4 space-y-5 w-full md:w-[75%] lg:w-[50%]">
          <div className="flex flex-col">
            <Label htmlFor="leaderboard" value="Leaderboard" />
            <Select id="leaderboard" disabled>
              <option>Option 1</option>
              <option>Option 2</option>
            </Select>
          </div>
          <div className="flex flex-col">
            <Label htmlFor="tiebreaker" value="Tiebreaker" />
            <Select id="tiebreaker" disabled>
              <option>Option 1</option>
              <option>Option 2</option>
            </Select>
          </div>
          <div className="flex flex-col">
            <Label htmlFor="time-used" value="Time Used for Tiebreaking" />
            <Select id="time-used" disabled>
              <option>Option 1</option>
              <option>Option 2</option>
            </Select>
          </div>
        </div>
        <hr className='mt-7' />

        <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-[75%] lg:w-[70%] mt-4 space-y-4 md:space-y-0'>
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
            <button
              type="reset"
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Reset Here!!
            </button>
            <Link to={'/baselayout/advanced'}>
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
}

export default Advance;
