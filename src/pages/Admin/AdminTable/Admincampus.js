import React, { useState } from 'react';
import GlobalTable from './GlobalTable';
import { EditOutlined, DeleteOutlined, UserOutlined, MailOutlined, KeyOutlined, PhoneOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Space, Modal, Form, Input, Select, Image } from 'antd';
import { TextInput } from 'flowbite-react';

const { Option } = Select;

const Admincampus = () => {
  const universities = [
    "State University",
    "City College",
    "Tech Institute",
    "National University",
    "Global University"
  ];

  const initialData = [
    { key: 1, "CAMPUS NAME": "Main Campus", "UNIVERSITY NAME": "State University", "ADDRESS": "123 Main St", "PHONE NUMBER": "123-456-7890", photoUrl: '' },
    { key: 2, "CAMPUS NAME": "North Campus", "UNIVERSITY NAME": "City College", "ADDRESS": "456 North St", "PHONE NUMBER": "987-654-3210", photoUrl: '' },
    { key: 3, "CAMPUS NAME": "West Campus", "UNIVERSITY NAME": "Tech Institute", "ADDRESS": "789 West St", "PHONE NUMBER": "555-123-4567", photoUrl: '' },
    { key: 4, "CAMPUS NAME": "South Campus", "UNIVERSITY NAME": "National University", "ADDRESS": "101 South St", "PHONE NUMBER": "555-987-6543", photoUrl: '' },
    { key: 5, "CAMPUS NAME": "East Campus", "UNIVERSITY NAME": "Global University", "ADDRESS": "202 East St", "PHONE NUMBER": "555-555-5555", photoUrl: '' },
  ];

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setEditValues(record);
    setPreviewUrl(record.photoUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbtmqXaMY_AUa00xpLulLflRwWoR7jMGv__A21gUdBoKlImQLwE54vvB8UfvIcLrCWyU&usqp=CAU');
    setIsEditModalVisible(true);
  };

  const handleDelete = (record) => {
    setCurrentRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleEditOk = (values) => {
    setEditValues(values);
    setIsConfirmationVisible(true);
  };

  const handleConfirmationOk = () => {
    const newData = data.map(item => item.key === currentRecord.key ? { ...item, ...editValues, photoUrl: previewUrl } : item);
    setData(newData);
    setFilteredData(newData);
    setIsEditModalVisible(false);
    setIsConfirmationVisible(false);
    setCurrentRecord(null);
    setFile(null);
    setPreviewUrl('');
  };

  const handleConfirmationCancel = () => {
    setIsConfirmationVisible(false);
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
      item['CAMPUS NAME'].toLowerCase().includes(value) ||
      item['UNIVERSITY NAME'].toLowerCase().includes(value) ||
      item['ADDRESS'].toLowerCase().includes(value) ||
      item['PHONE NUMBER'].toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const columns = [
    { title: 'CAMPUS NAME', dataIndex: 'CAMPUS NAME', key: 'CAMPUS NAME' },
    { title: 'UNIVERSITY NAME', dataIndex: 'UNIVERSITY NAME', key: 'UNIVERSITY NAME' },
    { title: 'ADDRESS', dataIndex: 'ADDRESS', key: 'ADDRESS' },
    { title: 'PHONE NUMBER', dataIndex: 'PHONE NUMBER', key: 'PHONE NUMBER' },
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
          title="Edit Campus"
          visible={isEditModalVisible}
          onCancel={() => setIsEditModalVisible(false)}
          footer={null}
        >
          <Form
            initialValues={editValues}
            onFinish={handleEditOk}
          >
            <Form.Item name="photoUrl" label="Campus Photo">
              <Input type="file" onChange={handleFileChange} />
              {previewUrl && (
                <div className="my-2">
                  <Image
                    width={300}
                    src={previewUrl}
                    alt="Preview"
                  />
                </div>
              )}
            </Form.Item>
            <Form.Item name="CAMPUS NAME" label="Campus Name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="UNIVERSITY NAME" label="University Name">
              <Select
                prefix={<MailOutlined />}
                defaultValue={currentRecord?.['UNIVERSITY NAME']}
                onChange={(value) => setEditValues(prev => ({ ...prev, 'UNIVERSITY NAME': value }))}
              >
                {universities.map((uni) => (
                  <Option key={uni} value={uni}>{uni}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="ADDRESS" label="Address">
              <Input prefix={<KeyOutlined />} />
            </Form.Item>
            <Form.Item name="PHONE NUMBER" label="Phone Number">
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="dashed" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Delete Campus"
          visible={isDeleteModalVisible}
          onOk={handleDeleteOk}
          onCancel={() => setIsDeleteModalVisible(false)}
          okText="Delete"
          okButtonProps={{ danger: true }}
        >
          <p>Are you sure you want to delete {currentRecord?.['CAMPUS NAME']}?</p>
        </Modal>
        <Modal
          title="Confirm Update"
          visible={isConfirmationVisible}
          onOk={handleConfirmationOk}
          onCancel={handleConfirmationCancel}
          okText="Yes, update"
          okType='dashed'
          cancelText="Cancel"
        >
          <p>Are you sure you want to update the campus details?</p>
        </Modal>
      </div>
    </div>
  );
};

export default Admincampus;
