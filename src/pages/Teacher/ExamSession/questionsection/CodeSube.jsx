import React from 'react';
import { Button, Breadcrumb } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CodeSube = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <Breadcrumb aria-label="breadcrumb" className="mb-4">
          <Breadcrumb.Item href="/questionbaselayout">
            Question form
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/questionbaselayout/details">
            Details
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/questionbaselayout/moderate">
            Moderate
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/questionbaselayout/testcase">
            Test Case
          </Breadcrumb.Item>
          <Breadcrumb.Item current>
            Code Stubs
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <p className="text-gray-400 italic mb-6">You must use our Domain Specific Language (DSL) to generate code stubs that read test case data from standard input. <span className='text-blue-600 underline cursor-pointer'> Click here</span> to learn how to write DSL.</p>
          <div className="mb-6">
            <label htmlFor="dsl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              DSL for code stubs:
            </label>
            <textarea
              id="dsl"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter DSL for code stubs..."
            ></textarea>
            <Button color="dark" className="mt-4">
              Generate Code Stubs
            </Button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preview your auto-generated code stubs:</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-2 space-y-2 sm:space-y-0">
              <label htmlFor="language" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Language:
              </label>
              <select
                id="language"
                className="block p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="java7">Java 7</option>
                <option value="java8">Java 8</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 p-4">
              {/* Add preview content here */}
            </div>
          </div>

          <div className="flex justify-end mt-4 space-x-2">
            <Button color="light">Preview Challenge</Button>
           <Link to={'/questionbaselayout/language'}><Button color="dark">Save Changes</Button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSube;
