import React, { useState } from 'react';
import Layout from './Layout';
import { BiBook } from 'react-icons/bi';
import { Alert } from 'flowbite-react';
import { Button, Table, Modal, Form, Input, Select, Space, Row, Col, notification } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';

const { Option } = Select;

const Dashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

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
      "USER NAME": "Jane Smith",
      LOGIN: "jsmith",
      ROLE: "User",
      "CREATED AT": "2024-02-20T12:45:00Z",
    },
    {
      key: 7,
      "USER NAME": "Alice Johnson",
      LOGIN: "ajohnson",
      ROLE: "Moderator",
      "CREATED AT": "2024-03-10T09:00:00Z",
    },
    {
      key: 8,
      "USER NAME": "Bob Brown",
      LOGIN: "bbrown",
      ROLE: "User",
      "CREATED AT": "2024-04-05T14:20:00Z",
    },
    {
      key: 9,
      "USER NAME": "Charlie Davis",
      LOGIN: "cdavis",
      ROLE: "Admin",
      "CREATED AT": "2024-05-12T11:10:00Z",
    },
    
  ];

  const [data, setData] = useState(initialData);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: initialData.length,
  });

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const showEditModal = (record) => {
    setCurrentRecord(record);
    setIsEditModalVisible(true);
    form.setFieldsValue(record);
  };

  const handleChange = (pagination, filters) => {
    console.log('Various parameters', pagination, filters);
    setFilteredInfo(filters);
    setPagination({
      ...pagination,
      current: pagination.current,
    });
  };

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      setIsUpdating(true);
      console.log('Updated values:', values);
      setIsUpdating(false);
      setIsEditModalVisible(false);
    }).catch((errorInfo) => {
      notification.error({
        message: 'Validation Error',
        description: 'Please fill all the fields correctly.',
        placement: 'topRight',
      });
    });
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const showDeleteConfirm = (record) => {
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

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filteredData = initialData.filter(item => item['USER NAME'] && item['USER NAME'].toLowerCase().includes(value));
    setData(filteredData);
    setPagination({
      ...pagination,
      total: filteredData.length,
    });
  };

  const exportToExcel = () => {
    const selectedData = data.filter(item => selectedRowKeys.includes(item.key));
    const worksheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    XLSX.writeFile(workbook, `${currentTime}_user_data.xlsx`);
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
      title: 'ROLE',
      dataIndex: 'ROLE',
      key: 'ROLE',
      filters: [
        {
          text: 'Admin',
          value: 'Admin',
        },
        {
          text: 'User',
          value: 'User',
        },
        {
          text: 'Moderator',
          value: 'Moderator',
        },
      ],
      filteredValue: filteredInfo.ROLE || null,
      onFilter: (value, record) => record.ROLE.includes(value),
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
    <Layout>
      <div className="p-2 md:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 w-full h-24 p-4 rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all"
            >
              <div className="flex justify-between px-2 text-gray-600">
                <h1>Total Test</h1>
                <BiBook color={["blue", "red", "orange", "green"][index % 4]} size={25} />
              </div>
              <p className="font-bold text-3xl text-black mt-2">36</p>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        <Alert color="info" onDismiss={() => alert('Alert dismissed!')} className="w-full">
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </Alert>

        <div className="flex flex-col md:flex-row items-center my-4">
          <Input
            placeholder="Search by name"
            className="bg-gray-100 rounded-xl w-full md:w-auto md:flex-grow mr-0 md:mr-4 mb-4 md:mb-0"
            value={searchText}
            onChange={handleSearch}
          />

          <Button
            className="w-full md:w-auto"
            type="dashed"
            onClick={exportToExcel}
            disabled={!selectedRowKeys.length}
            loading={loading}
          >
            Export to Excel
          </Button>
          {selectedRowKeys.length ? <span className="ml-4">{`Selected ${selectedRowKeys.length} items`}</span> : ''}
        </div>

        <div className="overflow-x-auto">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            onChange={handleChange}
            pagination={pagination}
          />
        </div>

        <Modal
  title="Edit User"
  visible={isEditModalVisible}
  onOk={handleUpdate}
  confirmLoading={isUpdating}
  onCancel={handleEditCancel}
  okButtonProps={{ className: 'custom-ok-button' }}
>
          <Form form={form} layout="vertical" name="editUserForm">
            <Form.Item
              name="USER NAME"
              label="User Name"
              rules={[{ required: true, message: 'Please input the user name!' }]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="LOGIN"
              label="Login"
              rules={[{ required: true, message: 'Please input the login!' }]}
            >
              <Input prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item
              name="ROLE"
              label="Role"
              rules={[{ required: true, message: 'Please select a role!' }]}
            >
              <Select placeholder="Select a role">
                <Option value="Admin">
                  <SafetyOutlined /> Admin
                </Option>
                <Option value="User">
                  <UserOutlined /> User
                </Option>
                <Option value="Moderator">
                  <UserOutlined /> Moderator
                </Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
      title="Confirm Delete"
      visible={isDeleteModalVisible}
      onCancel={handleDeleteCancel}
      footer={[
        <Button key="cancel" onClick={handleDeleteCancel}>
          Cancel
        </Button>,
        <Button key="delete" type="primary" danger onClick={handleDeleteOk}>
          Delete
        </Button>,
      ]}
    >
      <p>Are you sure you want to delete?</p>
    </Modal>

      </div>
    </Layout>
  );
};

export default Dashboard;
