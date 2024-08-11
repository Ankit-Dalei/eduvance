import React, { useState } from 'react';
import GlobalTable from './GlobalTable';
import { EditOutlined, DeleteOutlined, UserOutlined, MailOutlined, CalendarOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Space, Modal, Form, Input, Select, Radio, Upload, Image } from 'antd';
import { TextInput } from 'flowbite-react';

const { Option } = Select;

const defaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_kApDnVl93Cae48hje7sCY5fAhw2pYyZWg&s'; // Replace with the path to your default image

const Adminmanagement = () => {
  const initialData = [
    { key: 1, "AUTHORIZED NAME": "John Doe", "EMAIL": "jdoe@example.com", "CAMPUS NAME": "Main Campus", "GENDER": "Male", "BLOOD GROUP": "O+", "IMAGE": null },
    { key: 2, "AUTHORIZED NAME": "Jane Smith", "EMAIL": "jsmith@example.com", "CAMPUS NAME": "North Campus", "GENDER": "Female", "BLOOD GROUP": "A-", "IMAGE": null },
    { key: 3, "AUTHORIZED NAME": "Alice Johnson", "EMAIL": "ajohnson@example.com", "CAMPUS NAME": "West Campus", "GENDER": "Female", "BLOOD GROUP": "B+", "IMAGE": null },
    { key: 4, "AUTHORIZED NAME": "Bob Brown", "EMAIL": "bbrown@example.com", "CAMPUS NAME": "South Campus", "GENDER": "Male", "BLOOD GROUP": "AB-", "IMAGE": null },
    { key: 5, "AUTHORIZED NAME": "Charlie Davis", "EMAIL": "cdavis@example.com", "CAMPUS NAME": "East Campus", "GENDER": "Non-binary", "BLOOD GROUP": "O-", "IMAGE": null },
  ];

  const campuses = [
    "Main Campus",
    "North Campus",
    "West Campus",
    "South Campus",
    "East Campus"
  ];

  const genders = [
    "Male",
    "Female",
    "Non-binary",
    "Other"
  ];

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [imagePreview, setImagePreview] = useState(defaultImageUrl);

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setEditValues(record);
    setImagePreview(record.IMAGE || defaultImageUrl);
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
    const newData = data.map(item => item.key === currentRecord.key ? { ...item, ...editValues } : item);
    setData(newData);
    setFilteredData(newData);
    setIsEditModalVisible(false);
    setIsConfirmationVisible(false);
    setCurrentRecord(null);
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
      item['AUTHORIZED NAME'].toLowerCase().includes(value) ||
      item['EMAIL'].toLowerCase().includes(value) ||
      item['CAMPUS NAME'].toLowerCase().includes(value) ||
      item['GENDER'].toLowerCase().includes(value) ||
      item['BLOOD GROUP'].toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleImageChange = (e) => {
    const file = e.fileList[0]?.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      setEditValues(prev => ({ ...prev, IMAGE: file }));
    } else {
      setImagePreview(defaultImageUrl);
      setEditValues(prev => ({ ...prev, IMAGE: null }));
    }
  };

  const columns = [
    { title: 'AUTHORIZED NAME', dataIndex: 'AUTHORIZED NAME', key: 'AUTHORIZED NAME' },
    { title: 'EMAIL', dataIndex: 'EMAIL', key: 'EMAIL' },
    { title: 'CAMPUS NAME', dataIndex: 'CAMPUS NAME', key: 'CAMPUS NAME' },
    { title: 'GENDER', dataIndex: 'GENDER', key: 'GENDER' },
    { title: 'BLOOD GROUP', dataIndex: 'BLOOD GROUP', key: 'BLOOD GROUP' },
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
            <Form.Item label="Upload Image">
              <Upload
                beforeUpload={() => false} // Prevent auto upload
                showUploadList={false}
                onChange={handleImageChange}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
              {imagePreview && (
                <div className="mt-2">
                  <Image
                    width={100}
                    src={imagePreview}
                    alt="Preview"
                  />
                </div>
              )}
            </Form.Item>
            <Form.Item name="AUTHORIZED NAME" label="Authorized Name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="EMAIL" label="Email">
              <Input prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item name="CAMPUS NAME" label="Campus Name">
              <Select
                defaultValue={currentRecord?.['CAMPUS NAME']}
                onChange={(value) => setEditValues(prev => ({ ...prev, 'CAMPUS NAME': value }))}
              >
                {campuses.map((campus) => (
                  <Option key={campus} value={campus}>{campus}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="GENDER" label="Gender">
              <Radio.Group
                defaultValue={currentRecord?.['GENDER']}
                onChange={(e) => setEditValues(prev => ({ ...prev, 'GENDER': e.target.value }))}
              >
                {genders.map((gender) => (
                  <Radio key={gender} value={gender}>{gender}</Radio>
                ))}
              </Radio.Group>
            </Form.Item>
            <Form.Item name="BLOOD GROUP" label="Blood Group">
              <Input prefix={<CalendarOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="dashed" htmlType="submit">
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
          <p>Are you sure you want to delete {currentRecord?.['AUTHORIZED NAME']}?</p>
        </Modal>
        <Modal
          title="Confirm Update"
          visible={isConfirmationVisible}
          onOk={handleConfirmationOk}
          onCancel={handleConfirmationCancel}
          okText="Yes, update"
          cancelText="Cancel"
          okType='dashed'
          okButtonProps={{ type: 'dashed' }}
          cancelButtonProps={{ className: 'red-cancel-button' }}
        >
          <p>Are you sure you want to update the user details?</p>
        </Modal>
      </div>
    </div>
  );
};

export default Adminmanagement;
