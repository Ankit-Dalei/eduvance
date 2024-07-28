import React, { useState } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addStudentM } from '../../../Service/Management/addStudentM';

const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' }
];

const bloodGroupOptions = [
  { value: 'A+', label: 'A+' },
  { value: 'A-', label: 'A-' },
  { value: 'B+', label: 'B+' },
  { value: 'B-', label: 'B-' },
  { value: 'AB+', label: 'AB+' },
  { value: 'AB-', label: 'AB-' },
  { value: 'O+', label: 'O+' },
  { value: 'O-', label: 'O-' }
];

const branchOptions = [
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Electrical Engineering', label: 'Electrical Engineering' },
  { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
  // Add more branches as necessary
];

const batchOptions = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  // Add more batches as necessary
];

const Managementaddstudent = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: null,
    parentName: '',
    parentContactNumber: '',
    branch: null,
    bloodGroup: null,
    batch: null,
    admissionDate: getCurrentDate(),
    photo: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      photo: e.target.files[0]
    }));
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: selectedOption ? selectedOption.value : null
    }));
  };

  const validateForm = () => {
    let isValid = true;

    // Reset previous errors
    toast.dismiss();

    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.parentName || !formData.parentContactNumber || !formData.branch || !formData.bloodGroup || !formData.batch || !formData.photo) {
      toast.error('Please fill in all fields.');
      return false;
    }

    // Validate individual fields
    if (!formData.name) {
      toast.error('Name is required.');
      isValid = false;
    }
    if (!formData.email) {
      toast.error('Email is required.');
      isValid = false;
    }
    if (!formData.password) {
      toast.error('Password is required.');
      isValid = false;
    } else if (formData.password.length < 6 || formData.password.length > 8) {
      toast.error('Password must be between 6-8 characters.');
      isValid = false;
    }
    if (!formData.phone) {
      toast.error('Phone is required.');
      isValid = false;
    } else if (formData.phone.length !== 10) {
      toast.error('Phone number must be 10 digits.');
      isValid = false;
    }
    if (!formData.parentName) {
      toast.error('Parent Name is required.');
      isValid = false;
    }
    if (!formData.parentContactNumber) {
      toast.error('Phone is required.');
      isValid = false;
    } else if (formData.parentContactNumber.length !== 10) {
      toast.error('Phone number must be 10 digits.');
      isValid = false;
    }
    if (!formData.branch) {
      toast.error('Branch is required.');
      isValid = false;
    }
    if (!formData.bloodGroup) {
      toast.error('Blood Group is required.');
      isValid = false;
    }
    if (!formData.batch) {
      toast.error('Batch is required.');
      isValid = false;
    }
    if (!formData.photo) {
      toast.error('Photo is required.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await addStudentM(formData);
      if (result.success) {
        toast.success('Student added successfully!');
        setFormData({
          name: '',
          email: '',
          password: '',
          phone: '',
          gender: null,
          parentName: '',
          parentContactNumber: '',
          branch: null,
          bloodGroup: null,
          batch: null,
          admissionDate: getCurrentDate(),
          photo: null,
        });
      } else {
        toast.error(`Failed to add student: ${result.error}`);
      }
    } catch (error) {
      toast.error(`An error occurred while adding student: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center">
        <form className="lg:p-2 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row" onSubmit={handleSubmit}>
          <div className="lg:p-2 lg:w-[50%] lg:h-full">
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="lg:w-full"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="lg:w-full"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="lg:w-full"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Phone:</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="lg:w-full"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Gender:</label>
              <Select
                name="gender"
                options={genderOptions}
                value={genderOptions.find(option => option.value === formData.gender) || null}
                onChange={handleSelectChange}
                className="lg:w-full"
                placeholder="Select one"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Parent Name:</label>
              <input
                type="text"
                name="parentName"
                placeholder="Parent Name"
                value={formData.parentName}
                onChange={handleChange}
                className="lg:w-full"
              />
            </div>
          </div>
          <div className="lg:p-2 lg:w-[50%] lg:h-full">
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Parent Contact Number:</label>
              <input
                type="text"
                name="parentContactNumber"
                placeholder="Parent Contact Number"
                value={formData.parentContactNumber}
                onChange={handleChange}
                className="lg:w-full"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Branch:</label>
              <Select
                name="branch"
                options={branchOptions}
                value={branchOptions.find(option => option.value === formData.branch) || null}
                onChange={handleSelectChange}
                className="lg:w-full"
                placeholder="Select one"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Blood Group:</label>
              <Select
                name="bloodGroup"
                options={bloodGroupOptions}
                value={bloodGroupOptions.find(option => option.value === formData.bloodGroup) || null}
                onChange={handleSelectChange}
                className="lg:w-full"
                placeholder="Select one"
              />
            </div>
            <div className="lg:hidden lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Admission Date:</label>
              <input
                type="date"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
                className="lg:w-full"
                disabled
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className="lg:w-full lg:text-lg">Photo:</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="lg:w-full"
              />
            </div>
            <div className="lg:w-full lg:flex lg:justify-center lg:items-center lg:font-semibold lg:text-sm mt-9">
              <button
                type="submit"
                className={`lg:w-full lg:bg-blue-500 lg:h-10 lg:hover:bg-blue-400 lg:text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Managementaddstudent;
