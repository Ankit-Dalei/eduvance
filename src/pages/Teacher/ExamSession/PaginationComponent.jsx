import React from 'react';
import { Pagination } from 'flowbite-react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    totalPages > 0 && (
      <div className="flex justify-end mt-2">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(e) => {
            onPageChange(e);
            console.log(`Pagination onPageChange triggered with page: ${e}`);
          }}
        />
      </div>
    )
  );
};

export default PaginationComponent;
