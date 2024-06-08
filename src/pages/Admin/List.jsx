import React, { useState } from 'react';
import { Button, Table, Modal, Form, Input, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx'; // Importing xlsx library
import Sidebar from './Sidebar';

const List = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');

  const initialData = [
    {
      key: 1,
      "USER NAME": "John Doe",
      LOGIN: "jdoe",
      ROLE: "Admin",
      "CREATED AT": "2024-01-15T08:30:00Z",
    },
    {
      key: 2,
      "USER NAME": "Jane Smith",
      LOGIN: "jsmith",
      ROLE: "User",
      "CREATED AT": "2024-02-20T12:45:00Z",
    },
    {
      key: 3,
      "USER NAME": "Alice Johnson",
      LOGIN: "ajohnson",
      ROLE: "Moderator",
      "CREATED AT": "2024-03-10T09:00:00Z",
    },
    {
      key: 4,
      "USER NAME": "Bob Brown",
      LOGIN: "bbrown",
      ROLE: "User",
      "CREATED AT": "2024-04-05T14:20:00Z",
    },
    {
      key: 5,
      "USER NAME": "Charlie Davis",
      LOGIN: "cdavis",
      ROLE: "Admin",
      "CREATED AT": "2024-05-12T11:10:00Z",
    },
    {
      key: 6,
      "USER NAME": "Alice Johnson",
      LOGIN: "ajohnson",
      ROLE: "Moderator",
      "CREATED AT": "2024-03-10T09:00:00Z",
    },
    {
      key: 7,
      "USER NAME": "Bob Brown",
      LOGIN: "bbrown",
      ROLE: "User",
      "CREATED AT": "2024-04-05T14:20:00Z",
    },
    {
      key: 8,
      "USER NAME": "Charlie Davis",
      LOGIN: "cdavis",
      ROLE: "Admin",
      "CREATED AT": "2024-05-12T11:10:00Z",
    },
    {
      key: 9,
      "USER NAME": "Alice Johnson",
      LOGIN: "ajohnson",
      ROLE: "Moderator",
      "CREATED AT": "2024-03-10T09:00:00Z",
    },
    {
      key: 10,
      "USER NAME": "Bob Brown",
      LOGIN: "bbrown",
      ROLE: "User",
      "CREATED AT": "2024-04-05T14:20:00Z",
    },
    {
      key: 11,
      "USER NAME": "Charlie Davis",
      LOGIN: "cdavis",
      ROLE: "Admin",
      "CREATED AT": "2024-05-12T11:10:00Z",
    },
  ];

  const [data, setData] = useState(initialData);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const showEditModal = record => {
    setCurrentRecord(record);
    setIsEditModalVisible(true);
    form.setFieldsValue(record);
  };

  const handleEditOk = () => {
    form.validateFields().then(values => {
      console.log('Updated values:', values);
      setIsEditModalVisible(false);
    });
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const showDeleteConfirm = record => {
    setCurrentRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteOk = () => {
    console.log('Deleted record:', currentRecord);
    setIsDeleteModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const onSelectChange = newSelectedRowKeys => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSearch = e => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filteredData = initialData.filter(item => item['USER NAME'] && item['USER NAME'].toLowerCase().includes(value));
    setData(filteredData);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");
    XLSX.writeFile(workbook, "user_data.xlsx");
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 === 0);
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 !== 0);
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const columns = [
    {
      title: 'USER NAME',
      dataIndex: 'USER NAME',
    },
    {
      title: 'Role',
      dataIndex: 'ROLE',
    },
    {
      title: 'LOGIN',
      dataIndex: 'LOGIN',
    },
    {
      title: 'CREATED AT',
      dataIndex: 'CREATED AT',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => showEditModal(record)} />
          <Button icon={<DeleteOutlined />} danger onClick={() => showDeleteConfirm(record)} />
        </Space>
      ),
    },
  ];

  return (
    <Sidebar>
      <div style={{ marginBottom: 16 }}>
        <Input
           placeholder="Search by name"
           className='bg-gray-300 rounded-xl'
           value={searchText}
           onChange={handleSearch}
           style={{ width: 600, marginRight: 16 }}
        />
       
        <Button type="primary" onClick={exportToExcel} style={{ marginLeft: 16 }} disabled={!selectedRowKeys.length} loading={loading}>
          Export to Excel
        </Button>
        <span style={{ marginLeft: 8 }}>
          {selectedRowKeys.length ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />

      <Modal
        title="Edit Record"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        okText="Update"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="USER NAME" label="User Name" rules={[{ required: true, message: 'Please input the user name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="LOGIN" label="Login" rules={[{ required: true, message: 'Please input the login!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="ROLE" label="Role" rules={[{ required: true, message: 'Please input the role!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete Record"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        okText="Delete"
        okButtonProps={{ danger: true }}
        cancelButtonProps={{ type: "default" }}
      >
        <p style={{ fontSize: 16, marginBottom: 24 }}>Are you sure you want to delete this record?</p>
        <p style={{ color: "red", fontWeight: "bold" }}>This action cannot be undone.</p>
      </Modal>
    </Sidebar>
  );
};

export default List;
