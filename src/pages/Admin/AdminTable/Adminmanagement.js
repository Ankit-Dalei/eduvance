import React, { useEffect, useState } from "react";
import GlobalTable from "./GlobalTable";
import {
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  MailOutlined,
  SearchOutlined,
  UploadOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import {
  Button,
  Space,
  Modal,
  Form,
  Input,
  Radio,
  Upload,
  Select,
  Image,
} from "antd";
import { TextInput } from "flowbite-react";
import {
  fetchManagementRecords,
  deleteManagementRecord,
  updateManagementRecord,
} from "../../../Service/ManagementRoute";
import { toast } from 'react-hot-toast';

const { Option } = Select;

const defaultImageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_kApDnVl93Cae48hje7sCY5fAhw2pYyZWg&s"; // Replace with your default image URL

const Adminmanagement = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [imagePreview, setImagePreview] = useState(defaultImageUrl);

  const genders = ["Male", "Female", "Non-binary", "Other"];
  const campuses = ["Main Campus", "North Campus", "West Campus", "South Campus", "East Campus"];

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchManagementRecords();
        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  const handleEdit = (record) => {
    setCurrentRecord(record);
    setEditValues(record);
    setImagePreview(record.mtPhoto || defaultImageUrl);
    setIsEditModalVisible(true);
  };

  const handleDelete = (record) => {
    setCurrentRecord(record);
    setIsDeleteModalVisible(true);
  };

  const handleEditOk = async (values) => {
    try {
      if (currentRecord) {
        const updatedValues = { ...values, mtPhoto: editValues.mtPhoto };

        // Remove password field if it exists
        delete updatedValues.mtPassword;

        await updateManagementRecord(currentRecord.mtId, updatedValues);
        const updatedData = data.map((item) =>
          item.mtId === currentRecord.mtId ? { ...item, ...values, mtPhoto: editValues.mtPhoto } : item
        );
        setData(updatedData);
        setFilteredData(updatedData);
        toast.success('Edit successfully');
      }
      setIsEditModalVisible(false);
      setIsConfirmationVisible(false);
      setCurrentRecord(null);
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error('Error editing record');
    }
  };

  const handleConfirmationOk = () => {
    setIsConfirmationVisible(true);
  };

  const handleConfirmationCancel = () => {
    setIsConfirmationVisible(false);
  };

  const handleDeleteOk = async () => {
    try {
      await deleteManagementRecord(currentRecord.mtId);
      const newData = data.filter((item) => item.mtId !== currentRecord.mtId);
      setData(newData);
      setFilteredData(newData);
      toast.success('Deleted successfully');
      setIsDeleteModalVisible(false);
      setCurrentRecord(null);
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error('Error deleting record');
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.mtName.toLowerCase().includes(value) ||
        item.mtEmail.toLowerCase().includes(value) ||
        item.mtPhone.toLowerCase().includes(value) ||
        item.mtGender.toLowerCase().includes(value) ||
        item.mtBloodGrup.toLowerCase().includes(value) ||
        item.mtCampus.toLowerCase().includes(value) // Added filtering by campus
    );
    setFilteredData(filtered);
  };

  const handleImageChange = (e) => {
    const file = e.fileList[0]?.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      setEditValues((prev) => ({ ...prev, mtPhoto: file }));
    } else {
      setImagePreview(defaultImageUrl);
      setEditValues((prev) => ({ ...prev, mtPhoto: null }));
    }
  };

  const columns = [
    { title: "ID", dataIndex: "mtId", key: "mtId" },
    { title: "Name", dataIndex: "mtName", key: "mtName" },
    { title: "Email", dataIndex: "mtEmail", key: "mtEmail" },
    // { title: "Phone", dataIndex: "mtPhone", key: "mtPhone" },
    { title: "Gender", dataIndex: "mtGender", key: "mtGender" },
    { title: "Blood Group", dataIndex: "mtBloodGrup", key: "mtBloodGrup" },
    { title: "Campus", dataIndex: "campusName", key: "mtCampus" }, // Added campus column
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
          />
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
          <Form initialValues={currentRecord} onFinish={handleEditOk}>
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
                  <Image width={100} src={imagePreview} alt="Preview" />
                </div>
              )}
            </Form.Item>
            <Form.Item name="mtName" label="Name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
          
            <Form.Item name="mtPhone" label="Phone">
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>
            <Form.Item name="mtGender" label="Gender">
              <Radio.Group
                defaultValue={currentRecord?.mtGender}
                onChange={(e) =>
                  setEditValues((prev) => ({
                    ...prev,
                    mtGender: e.target.value,
                  }))
                }
              >
                {genders.map((gender) => (
                  <Radio key={gender} value={gender}>
                    {gender}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
            <Form.Item name="mtBloodGrup" label="Blood Group">
              <Input prefix={<SearchOutlined />} />
            </Form.Item>
            <Form.Item name="mtCampus" label="Campus">
              <Select
                defaultValue={currentRecord?.mtCampus}
                onChange={(value) =>
                  setEditValues((prev) => ({
                    ...prev,
                    mtCampus: value,
                  }))
                }
              >
                {campuses.map((campus) => (
                  <Option key={campus} value={campus}>
                    {campus}
                  </Option>
                ))}
              </Select>
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
          <p>Are you sure you want to delete {currentRecord?.mtName}?</p>
        </Modal>
        <Modal
          title="Confirm Update"
          visible={isConfirmationVisible}
          onOk={handleConfirmationOk}
          onCancel={handleConfirmationCancel}
          okText="Yes, update"
          cancelText="Cancel"
          okType="dashed"
          okButtonProps={{ type: "dashed" }}
          cancelButtonProps={{ className: "red-cancel-button" }}
        >
          <p>Are you sure you want to update the user details?</p>
        </Modal>
      </div>
    </div>
  );
};
export default Adminmanagement;
