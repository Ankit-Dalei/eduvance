import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Notification = () => {
  const location = useLocation();

  return (
    <div className="p-4 space-y-4">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:ml-40">
        <div className="flex items-center mb-4 mt-3">
          <Link
            to={'/baselayout/moderate'}
            className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
          >
            <FiArrowLeft className="mr-1" />
            Back to Moderate
          </Link>
        </div>
        <h1 className="lg:text-3xl text-lg leading-5 mb-1">Bikash Malu</h1>
        <a href="" className="text-blue-500 underline mb-20">wwww.hackerrank.com/bikash-malu</a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="lg:text-3xl text-lg leading-5 mb-4 mt-10">Notify Your Participants</h1>
            <p className="text-gray-400 italic mb-3">
              Notify users who signed up for your contest by sending them a notification message.
              Your notification will appear under the loud speaker <br />icon located on the righthand
              side of the top navigation bar.
            </p>
            <div>
              <label htmlFor="recipients" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipients</label>
              <select id="recipients" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5">
                <option selected>All Contestants</option>
                <option value="john.doe@example.com">John Doe</option>
                <option value="jane.doe@example.com">Jane Doe</option>
                <option value="bikash.malu@example.com">Bikash Malu</option>
              </select>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5" placeholder="Enter Subject Here.." required />
              </div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="4" className="block p-2.5 w-[90%] resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>
            </div>
           
          </div>

          <div>
            <h1 className="lg:text-3xl text-lg leading-5 mb-4 mt-10">Notification History</h1>
            <p className="text-gray-400 italic mb-3">You have not sent any notifications.</p>
          </div>
        </div>

        <hr className="mt-7" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[50%] mt-4 space-y-4 md:space-y-0">
          <div className="md:w-auto mb-4 md:mb-0">
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
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 w-full md:w-auto text-center"
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

export default Notification;
