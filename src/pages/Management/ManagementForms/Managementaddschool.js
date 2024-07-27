import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addSchoolM } from '../../../Service/Management/addSchoolM';

const ManagementAddSchool = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    campus: '',
    description: '',
    degree: '',
    university: '',
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem('data');
    const parsedData = storedData ? JSON.parse(storedData) : {};

    setFormData((prevData) => ({
      ...prevData,
      campus: parsedData.campus || 'Default Campus',
      university: parsedData.university || 'Default University',
      date: new Date().toLocaleDateString(),
    }));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.schoolName) newErrors.schoolName = 'School Name is required';
    if (!formData.degree) newErrors.degree = 'Degree selection is required';
    if (!formData.description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      degree: selectedOption ? selectedOption.value : '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await addSchoolM(formData);
      if (result.success) {
        toast.success('Data successfully submitted!');
        setFormData({
          schoolName: '',
          campus: formData.campus,
          description: '',
          degree: '',
          university: formData.university,
          date: new Date().toLocaleDateString(),
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

  const degreeOptions = [
    { value: 'Master', label: 'Master' },
    { value: 'Bachelor', label: 'Bachelor' },
    { value: 'Ph.D', label: 'Ph.D' },
  ];

  return (
    <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
      <ToastContainer />
      <form className={`lg:p-2 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`} onSubmit={handleSubmit}>
        <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
          <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
            <label className='lg:w-full lg:text-lg'>School Name:</label>
            <input
              type='text'
              placeholder='School Name'
              className={`lg:w-full`}
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
            />
          </div>
          <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
            <label className='lg:w-full lg:text-lg'>Campus:</label>
            <input
              type='text'
              className={`lg:w-full lg:cursor-not-allowed`}
              value={formData.campus}
              readOnly
            />
          </div>
          <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
            <label className='lg:w-full lg:text-lg'>Description:</label>
            <textarea
              rows="6"
              className="lg:w-full"
              placeholder='Type here'
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
          <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
            <label className='lg:w-full lg:text-lg'>Degree:</label>
            <Select
              options={degreeOptions}
              className="lg:w-full"
              onChange={handleSelectChange}
              value={degreeOptions.find(option => option.value === formData.degree)}
              placeholder="Select One"
            />
          </div>
          <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
            <label className='lg:w-full lg:text-lg'>University:</label>
            <input
              type='text'
              className={`lg:w-full lg:cursor-not-allowed`}
              value={formData.university}
              readOnly
            />
          </div>
          <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
            <label className='lg:w-full lg:text-lg'>Date:</label>
            <input
              type='text'
              className={`lg:w-full lg:cursor-not-allowed`}
              value={formData.date}
              readOnly
            />
          </div>
          <div className={`lg:w-full lg:flex lg:justify-center lg:items-center lg:font-semibold lg:text-sm mt-9`}>
            <button type="submit" className={`lg:w-full lg:bg-blue-500 lg:h-10 lg:hover:bg-blue-400 lg:text-white hover:lg:text-black`} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManagementAddSchool;
