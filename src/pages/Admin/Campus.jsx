import React, { useState } from 'react';
import { Button, Table, Modal, Form, Input, Select, Space, Row, Col, notification } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx'; 
import Sidebar from './Sidebar';
const { Option } = Select;

const Campus = () => {
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
      "USER NAME": "John Doe",
      LOGIN: "jdoe",
      ROLE: "Admin",
      "CREATED AT": "2024-01-15T08:30:00Z",
    },
    {
      key: 7,
      "USER NAME": "Jane Smith",
      LOGIN: "jsmith",
      ROLE: "User",
      "CREATED AT": "2024-02-20T12:45:00Z",
    },
    {
      key: 8,
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
    }
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

  const showEditModal = record => {
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

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };

  const handleUpdate = () => {
    form.validateFields().then(values => {
      setIsUpdating(true); 
      console.log('Updated values:', values);
      setIsUpdating(false); 
      setIsEditModalVisible(false);
    }).catch(errorInfo => {
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
    <Sidebar>
      <div style={{ marginBottom: 2 }} className='-mt-5'>
        <Input
          placeholder="Search by name"
          className='bg-gray-300 rounded-xl w-[200px] xl:w-[53%] mr-16 mb-2'
          value={searchText}
          onChange={handleSearch}
          
        />
   
        <Button className='mt-2' type="primary" onClick={exportToExcel} style={{ marginLeft: 16 }} disabled={!selectedRowKeys.length} loading={loading}>
          Export to Excel
        </Button>
        <span style={{ marginLeft: 8 }}>
          {selectedRowKeys.length ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          onChange: (page, pageSize) => {
            setPagination({
              ...pagination,
              current: page,
              pageSize: pageSize,
            });
          },
        }}
        className='overflow-auto'
        onChange={handleChange}
      />

      <Modal
        title="Edit Record"
        visible={isEditModalVisible}
        onOk={handleUpdate} 
        onCancel={handleEditCancel}
        confirmLoading={isUpdating} 
        okText="Update" 
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="USER NAME" label="User Name" rules={[{ required: true, message: 'Please input the user name!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="LOGIN" label="Login" rules={[{ required: true, message: 'Please input the login!' }]}>
                <Input prefix={<LockOutlined />} placeholder="Enter login" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="ROLE" label="Role" rules={[{ required: true, message: 'Please select a role!' }]}>
                <Select placeholder="Select a role" prefix={<SafetyOutlined />}>
                  <Option value="Admin">Admin</Option>
                  <Option value="User">User</Option>
                  <Option value="Moderator">Moderator</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
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

export default Campus;
