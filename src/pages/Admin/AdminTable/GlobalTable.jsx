import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import * as XLSX from 'xlsx';
import { useMediaQuery } from 'react-responsive';

const GlobalTable = ({ initialData, columns }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: initialData.length,
  });
  const [filteredInfo, setFilteredInfo] = useState({});

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (isSmallScreen) {
      setSelectedRowKeys(initialData.map(item => item.key));
    }
  }, [isSmallScreen, initialData]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleTableChange = (pagination, filters) => {
    setFilteredInfo(filters);
    setPagination({
      ...pagination,
      current: pagination.current,
    });
  };

  const exportToExcel = () => {
    const selectedData = initialData.filter(item => selectedRowKeys.includes(item.key));
    const worksheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SelectedData');
    XLSX.writeFile(workbook, 'SelectedData.xlsx');
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center my-4">
        <Button
          className="w-full md:w-auto"
          type="dashed"
          onClick={exportToExcel}
          disabled={!selectedRowKeys.length}
        >
          Export to Excel
        </Button>
        {selectedRowKeys.length ? <span className="ml-4">{`Selected ${selectedRowKeys.length} items`}</span> : ''}
      </div>
      <Table
        className='hidden lg:block'
        rowSelection={rowSelection}
        columns={columns}
        dataSource={initialData}
        onChange={handleTableChange}
        pagination={pagination}
      />
    </>
  );
};

export default GlobalTable;
