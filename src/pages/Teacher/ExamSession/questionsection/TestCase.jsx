import React from 'react'
import { Breadcrumb, Button } from 'flowbite-react';
import { FiUploadCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TestCase = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <Breadcrumb aria-label="breadcrumb" className="mb-4">
          <Breadcrumb.Item href="/questionbaselayout">
            Questionform
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/questionbaselayout/details">
            Details
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/questionbaselayout/moderate">
            Moderate
          </Breadcrumb.Item>
          <Breadcrumb.Item current>
            Test Cases
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Add test cases to judge the correctness of a user's code. Refer to these 
            <a href="#" className="text-blue-500"> instructions </a>
            to write a good test case.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Download sample test cases from 
            <a href="#" className="text-blue-500"> Hello World challenge </a>
            to understand the .zip format.
          </p>
          <div className="flex items-center mb-4">
            <div className="flex items-center text-red-500 dark:text-red-400 mr-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9h2v4h-2v-4zm0-2h2v2h-2V7z" clipRule="evenodd" />
              </svg>
              <span>You do not have any test cases for this challenge. Add at least one test case.</span>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FiUploadCloud className="mr-2 text-gray-500 dark:text-gray-400"/>
            <Button color="gray" size="sm">
              Upload Zip
            </Button>
            <Button color="dark" size="sm" className="ml-2">
              + Add Test Case
            </Button>
          </div>
          <div className="border rounded-lg p-4 mb-4 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <span className="text-green-500">&#x2714;</span>
              <span className="ml-2">Autofill <strong>Sample Input</strong>, <strong>Sample Output</strong>, and <strong>Explanation</strong> fields for all test cases marked as Sample.</span>
            </p>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Order</th>
                  <th scope="col" className="px-6 py-3">Input</th>
                  <th scope="col" className="px-6 py-3">Output</th>
                  <th scope="col" className="px-6 py-3">Tag</th>
                  <th scope="col" className="px-6 py-3">Sample</th>
                  <th scope="col" className="px-6 py-3">Additional</th>
                  <th scope="col" className="px-6 py-3">Strength</th>
                  <th scope="col" className="px-6 py-3">Select</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td colSpan="8" className="px-6 py-4 text-center">No test cases have been added yet</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              You will get <span className="text-yellow-500 font-bold">0.00%</span> of the maximum score if you pass the selected test cases.
            </p>
          </div>
          <div className="flex justify-end mt-4">
          <Link to={'/baselayout/preview'}>
              <button
                type="button"
                className="mx-1 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Preview Challange
              </button>
            </Link>
            <Link to={'/questionbaselayout/code'}>
           <button 
              type="submit" 
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full lg:w-auto mr-2"
            >
              Submit Here!!
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCase;
