import React, { useState } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTeacherM } from '../../../Service/Management/addTeacherM';

const Managementaddteacher = () => {
  const [formData, setFormData] = useState({
    facultyName: '',
    email: '',
    password: '',
    phone: '',
    gender: null,
    position: '',
    bloodGroup: null,
    qualification: '',
    department: null,
    photo: null,
    joinDate: new Date().toISOString().split('T')[0], // Set default date to today
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const genderOptions = [
    { value: '', label: 'Select One' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  const bloodGroupOptions = [
    { value: '', label: 'Select One' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
  ];

  const departmentOptions = [
    { value: '', label: 'Select One' },
    { value: 'Department1', label: 'Department1' },
    { value: 'Department2', label: 'Department2' },
    { value: 'Department3', label: 'Department3' },
  ];

  const validateForm = () => {
    const newErrors = [];

    // Check if all fields are empty
    const allFieldsEmpty = !formData.facultyName.trim() &&
      !formData.email.trim() &&
      !formData.password.trim() &&
      !formData.phone.trim() &&
      !formData.gender &&
      !formData.position.trim() &&
      !formData.bloodGroup &&
      !formData.qualification.trim() &&
      !formData.department &&
      !formData.photo;

    if (allFieldsEmpty) {
      toast.error('Please fill in all fields.');
      return false;
    }

    // Check if individual fields are empty
    if (!formData.facultyName.trim()) newErrors.push('Faculty Name is required');
    if (!formData.email.trim()) newErrors.push('Email is required');
    if (!formData.password.trim()) newErrors.push('Password is required');
    if (!formData.phone.trim()) newErrors.push('Phone is required');
    if (!formData.gender) newErrors.push('Gender is required');
    if (!formData.position.trim()) newErrors.push('Position is required');
    if (!formData.bloodGroup) newErrors.push('Blood Group is required');
    if (!formData.qualification.trim()) newErrors.push('Qualification is required');
    if (!formData.department) newErrors.push('Department is required');
    if (!formData.photo) newErrors.push('Photo is required');

    if (newErrors.length > 0) {
      toast.error(newErrors.join(', '));
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : '',
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await addTeacherM(formData);
      if (result.success) {
        toast.success('Data successfully submitted!');
        setFormData({
          facultyName: '',
          email: '',
          password: '',
          phone: '',
          gender: null,
          position: '',
          bloodGroup: null,
          qualification: '',
          department: null,
          photo: null,
          joinDate: new Date().toISOString().split('T')[0], // Reset date to today
        });
      } else {
        toast.error(`Failed to submit data: ${result.error}`);
      }
    } catch (error) {
      console.error('There was an error!', error);
      toast.error(`Failed to submit data: ${error.message}`);
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
              <label className='lg:w-full lg:text-lg'>Faculty Name:</label>
              <input
                type='text'
                placeholder='Faculty Name'
                className='lg:w-full'
                name="facultyName"
                value={formData.facultyName}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Email:</label>
              <input
                type='email'
                placeholder='Email'
                className='lg:w-full'
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Password:</label>
              <input
                type='password'
                placeholder='Password'
                className='lg:w-full'
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Phone:</label>
              <input
                type='text'
                placeholder='Phone'
                className='lg:w-full'
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Gender:</label>
              <Select
                name="gender"
                options={genderOptions}
                className="lg:w-full"
                onChange={handleSelectChange}
                value={genderOptions.find(option => option.value === formData.gender) || genderOptions[0]}
                placeholder="Select One"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Position:</label>
              <input
                type='text'
                placeholder='Position'
                className='lg:w-full'
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="lg:p-2 lg:w-[50%] lg:h-full">
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Blood Group:</label>
              <Select
                name="bloodGroup"
                options={bloodGroupOptions}
                className="lg:w-full"
                onChange={handleSelectChange}
                value={bloodGroupOptions.find(option => option.value === formData.bloodGroup) || bloodGroupOptions[0]}
                placeholder="Select One"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Qualification:</label>
              <input
                type='text'
                placeholder='Qualification'
                className='lg:w-full'
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Department:</label>
              <Select
                name="department"
                options={departmentOptions}
                className="lg:w-full"
                onChange={handleSelectChange}
                value={departmentOptions.find(option => option.value === formData.department) || departmentOptions[0]}
                placeholder="Select One"
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Join Date:</label>
              <input
                type='date'
                className='lg:w-full'
                name="joinDate"
                value={formData.joinDate}
                onChange={handleChange}
              />
            </div>
            <div className="lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm">
              <label className='lg:w-full lg:text-lg'>Photo:</label>
              <input
                type='file'
                className='lg:w-full'
                onChange={handleFileChange}
              />
            </div>
            <div className="lg:w-full lg:flex lg:justify-center lg:items-center lg:font-semibold lg:text-sm mt-9">
              <button type="submit" className="lg:w-full lg:bg-blue-500 lg:h-10 lg:hover:bg-blue-400 lg:text-white hover:lg:text-black" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Managementaddteacher;
