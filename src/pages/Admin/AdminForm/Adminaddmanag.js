import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { formmanbck } from '../../../Redux/formmanagementback';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postManagementData } from '../../../Service/postManagementData';

const Adminaddmanag = () => {
  const dispatch = useDispatch();

  const campusData = [
    { id: 'campus1', name: 'Campus 1' },
    { id: 'campus2', name: 'Campus 2' },
    { id: 'campus3', name: 'Campus 3' }
  ];

  const universityData = [
    { id: 'univ1', name: 'University 1' },
    { id: 'univ2', name: 'University 2' },
    { id: 'univ3', name: 'University 3' }
  ];

  const [formData, setFormData] = useState({
    managementName: '',
    managementEmail: '',
    password: '',
    campusId: '',
    gender: '',
    bloodGroup: '',
    universityId: '',
    dateOfJoin: new Date().toISOString().slice(0, 10),
    image: null
  });

  const [campusOptions, setCampusOptions] = useState([]);
  const [universityOptions, setUniversityOptions] = useState([]);

  useEffect(() => {
    setCampusOptions(campusData);
    setUniversityOptions(universityData);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleClose = () => {
    dispatch(formmanbck());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { managementName, managementEmail, password, campusId, gender, bloodGroup, universityId, dateOfJoin, image } = formData;

    // Validate form fields
    if (!managementName && !managementEmail && !password && !campusId && !gender && !bloodGroup && !universityId && !image) {
      toast.error("Please fill all fields");
      return;
    }

    if (!managementName) {
      toast.error("Management Name is required");
      return;
    }
    if (!managementEmail) {
      toast.error("Management Email is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 8) {
      toast.error("Password length atleast 8 character");
      return;
    }
    if (!campusId) {
      toast.error("Campus ID is required");
      return;
    }
    if (!gender) {
      toast.error("Gender is required");
      return;
    }
    if (!bloodGroup) {
      toast.error("Blood Group is required");
      return;
    }
    if (!universityId) {
      toast.error("University ID is required");
      return;
    }
    if (!image) {
      toast.error("Image is required");
      return;
    }

    const managementData = { managementName, managementEmail, password, campusId, gender, bloodGroup, universityId, dateOfJoin, image };

    try {
      console.log(managementData)
      const response = await postManagementData(managementData);
      if (response.success === false) {
        toast.error("Network response was not ok");
      } else if (response instanceof Error) {
        toast.error(`Error: ${response.message}`);
      } else {
        console.log('Response:', response);

        // Clear the form after successful submission
        setFormData({
          managementName: '',
          managementEmail: '',
          password: '',
          campusId: '',
          gender: '',
          bloodGroup: '',
          universityId: '',
          dateOfJoin: new Date().toISOString().slice(0, 10),
          image: null
        });

        toast.success("Form submitted successfully");
      }
    } catch (error) {
      toast.error("There was an error submitting the form");
    }
  };

  return (
    <>
      <div className={`h-[80%] w-[100%] flex justify-center items-center absolute top-[12%] left-0 z-[2]`}>
        <div className={`h-[90%] w-[65%] sm:h-[90%] sm:w-[55%] lg:h-[90%] lg:w-[25%] p-4 bg-slate-300 rounded-xl flex justify-start items-center flex-col`}>
          <div className={`h-[10%] w-[90%] relative flex justify-center items-center`}>
            <h1 className={`font-semibold text-gray-400 text-2xl font-mono`}>ADDING MANAGEMENT</h1>
            <FontAwesomeIcon icon={faXmark} className={`absolute right-0 font-semibold hover:text-gray-700 text-gray-400 text-2xl font-mono cursor-pointer`} onClick={handleClose} />
          </div>
          <form className={`h-[90%] w-full flex justify-around items-center flex-col gap-2 font-serif`} onSubmit={handleSubmit}>
            <input type='text' placeholder='MANAGEMENT NAME' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='managementName' value={formData.managementName} onChange={handleChange} />
            <input type='email' placeholder='MANAGEMENT EMAIL' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='managementEmail' value={formData.managementEmail} onChange={handleChange} />
            <input type='password' placeholder='PASSWORD' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='password' value={formData.password} onChange={handleChange} />
            <select className={`h-[40px] w-[90%] p-2 rounded-xl`} name='campusId' value={formData.campusId} onChange={handleChange}>
              <option value="" className='text-gray-500'>CAMPUS ID</option>
              {campusOptions.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
            <select className={`h-[40px] w-[90%] p-2 rounded-xl`} name='gender' value={formData.gender} onChange={handleChange}>
              <option value="" className='text-gray-500'>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            
            <select className={`h-[40px] w-[90%] p-2 rounded-xl`} name='bloodGroup' value={formData.bloodGroup} onChange={handleChange}>
              <option value="" className='text-gray-500'>Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <select className={`h-[40px] w-[90%] p-2 rounded-xl`} name='universityId' value={formData.universityId} onChange={handleChange}>
              <option value="" className='text-gray-500'>UNIVERSITY ID</option>
              {universityOptions.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
            <input type='date' placeholder='DATE OF JOIN' className={`h-[40px] w-[90%] p-2 rounded-xl`} hidden name='dateOfJoin' value={formData.dateOfJoin} />
            <input type='file' accept='image/*' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='image' onChange={handleChange} />
            <button className={`h-[40px] w-[90%] p-2 bg-blue-500 rounded-xl`}>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Adminaddmanag;
