import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import TableComponent from './TableComponent';

const AddContest = () => {
  const contestData = [
    { "contestName": "Code Championship", "contestOwner": "John Doe", "startDate": "2024-07-01", "signup": "Open", "participants": 50 },
    { "contestName": "Hackathon", "contestOwner": "Jane Smith", "startDate": "2024-07-05", "signup": "Closed", "participants": 75 },
    { "contestName": "AI Contest", "contestOwner": "Alice Johnson", "startDate": "2024-07-10", "signup": "Open", "participants": 100 },
    { "contestName": "Data Science Challenge", "contestOwner": "Michael Brown", "startDate": "2024-07-15", "signup": "Open", "participants": 80 },
    { "contestName": "Cyber Security Contest", "contestOwner": "Sarah Wilson", "startDate": "2024-07-20", "signup": "Closed", "participants": 60 },
    { "contestName": "Web Development Contest", "contestOwner": "David Lee", "startDate": "2024-07-25", "signup": "Open", "participants": 90 },
    { "contestName": "Mobile App Contest", "contestOwner": "Emily Clark", "startDate": "2024-07-30", "signup": "Open", "participants": 70 },
    { "contestName": "Cyber Security Contest", "contestOwner": "Sarah Wilson", "startDate": "2024-07-20", "signup": "Closed", "participants": 60 },
    { "contestName": "Web Development Contest", "contestOwner": "David Lee", "startDate": "2024-07-25", "signup": "Open", "participants": 90 },
    { "contestName": "Mobile App Contest", "contestOwner": "Emily Clark", "startDate": "2024-07-30", "signup": "Open", "participants": 70 },
  ];

  const { searchQuery } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredContestData = contestData.filter((contest) =>
    contest.contestName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContestData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredContestData.length / itemsPerPage);

  const columns = [
    { header: 'Contest Name', accessor: 'contestName' },
    { header: 'Contest Owner', accessor: 'contestOwner' },
    { header: 'Start Date', accessor: 'startDate' },
    { header: 'Signup', accessor: 'signup' },
    { header: 'Participants', accessor: 'participants' },
  ];

  return (
    <div>
      <div className='flex justify-between w-full items-center mb-4'>
        <div className="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
          {/* Alert Content */}
        </div>
        <div>
          <Link to="/contestform">
            <button 
              type="button" 
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create Contest
            </button>
          </Link>
        </div>
      </div>
      <TableComponent
        data={currentItems}
        columns={columns}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AddContest;
