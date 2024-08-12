import React, { useState, useEffect } from 'react';
import GlobalTable from './GlobalTable';
import { EditOutlined, DeleteOutlined, PhoneOutlined, ContactsOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Space, Modal, Form, Input, Image } from 'antd';
import { TextInput } from 'flowbite-react';
import { universityfetch } from '../../../Service/universityfetch';

import toast from 'react-hot-toast';
import { deleteUniversity, editUniversity } from '../../../Service/addUniversity';

const Adminuniversity = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    universityfetch()
      .then(data => {
        if (data) {
          console.log("data is", data); 
          setData(data); 
          setFilteredData(data); 
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setPreviewUrl(record.unPhoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF3awjdy4fDiGzPF_J9fl8rjCwD6siKDOIhzqTRw6UKfnGlEY_DqNRL0kEVI_OZIey-w&usqp=CAU');
    setIsEditModalVisible(true);
  };

  const handleDelete = (record) => {
    setCurrentRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleEditOk = (values) => {
    const updatedData = {
      ...currentRecord,
      ...values,
      unPhoto: previewUrl
    };
    editUniversity(currentRecord.unId, updatedData, data, setData, setFilteredData, setIsEditModalVisible, () => {
      setCurrentRecord(null);
      setFile(null);
      setPreviewUrl('');
    });
  };

  const handleDeleteOk = () => {
    deleteUniversity(currentRecord.unId, data, setData, setFilteredData, setIsDeleteModalVisible);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter(item => 
      item.unName.toLowerCase().includes(value) ||
      item.unCountry.toLowerCase().includes(value) ||
      item.unState.toLowerCase().includes(value) ||
      item.unAddress.toLowerCase().includes(value) ||
      item.unPhone.toLowerCase().includes(value) ||
      item.unLandlineNumber.toLowerCase().includes(value) ||
      item.unFaxNumber.toLowerCase().includes(value) ||
      item.unCreatedAt.toLowerCase().includes(value)
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
    { title: 'University Name', dataIndex: 'unName', key: 'unName' },
    { title: 'Country', dataIndex: 'unCountry', key: 'unCountry' },
    { title: 'State', dataIndex: 'unState', key: 'unState' },
    { title: 'Address', dataIndex: 'unAddress', key: 'unAddress' },
    { title: 'Phone', dataIndex: 'unPhone', key: 'unPhone' },
    { title: 'Landline', dataIndex: 'unLandlineNumber', key: 'unLandlineNumber' },
    { title: 'Fax Number', dataIndex: 'unFaxNumber', key: 'unFaxNumber' },
    { title: 'Created At', dataIndex: 'unCreatedAt', key: 'unCreatedAt' },
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
            <Form.Item name="unPhoto" label="Photo">
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
            <Form.Item name="unPhone" label="Phone">
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>
            <Form.Item name="unLandlineNumber" label="Landline">
              <Input prefix={<ContactsOutlined />} />
            </Form.Item>
            <Form.Item name="unFaxNumber" label="Fax Number">
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
          <p>Are you sure you want to delete {currentRecord?.unName}?</p>
        </Modal>
      </div>
    </div>
  );
};

export default Adminuniversity;
