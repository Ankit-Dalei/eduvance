import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import { Breadcrumb } from 'flowbite-react';

const QModerate = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:ml-40">
        <Breadcrumb aria-label="breadcrumb" className="mb-4">
          
          <Breadcrumb.Item href="questionbaselayout">
            Question form
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/questionbaselayout/details">
           Details
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/questionbaselayout/moderate" current>
            Moderate
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex items-center mb-4 mt-3">
      
        </div>
        <h1 className="lg:text-3xl text-lg leading-5 mb-1">Bikash Malu</h1>
     

        <h1 className="lg:text-3xl text-lg leading-5 mb-4 mt-10">Modify Existing Moderators</h1>
      

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
        <p className="text-gray-400 italic mb-3 mt-4">Enter moderator's HackerRank username. Moderators can edit this challenge.</p>
        <hr className="mt-7" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[80%] mt-4 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
            <Link to={'/baselayout/preview'}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Preview Challange
              </button>
            </Link>
            <Link to={'/questionbaselayout/testcase'}>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full md:w-auto text-center"
              >
                Save Changes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QModerate
