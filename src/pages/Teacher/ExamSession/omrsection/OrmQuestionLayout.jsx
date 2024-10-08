import React, { useState } from 'react';
import Layout from '../../component/Layout';
import { Link, Outlet, useLocation } from 'react-router-dom';

const OrmQuestionLayout = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <div className='p-6 w-full'>
        <h1 className='lg:text-3xl text-lg leading-5 mb-4'>Manage Omr Questions and Contest here!!!!</h1>
        <hr />
        <div className='w-full flex flex-col md:flex-row justify-between items-center mt-4'>
          <div className='mb-4 md:mb-0'>
            <Link to="/ormqustionlayout/ormquestion">
              <button
                type="button"
                className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-[4rem] py-2.5 text-center me-2 mb-2 ${
                  location.pathname === '/ormqustionlayout/ormquestion' ? 'bg-gray-900 text-white' : ''
                }`}
              >
                Manage Omr Question
              </button>
            </Link>
            <Link to="/teacher/add-contest">
              <button
                type="button"
                className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-[4rem] py-2.5 text-center me-2 mb-2 ${
                  location.pathname === '/teacher/add-contest' ? 'bg-gray-900 text-white' : ''
                }`}
              >
                Manage Omr Contest
              </button>
            </Link>
          </div>
          {/* <form className="flex w-full md:w-auto">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-950 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form> */}
        </div>
        <hr className='my-3' />
        <Outlet context={{ searchQuery }} />
      </div>
    </Layout>
  );
};

export default OrmQuestionLayout;
