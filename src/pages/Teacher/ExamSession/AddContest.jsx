import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import TableComponent from './TableComponent';
import { getAllContests } from '../../../Service/TeacherService';
import toast from 'react-hot-toast';

const AddContest = () => {
  const [contest, setContest] = useState([]);
  const { searchQuery } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchContest();
  }, []);

  const fetchContest = async () => {
    try {
      const data = await getAllContests();
      console.log(data);
      setContest(data);
    } catch (error) {
      console.log(error);
      toast.error("Error in loading contests");
    }
  };

  const filteredContestData = contest.filter((contest) =>
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
