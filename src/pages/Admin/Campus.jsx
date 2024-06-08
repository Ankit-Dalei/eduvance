import React, { useState } from 'react';
import { Button, Table, Modal, Form, Input } from 'antd';
import Sidebar from './Sidebar';

const Campus = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');

  const initialData = [
    {
      "USER NAME": "John Doe",
      LOGIN: "jdoe",
      ROLE: "Admin",
      "CREATED AT": "2024-01-15T08:30:00Z",
    },
    {
      "USER NAME": "Jane Smith",
      LOGIN: "jsmith",
      ROLE: "User",
      "CREATED AT": "2024-02-20T12:45:00Z",
    },
    {
      "USER NAME": "Alice Johnson",
      LOGIN: "ajohnson",
      ROLE: "Moderator",
      "CREATED AT": "2024-03-10T09:00:00Z",
    },
    {
      "USER NAME": "Bob Brown",
      LOGIN: "bbrown",
      ROLE: "User",
      "CREATED AT": "2024-04-05T14:20:00Z",
    },
    {
      "USER NAME": "Charlie Davis",
      LOGIN: "cdavis",
      ROLE: "Admin",
      "CREATED AT": "2024-05-12T11:10:00Z",
    },
    {
      "USER NAME": "Alice Johnson",
      LOGIN: "ajohnson",
      ROLE: "Moderator",
      "CREATED AT": "2024-03-10T09:00:00Z",
    },
    {
      "USER NAME": "Bob Brown",
      LOGIN: "bbrown",
      ROLE: "User",
      "CREATED AT": "2024-04-05T14:20:00Z",
    },
    {
      "USER NAME": "Charlie Davis",
      LOGIN: "cdavis",
      ROLE: "Admin",
      "CREATED AT": "2024-05-12T11:10:00Z",
    },
    {
      "USER NAME": "Alice Johnson",
      LOGIN: "ajohnson",
      ROLE: "Moderator",
      "CREATED AT": "2024-03-10T09:00:00Z",
    },
    {
      "USER NAME": "Bob Brown",
      LOGIN: "bbrown",
      ROLE: "User",
      "CREATED AT": "2024-04-05T14:20:00Z",
    },
    {
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
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

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
        <>
          <Button onClick={() => showEditModal(record)} style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Button onClick={() => showDeleteConfirm(record)} danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Sidebar>
      <div style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by name"
         className='bg-gray-300 rounded-3xl '
          value={searchText}
          onChange={handleSearch}
          style={{ width: 600, marginRight: 16,backgroundColor:'' }}
        />
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ pageSize: 4 }} />

      <Modal
        title="Edit Record"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input the age!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input the address!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete Record"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <p>Are you sure you want to delete this record?</p>
      </Modal>
    </Sidebar>
  );
};

export default Campus;
