import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Layout from '../../component/Layout';
import { FiArrowLeft } from 'react-icons/fi'; 
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';

const AddContestform = () => {
  const location = useLocation();
    const [contestName, setContestName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [organizationType, setOrganizationType] = useState('');
const navigate=useNavigate()
    const handleFormSubmit = (e) => {
       
        e.preventDefault();
        if (!contestName || !startTime || !endTime || !organizationType) {
            toast.error('please fill all the fields...', {
                duration: 2000, 
              });
              
            return;
        }
      
        setContestName('');
        setStartTime('');
        setEndTime('');
        setOrganizationType('');
        navigate('/baselayout/details')
       
    };

    let backLink = '/teacher/add-contest';

    return (
        <Layout>
            <div className='w-[85%] mx-auto px-4 md:px-8 lg:px-16 xl:ml-40 overflow-hidden'>
                <div className="flex items-center mb-4">
                    <Link to={backLink} className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500">
                        <FiArrowLeft className="mr-1" />
                        Back to Contest Manage
                    </Link>
                </div>
                <h1 className='lg:text-3xl text-lg leading-5 mb-4'>Add Contest</h1>
                <p className='text-gray-400 italic mb-3'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Facilis ratione consequuntur ea, consequatur deleniti accusamus! Error quae culpa assumenda eaque <br />
                    eveniet soluta esse, facere eum odio non. Dolore, repellendus vitae?
                </p>

                <form onSubmit={handleFormSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="contest_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Name</label>
                            <input
                                type="text"
                                id="contest_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5"
                                placeholder="John"
                                value={contestName}
                                onChange={(e) => setContestName(e.target.value)}
                                
                            />
                        </div>

                        <div>
                            <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
                            <div className='flex flex-wrap items-center space-y-2 md:space-y-0 md:space-x-3'>
                                <input
                                    type="text"
                                    id="start_time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                                    placeholder="Enter Start time.."
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    
                                />
                                <span>at</span>
                                <input
                                    type="time"
                                    id="start_time_at"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
                            <div className='flex flex-wrap items-center space-y-2 md:space-y-0 md:space-x-3'>
                                <input
                                    type="text"
                                    id="end_time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                                    placeholder="Enter End time.."
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    
                                />
                                <span>at</span>
                                <input
                                    type="time"
                                    id="end_time_at"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    
                                />
                            </div>
                        </div>

                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input
                                    id="no_end_time"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                />
                            </div>
                            <label htmlFor="no_end_time" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">The contest has no end time.</label>
                        </div>

                        <div>
                            <label htmlFor="organization_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization Type</label>
                            <select
                                id="organization_type"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5 mb-3"
                                value={organizationType}
                                onChange={(e) => setOrganizationType(e.target.value)}
                                
                            >
                                <option disabled>Choose an Organization</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>
                    
                      
                   
                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full md:w-auto">Reset Here!!</button>
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 w-full md:w-auto text-center"
                        >
                            Submit Here!!
                        </button>
                </form>
            </div>
        </Layout>
    );
};

export default AddContestform;
