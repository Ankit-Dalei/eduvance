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
  
    const allFieldsBlank = !formData.schoolName && !formData.degree && !formData.description;
    
    return {
      errors: Object.values(newErrors),
      allFieldsBlank
    };
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
    
    const { errors, allFieldsBlank } = validateForm();
  
    if (allFieldsBlank) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
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
    <div className={`h-full w-full flex justify-center items-center`}>
      <ToastContainer />
      <form className={`p-2 h-full w-full flex justify-center items-center flex-row`} onSubmit={handleSubmit}>
        <div className={`p-2 w-[50%] h-full`}>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>School Name:</label>
            <input
              type='text'
              placeholder='School Name'
              className={`w-full`}
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
            />
          </div>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>Campus:</label>
            <input
              type='text'
              className={`w-full cursor-not-allowed`}
              value={formData.campus}
              readOnly
            />
          </div>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>Description:</label>
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
        <div className={`p-2 w-[50%] h-full`}>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>Degree:</label>
            <Select
              options={degreeOptions}
              className="w-full"
              onChange={handleSelectChange}
              value={degreeOptions.find(option => option.value === formData.degree)}
              placeholder="Select One"
            />
          </div>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>University:</label>
            <input
              type='text'
              className={`w-full cursor-not-allowed`}
              value={formData.university}
              readOnly
            />
          </div>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>Date:</label>
            <input
              type='text'
              className={`w-full cursor-not-allowed`}
              value={formData.date}
              readOnly
            />
          </div>
          <div className={`w-full flex justify-center items-center font-semibold text-sm mt-9`}>
            <button type="submit" className={`w-full bg-blue-500 h-10 hover:bg-blue-400 text-white hover:text-black`} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManagementAddSchool;
