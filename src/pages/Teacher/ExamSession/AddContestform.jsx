import React from 'react';
import Layout from '../Layout';

const AddContestform = () => {
  return (
    <Layout>
      <div className='w-full mx-auto px-4 md:px-8 lg:px-16 xl:ml-40'>
        <h1 className='text-3xl leading-5 mb-4'>Add Contest</h1>
        <p className='text-gray-400 italic mb-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  
          Facilis ratione consequuntur ea, consequatur deleniti accusamus! Error quae culpa assumenda eaque <br /> 
          eveniet soluta esse, facere eum odio non. Dolore, repellendus vitae?
        </p>
        
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="contest_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Name</label>
              <input type="text" id="contest_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5" placeholder="John" required />
            </div>
            
            <div>
              <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
              <div className='flex flex-wrap items-center space-y-2 md:space-y-0 md:space-x-3'>
                <input type="text" id="start_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5" placeholder="Enter Start time.." required />
                <span>at</span>
                <input type="time" id="start_time_at" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5" required />
              </div>
            </div>
            
            <div>
              <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
              <div className='flex flex-wrap items-center space-y-2 md:space-y-0 md:space-x-3'>
                <input type="text" id="end_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5" placeholder="Enter End time.." required />
                <span>at</span>
                <input type="time" id="end_time_at" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5" required />
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="no_end_time" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="no_end_time" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">The contest has no end time.</label>
            </div>
            
            <div>
              <label htmlFor="organization_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization Type</label>
              <select id="organization_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5 mb-3">
                <option selected>Choose an Organization</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  w-full md:w-auto  text-center">Submit Here!!</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddContestform;
