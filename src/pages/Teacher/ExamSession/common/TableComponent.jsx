import React from 'react';
import PaginationComponent from '../common/PaginationComponent';

const TableComponent = ({ data, columns, currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <div className="relative overflow-x-auto rounded-2xl text-center">
        {data.length > 0 ? (
          <table className="w-full text-sm rtl:text-right text-gray-500 bg-gray-800 text-center">
            <thead className="text-xs text-white uppercase bg-gray-900">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} scope="col" className="px-6 py-3">{column.header}</th>
                ))}
              </tr>
            </thead>
            <tbody className='bg-gray-800'>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b bg-gray-800 text-white">
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">{row[column.accessor]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-black py-4 text-2xl">
            <p>No courses found matching your search criteria.</p>
          </div>
        )}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default TableComponent;
