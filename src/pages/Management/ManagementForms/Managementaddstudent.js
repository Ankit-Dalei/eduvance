import React from 'react'
import Form from '../Form'

const Managementaddstudent = () => {
  const handelSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
        <form className={`lg:p-1 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`} onSubmit={handelSubmit}>
          <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <input type='text' placeholder='Student Id' className={`lg:w-full`} hidden/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Name:</label>
              <input type='text' placeholder='Name' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Email:</label>
              <input type='email' placeholder='Email' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Password:</label>
              <input type='email' placeholder='Password' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Phone:</label>
              <input type='email' placeholder='Phone' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Gender:</label>
              <select name="Degree" id="Degree" className="lg:w-full">
                <option value="" className='text-gray-500'>Select One</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Sandeep">Sandeep</option>
              </select>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Parent Name:</label>
              <input type='email' placeholder='Parent Name' className={`lg:w-full`}/>
            </div>
          </div>
          <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
            
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Parent Contact Number:</label>
              <input type='text' placeholder='Parent Contact Number' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Branch:</label>
              <input type='text' placeholder='Branch' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Blood Group:</label>
              <input type='text' placeholder='Blood Group' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Batch:</label>
              <select name="Batch" id="Batch" className="lg:w-full">
                <option value="" className='text-gray-500'>Select One</option>
                <option value="Batch">Batch</option>
                <option value="Batch">Batch</option>
                <option value="Batch">Batch</option>
              </select>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Photo:</label>
              <input type='file' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <input type='text' placeholder='addmission Date' className={`lg:w-full`} hidden/>
            </div>
            <div className={`lg:w-full lg:flex lg:justify-center lg:items-center lg:font-semibold lg:text-sm mt-9`}>
              <button className={`lg:w-full lg:bg-blue-500 lg:h-10 lg:hover:bg-blue-400 lg:text-white hover:lg:text-black`}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Managementaddstudent
