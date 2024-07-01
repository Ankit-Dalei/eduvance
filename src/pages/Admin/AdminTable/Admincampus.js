import React, { useState } from 'react';
import GlobalTable from './GlobalTable';
import { EditOutlined, DeleteOutlined, UserOutlined, MailOutlined, KeyOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button, Space, Modal, Form, Input } from 'antd';
import { TextInput } from 'flowbite-react';

const Admincampus = () => {
  const initialData = [
    { key: 1, "USER NAME": "John Doe", LOGIN: "jdoe", ROLE: "Admin", "CREATED AT": "2024-01-15T08:30:00Z" },
    { key: 2, "USER NAME": "Jane Smith", LOGIN: "jsmith", ROLE: "User", "CREATED AT": "2024-02-20T12:45:00Z" },
    { key: 3, "USER NAME": "Alice Johnson", LOGIN: "ajohnson", ROLE: "Moderator", "CREATED AT": "2024-03-10T09:00:00Z" },
    { key: 4, "USER NAME": "Bob Brown", LOGIN: "bbrown", ROLE: "User", "CREATED AT": "2024-04-05T14:20:00Z" },
    { key: 5, "USER NAME": "Charlie Davis", LOGIN: "cdavis", ROLE: "Admin", "CREATED AT": "2024-05-12T11:10:00Z" },
  ];

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setIsEditModalVisible(true);
  };

  const handleDelete = (record) => {
    setCurrentRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleEditOk = (values) => {
    const newData = data.map(item => item.key === currentRecord.key ? { ...item, ...values } : item);
    setData(newData);
    setFilteredData(newData);
    setIsEditModalVisible(false);
    setCurrentRecord(null);
  };

  const handleDeleteOk = () => {
    const newData = data.filter(item => item.key !== currentRecord.key);
    setData(newData);
    setFilteredData(newData);
    setIsDeleteModalVisible(false);
    setCurrentRecord(null);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter(item => 
      item['USER NAME'].toLowerCase().includes(value) ||
      item.LOGIN.toLowerCase().includes(value) ||
      item.ROLE.toLowerCase().includes(value) ||
      item['CREATED AT'].toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const columns = [
    { title: 'USER NAME', dataIndex: 'USER NAME', key: 'USER NAME' },
    { title: 'LOGIN', dataIndex: 'LOGIN', key: 'LOGIN' },
    { title: 'ROLE', dataIndex: 'ROLE', key: 'ROLE' },
    { title: 'CREATED AT', dataIndex: 'CREATED AT', key: 'CREATED AT' },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record)} />
        </Space>
      ),
    },
  ];

  return (
    <div className="lg:h-full lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
      <div className="lg:w-full lg:flex lg:justify-center lg:my-4">
        <TextInput
          placeholder="Search..."
          onChange={handleSearch}
          className="lg:w-1/2"
        />
      </div>
      <div className="lg:h-[98%] lg:w-[97%]">
        <GlobalTable initialData={filteredData} columns={columns} />
        <Modal
          title="Edit User"
          visible={isEditModalVisible}
          onCancel={() => setIsEditModalVisible(false)}
          footer={null}
        >
          <Form
            initialValues={currentRecord}
            onFinish={handleEditOk}
          >
            <Form.Item name="USER NAME" label="User Name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="LOGIN" label="Login">
              <Input prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item name="ROLE" label="Role">
              <Input prefix={<KeyOutlined />} />
            </Form.Item>
            <Form.Item name="CREATED AT" label="Created At">
              <Input prefix={<CalendarOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Delete User"
          visible={isDeleteModalVisible}
          onOk={handleDeleteOk}
          onCancel={() => setIsDeleteModalVisible(false)}
          okText="Delete"
          okButtonProps={{ danger: true }}
        >
          <p>Are you sure you want to delete {currentRecord?.['USER NAME']}?</p>
        </Modal>
      </div>
    </div>
  );
};

export default Admincampus;
