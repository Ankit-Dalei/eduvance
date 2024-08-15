import React, { useState, useEffect } from 'react';
import { Button, Space, Modal, Form, Input, Select, Image } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined, MailOutlined, KeyOutlined, PhoneOutlined, CalendarOutlined } from '@ant-design/icons';
import GlobalTable from './GlobalTable';
import { TextInput } from 'flowbite-react';
import { fetchCampusData, deleteCampusData, editCampusData } from '../../../Service/CampusRoute';
import toast from 'react-hot-toast';


const { Option } = Select;

const Admincampus = () => {
  const universities = [
    "State University",
    "City College",
    "Tech Institute",
    "National University",
    "Global University"
  ];

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    const loadCampusData = async () => {
      try {
        const campusData = await fetchCampusData();
        setData(campusData);
        setFilteredData(campusData);
      } catch (error) {
        console.error("Failed to fetch campus data");
      }
    };

    loadCampusData();
  }, []);

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

  const handleConfirmationOk = async () => {
    const response = await editCampusData(currentRecord.csId, {
      ...editValues,
      photoUrl: previewUrl
    });

    if (response.success) {
      const newData = data.map(item => item.csId === currentRecord.csId ? { ...item, ...editValues, photoUrl: previewUrl } : item);
      setData(newData);
      setFilteredData(newData);
      setIsEditModalVisible(false);
      setIsConfirmationVisible(false);
      setCurrentRecord(null);
      setFile(null);
      setPreviewUrl('');
      toast.success('Campus updated successfully');
    } else {
      console.error("Failed to update campus record:", response.error);
      toast.error('Failed to update campus');
    }
  };

  const handleConfirmationCancel = () => {
    setIsConfirmationVisible(false);
  };

  const handleDeleteOk = async () => {
    const response = await deleteCampusData(currentRecord.csId);
    
    if (response.success) {
      const newData = data.filter(item => item.csId !== currentRecord.csId);
      setData(newData);
      setFilteredData(newData);
      setIsDeleteModalVisible(false);
      setCurrentRecord(null);
      toast.success('Campus deleted successfully');
    } else {
      console.error("Failed to delete campus record:", response.error);
      toast.error('Failed to delete campus');
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter(item => 
      item.csName.toLowerCase().includes(value) ||
      item.unId.toLowerCase().includes(value) ||
      item.csAddress.toLowerCase().includes(value) ||
      item.csPhone.toLowerCase().includes(value)
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
    { title: 'Campus Name', dataIndex: 'csName', key: 'csName' },
    { title: 'University Name', dataIndex: 'unId', key: 'unId' },
    { title: 'Address', dataIndex: 'csAddress', key: 'csAddress' },
    { title: 'Phone Number', dataIndex: 'csPhone', key: 'csPhone' },
    { title: 'State', dataIndex: 'csState', key: 'csState' },
    { title: 'Landline Number', dataIndex: 'csLandlineNumber', key: 'csLandlineNumber' },
    { title: 'Established Year', dataIndex: 'csESTD', key: 'csESTD' },
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
      <header className="lg:w-full lg:flex lg:justify-center lg:my-4 lg:items-center">
      </header>
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
            <Form.Item label="Campus Photo">
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
            <Form.Item name="csName" label="Campus Name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="unId" label="University Name">
              <Select
                defaultValue={currentRecord?.unId}
                onChange={(value) => setEditValues(prev => ({ ...prev, unId: value }))}
              >
                {universities.map((uni) => (
                  <Option key={uni} value={uni}>{uni}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="csAddress" label="Address">
              <Input prefix={<KeyOutlined />} />
            </Form.Item>
            <Form.Item name="csPhone" label="Phone Number">
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>
            <Form.Item name="csState" label="State">
              <Input prefix={<KeyOutlined/>} />
            </Form.Item>
            <Form.Item name="csLandlineNumber" label="Landline Number">
              <Input prefix={<PhoneOutlined/>} />
            </Form.Item>
            <Form.Item name="csESTD" label="Established Year">
              <Input type="number" prefix={<CalendarOutlined />} />
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
          onCancel={handleDeleteCancel}
          okText="Delete"
          okButtonProps={{ danger: true }}
        >
          <p>Are you sure you want to delete {currentRecord?.csName}?</p>
        </Modal>
        <Modal
          title="Delete Campus"
          visible={isDeleteModalVisible}
          onOk={handleDeleteOk}
          onCancel={handleDeleteCancel}
          okText="Delete"
          okButtonProps={{ danger: true }}
        >
          <p>Are you sure you want to delete {currentRecord?.csName}?</p>
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
