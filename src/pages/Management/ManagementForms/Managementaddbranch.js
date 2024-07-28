import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBranchM } from '../../../Service/Management/addBranchM';

const Managementaddbranch = () => {
  const [formData, setFormData] = useState({
    branchName: '',
    school: '',
    description: '',
    duration: '',
    campus: '',
    university: '',
    date: '',         
  });

  const [schools, setSchools] = useState([
    { value: 'SOET', label: 'SOET' },
    { value: 'SOT', label: 'SOT' },
    { value: 'SOM', label: 'SOM' }
  ]);

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
    
    if (!formData.branchName) newErrors.branchName = 'Branch Name is required';
    if (!formData.school) newErrors.school = 'School selection is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.duration || isNaN(formData.duration) || formData.duration < 1 || formData.duration > 9) {
      newErrors.duration = 'Duration must be a number between 1 and 9';
    }
    
    setErrors(newErrors);
  
    const allFieldsBlank = !formData.branchName && !formData.school && !formData.description && !formData.duration;
  
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

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : '',
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
      const result = await addBranchM(formData);
      if (result.success) {
        toast.success('Data successfully submitted!');
        setFormData({
          branchName: '',
          school: '',
          description: '',
          duration: '',
          campus: formData.campus,
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
  

  return (
    <div className={`h-full w-full flex justify-center items-center`}>
      <ToastContainer />
      <form className={`p-2 h-full w-full flex justify-center items-center flex-row`} onSubmit={handleSubmit}>
        <div className={`p-2 w-[50%] h-full`}>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>Branch Name:</label>
            <input
              type='text'
              placeholder='Branch Name'
              className={`w-full`}
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
            />
          </div>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>School:</label>
            <Select
              name="school"
              options={schools}
              className="w-full"
              onChange={handleSelectChange}
              value={schools.find(option => option.value === formData.school) || null}
              placeholder="Select One"
            />
          </div>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>Duration:</label>
            <input
              type='number'
              placeholder='Duration'
              className={`w-full`}
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              min="1"
              max="9"
            />
          </div>
          <div className={`flex justify-center items-start flex-col gap-2 font-semibold text-sm`}>
            <label className='w-full text-lg'>Description:</label>
            <textarea
              rows="6"
              className="w-full"
              placeholder='Type here'
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`p-2 w-[50%] h-full`}>
          
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
            <button type="submit" className={`w-full bg-blue-500 lg:h-10 hover:bg-blue-400 text-white hover:text-black`} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Managementaddbranch;
