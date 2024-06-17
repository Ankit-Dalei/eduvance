import React, { useState } from 'react'
import Layout from './Layout'
import { BiBook } from 'react-icons/bi'
import { Alert } from 'flowbite-react'
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
        "USER NAME": "John Doe",
        LOGIN: "jdoe",
        ROLE: "Admin",
        "CREATED AT": "2024-01-15T08:30:00Z",
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
        "USER NAME": "John Doe",
        LOGIN: "jdoe",
        ROLE: "Admin",
        "CREATED AT": "2024-01-15T08:30:00Z",
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
      {
        key: 12,
        "USER NAME": "John Doe",
        LOGIN: "jdoe",
        ROLE: "Admin",
        "CREATED AT": "2024-01-15T08:30:00Z",
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
    <Layout>
       <div className="p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all ">
            <div className='flex justify-between px-2 text-gray-600 '>
                <h1>Total Test</h1>
                <BiBook color='blue' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
            <div className='flex justify-between px-2 text-gray-600'>
                <h1>Total Test</h1>
                <BiBook color='red' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
            <div className='flex justify-between px-2 text-gray-600'>
                <h1>Total Test</h1>
                <BiBook color='orange' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
            <div className='flex justify-between px-2 text-gray-600'>
                <h1>Total Test</h1>
                <BiBook color='green' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
       
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 mb-5 ">
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm  hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
            <div className='flex justify-between px-2 text-gray-600 '>
                <h1>Total Test</h1>
                <BiBook color='blue' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
            <div className='flex justify-between px-2 text-gray-600'>
                <h1>Total Test</h1>
                <BiBook color='red' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
            <div className='flex justify-between px-2 text-gray-600'>
                <h1>Total Test</h1>
                <BiBook color='orange' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
        <div className="bg-gray-100 text-white w-52 h-24 p-4  rounded shadow-sm hover:scale-105 hover:shadow-lg cursor-pointer transition-all">
            <div className='flex justify-between px-2 text-gray-600'>
                <h1>Total Test</h1>
                <BiBook color='green' size={25}/>
                
            </div>
            <p className='font-bold text-3xl text-black mt-2'>36</p>
        </div>
       
       
      </div>
      <hr />
      <Alert color="info" onDismiss={() => alert('Alert dismissed!')} className='mt-2 w-[40%] xl:w-[100%] '>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
    </div>
    <div style={{ marginBottom: '' }} className='flex flex-col md:flex-row'>
        <Input
          placeholder="Search by name"
          className='bg-gray-100 rounded-xl w-[200px] xl:w-[35%] mr-16 mb-2 -p-5'
          value={searchText}
          onChange={handleSearch}
          
        />
    
        <Button className='mt-2 w-[12%]' type="dashed" onClick={exportToExcel} style={{ marginLeft: 16 }} disabled={!selectedRowKeys.length} loading={loading}>
          Export to Excel
        </Button>
        <span style={{ marginLeft: 8 }}>
          {selectedRowKeys.length ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <div className="w-[50%] xl:w-[100%] overflow-x-auto">
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
        onChange={handleChange}
        scroll={{ x: 800 }} // Adjust this value as needed to control the scroll width
      />
    </div>
  

      <Modal
        title="Edit Record"
        visible={isEditModalVisible}
        
        onOk={handleUpdate} 
        onCancel={handleEditCancel}
        confirmLoading={isUpdating} 
        okType='dashed'
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
    </Layout>

  )
}

export default Dashboard