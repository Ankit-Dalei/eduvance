import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalTable from './GlobalTable';
import { EditOutlined, DeleteOutlined, PhoneOutlined, ContactsOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Space, Modal, Form, Input, Upload, Image } from 'antd';
import { TextInput } from 'flowbite-react';
import { UploadOutlined } from '@ant-design/icons';

const Adminuniversity = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    axios.get('https://mocki.io/v1/3136c4b5-a5d8-491f-a9e0-4834531b423a')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setIsEditModalVisible(true);
    setPreviewUrl(record.photoUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF3awjdy4fDiGzPF_J9fl8rjCwD6siKDOIhzqTRw6UKfnGlEY_DqNRL0kEVI_OZIey-w&usqp=CAU'); // Set preview URL if available
  };

  const handleDelete = (record) => {
    setCurrentRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleEditOk = (values) => {
    const newData = data.map(item => item.key === currentRecord.key ? { ...item, ...values, photoUrl: previewUrl } : item);
    setData(newData);
    setFilteredData(newData);
    setIsEditModalVisible(false);
    setCurrentRecord(null);
    setFile(null);
    setPreviewUrl('');
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
      item.universityName.toLowerCase().includes(value) ||
      item.estd.toLowerCase().includes(value) ||
      item.address.toLowerCase().includes(value) ||
      item.phone.toLowerCase().includes(value) ||
      item.landline.toLowerCase().includes(value) ||
      item.faxNumber.toLowerCase().includes(value) ||
      item.dateOfJoin.toLowerCase().includes(value)
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
    { title: 'University Name', dataIndex: 'universityName', key: 'universityName' },
    { title: 'Established', dataIndex: 'estd', key: 'estd' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Landline', dataIndex: 'landline', key: 'landline' },
    { title: 'Fax Number', dataIndex: 'faxNumber', key: 'faxNumber' },
    { title: 'Date of Join', dataIndex: 'dateOfJoin', key: 'dateOfJoin' },
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
          title="Edit University"
          visible={isEditModalVisible}
          onCancel={() => setIsEditModalVisible(false)}
          footer={null}
        >
          <Form
            initialValues={currentRecord}
            onFinish={handleEditOk}
          >
            <Form.Item name="photoUrl" label="Photo">
              <Input type="file" onChange={handleFileChange} />
              {previewUrl && (
                <div className="my-2">
                  <Image
                    width={200}
                    src={previewUrl}
                    alt="Preview"
                  />
                </div>
              )}
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>
            <Form.Item name="landline" label="Landline">
              <Input prefix={<ContactsOutlined />} />
            </Form.Item>
            <Form.Item name="faxNumber" label="Fax Number">
              <Input prefix={<PrinterOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="dashed" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Delete University"
          visible={isDeleteModalVisible}
          onOk={handleDeleteOk}
          onCancel={() => setIsDeleteModalVisible(false)}
          okText="Delete"
          okButtonProps={{ danger: true }}
        >
          <p>Are you sure you want to delete {currentRecord?.universityName}?</p>
        </Modal>
      </div>
    </div>
  );
};

export default Adminuniversity;
