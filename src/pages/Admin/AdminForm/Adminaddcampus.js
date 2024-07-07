import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { formcampu } from '../../../Redux/formcampusback';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCampusData } from '../../../Service/postCampusData';

const Adminaddcampus = () => {
  const dispatch = useDispatch();

  const data = [
    { id: 'ytfd6543', natme: 'kjhhggf' },
    { id: 'pofd6543', natme: 'hgfkjhgf' },
    { id: 'kjhtfd6543', natme: 'fkjhgf' }
  ];

  const [formData, setFormData] = useState({
    campusName: '',
    universityId: '',
    estd: '',
    state: '',
    address: '',
    phone: '',
    landline: '',
    dateOfJoin: new Date().toISOString().slice(0, 10)
  });

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(data);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClose = () => {
    dispatch(formcampu());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { campusName, universityId, estd, state, address, phone, landline, dateOfJoin } = formData;

    if (!campusName && !universityId && !estd && !state && !address && !phone && !landline) {
      toast.error("Please fill all fields");
      return;
    }

    else if (!campusName) {
      toast.error("Campus Name is required");
      return;
    }
    else if (!universityId) {
      toast.error("University ID is required");
      return;
    }
    else if (!estd) {
      toast.error("ESTD is required");
      return;
    }
    else if (estd.length !== 4) {
      toast.error("ESTD number 4 number");
      return;
    }
    else if (!state) {
      toast.error("State is required");
      return;
    }
    else if (!address) {
      toast.error("Address is required");
      return;
    }
    else if (!phone) {
      toast.error("Phone is required");
      return;
    }
    else if (phone.length > 10 || phone.length < 10 || phone.length !== 4) {
      toast.error("Phone number only 10 number");
      return;
    }
    else if (!landline) {
      toast.error("Landline is required");
      return;
    }
    else if (landline.length > 10 || landline.length < 10 || landline.length !== 4) {
      toast.error("Landline number only 10 number");
      return;
    }

    const campusData = { campusName, universityId, estd, state, address, phone, landline, dateOfJoin };

    try {
      console.log(campusData)
      const response = await postCampusData(campusData);
      if (response.success === false) {
        toast.error("Network response was not ok");
      } else if (response instanceof Error) {
        toast.error(`Error: ${response.message}`);
      } else {
        console.log('Response:', response);

        setFormData({
          campusName: '',
          universityId: '',
          estd: '',
          state: '',
          address: '',
          phone: '',
          landline: '',
          dateOfJoin: new Date().toISOString().slice(0, 10)
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
            <h1 className={`font-semibold text-gray-400 text-2xl font-mono`}>ADDING CAMPUS</h1>
            <FontAwesomeIcon icon={faXmark} className={`absolute right-0 font-semibold hover:text-gray-700 text-gray-400 text-2xl font-mono cursor-pointer`} onClick={handleClose} />
          </div>
          <form className={`h-[90%] w-full flex justify-around items-center flex-col gap-2 font-serif`} onSubmit={handleSubmit}>
            <input type='text' placeholder='CAMPUS NAME' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='campusName' value={formData.campusName} onChange={handleChange} />
            <select className={`h-[40px] w-[90%] p-2 rounded-xl`} name='universityId' value={formData.universityId} onChange={handleChange}>
              <option value="" className='text-gray-500'>UNIVERSITY ID</option>
              {options.map((option) => (
                <option key={option.id} value={option.id}>{option.natme}</option>
              ))}
            </select>
            <input type='number' placeholder='ESTD' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='estd' value={formData.estd} onChange={handleChange} />
            <input type='text' placeholder='STATE' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='state' value={formData.state} onChange={handleChange} />
            <input type='text' placeholder='ADDRESS' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='address' value={formData.address} onChange={handleChange} />
            <input type='number' placeholder='PHONE' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='phone' value={formData.phone} onChange={handleChange} />
            <input type='number' placeholder='LANDLINE' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='landline' value={formData.landline} onChange={handleChange} />
            <input type='date' placeholder='DATE OF JOIN' className={`h-[40px] w-[90%] p-2 rounded-xl`} hidden name='dateOfJoin' value={formData.dateOfJoin} />
            <button className={`h-[40px] w-[90%] p-2 bg-blue-500 rounded-xl`}>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Adminaddcampus;
