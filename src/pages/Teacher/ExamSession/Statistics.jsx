import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const Statistics = () => {
  const location = useLocation();
  return (
    <div className="p-4 space-y-4">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:ml-40">
        <div className="flex items-center mb-4 mt-3">
          <Link
            to={'/baselayout/notification'}
            className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
          >
            <FiArrowLeft className="mr-1" />
            Back to Notification
          </Link>
        </div>
        <h1 className="lg:text-3xl text-lg leading-5 mb-1">Bikash Malu</h1>
        <a href="" className='text-blue-500 underline mb-20'>wwww.hackerrank.com/bikash-malu</a>
        <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
    
        <tbody>
          <tr>
            <td className="py-2 px-4">Signup Count</td>
            <td className="py-2 px-4 text-muted">0</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4">Total Cumulative Signups</td>
            <td className="py-2 px-4">0 (includes signups after the end of the contest)</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Login Count</td>
            <td className="py-2 px-4 text-muted">0</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4">Login Conversion Rate</td>
            <td className="py-2 px-4">0 %</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Number of Users Who Submitted Code</td>
            <td className="py-2 px-4 text-muted">0</td>
          </tr>
        </tbody>
      </table>
      <div className='relative lg:left-[25%]'>
      <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
          Add Challenge Here!!
        </button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Statistics;
