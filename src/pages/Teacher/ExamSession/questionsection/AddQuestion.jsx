import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import TableComponent from '../TableComponent';

const AddQuestion = () => {
  const questionData = [
    { questionName: "What is React?", questionOwner: "John Doe", startDate: "2024-07-01", signup: "Open", participants: 50 },
    { questionName: "What is Node.js?", questionOwner: "Jane Doe", startDate: "2024-07-02", signup: "Closed", participants: 30 },
    { questionName: "What is JavaScript?", questionOwner: "Alice Smith", startDate: "2024-07-03", signup: "Open", participants: 20 },
    { questionName: "What is HTML?", questionOwner: "Bob Brown", startDate: "2024-07-04", signup: "Open", participants: 40 },
    { questionName: "What is CSS?", questionOwner: "Charlie White", startDate: "2024-07-05", signup: "Open", participants: 35 },
    { questionName: "What is Redux?", questionOwner: "David Green", startDate: "2024-07-06", signup: "Open", participants: 25 },
    { questionName: "What is Express?", questionOwner: "Eve Black", startDate: "2024-07-07", signup: "Open", participants: 45 },
    { questionName: "What is MongoDB?", questionOwner: "Frank Blue", startDate: "2024-07-08", signup: "Open", participants: 50 },
    { questionName: "What is GraphQL?", questionOwner: "Grace Pink", startDate: "2024-07-09", signup: "Open", participants: 30 },
  ];

  const { searchQuery } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredQuestionData = questionData.filter((question) =>
    question.questionName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredQuestionData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredQuestionData.length / itemsPerPage);

  const columns = [
    { header: 'Question Name', accessor: 'questionName' },
    { header: 'Question Owner', accessor: 'questionOwner' },
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
          <Link to="/questionform">
            <button 
              type="button" 
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create Question
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

export default AddQuestion;
