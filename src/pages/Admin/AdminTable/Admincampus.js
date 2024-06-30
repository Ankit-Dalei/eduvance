import React, { useState } from 'react';
import TableComponent from '../../Teacher/ExamSession/TableComponent';

const Admincampus = () => {
  const data = [
    { id: 1, courseName: 'Mathematics', startDate: '2024-07-01' },
    { id: 2, courseName: 'Physics', startDate: '2024-07-02' },
    { id: 3, courseName: 'Chemistry', startDate: '2024-07-03' },
   
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Course Name', accessor: 'courseName' },
    { header: 'Start Date', accessor: 'startDate' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; 
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Page changed to: ${page}`);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
      <div className={`lg:h-[98%] lg:w-[97%]`}>
        <TableComponent
          data={paginatedData}
          columns={columns}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <div className="pagination">
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
            First
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admincampus;
