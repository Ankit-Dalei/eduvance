import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formdeg } from '../../../Redux/formdegreeback';
import { postDegreeData } from '../../../Service/postDegreeData';

const Admindegree = () => {
    const dispatch = useDispatch();
  
    const [formData, setFormData] = useState({
      degreeName: '',
      degreeSnAme: '',
      dateOfJoin: new Date().toISOString().slice(0, 10),
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value
        });
    };
  
    const handleClose = () => {
      dispatch(formdeg());
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { degreeName, degreeSnAme, dateOfJoin } = formData;
  
      if (!degreeName && !degreeSnAme) {
        toast.error("Please fill all fields");
        return;
      }
  
      if (!degreeName) {
        toast.error("Name is required");
        return;
      }
      if (!degreeSnAme) {
        toast.error("Short Name is required");
        return;
      }
  
      const DegreeData = { degreeName, degreeSnAme, dateOfJoin };
  console.log(DegreeData)
      try {
        console.log(DegreeData)
        const response = await postDegreeData(DegreeData);
        if (response.success === false) {
          toast.error("Network response was not ok");
        } else if (response instanceof Error) {
          toast.error(`Error: ${response.message}`);
        } else {
          console.log('Response:', response);
  
          setFormData({
            degreeName: '',
            degreeSnAme: '',
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
            <h1 className={`font-semibold text-gray-400 text-2xl font-mono`}>ADDING MANAGEMENT</h1>
            <FontAwesomeIcon icon={faXmark} className={`absolute right-0 font-semibold hover:text-gray-700 text-gray-400 text-2xl font-mono cursor-pointer`} onClick={handleClose} />
          </div>
          <form className={`h-[80%] w-full flex justify-around items-center flex-col gap-2 font-serif`} onSubmit={handleSubmit}>
            <input type='text' placeholder='DEGREE FULL NAME' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='degreeName' value={formData.degreeName} onChange={handleChange} />
            <input type='text' placeholder='DEGREE SHORT NAME' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='degreeSnAme' value={formData.degreeSnAme} onChange={handleChange} />
            <input type='date' placeholder='DATE OF JOIN' className={`h-[40px] w-[90%] p-2 rounded-xl`} name='dateOfJoin' value={formData.dateOfJoin} />
            <button className={`h-[40px] w-[90%] p-2 bg-blue-500 rounded-xl`}>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Admindegree
