import React from 'react'
import Form from '../Form'

const Managementaddteacher = () => {
  const handelSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className={`border-2 border-solid lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
        <form className={`lg:p-2 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`} onSubmit={handelSubmit}>
          <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Faculty ID:</label>
              <input type='text' placeholder='Faculty Id' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Faculty Name:</label>
              <input type='text' placeholder='Faculty Name' className={`lg:w-full`}/>
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
          </div>
          <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Position:</label>
              <input type='text' placeholder='Position' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Blood Group:</label>
              <input type='text' placeholder='Blood Group' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Qualification:</label>
              <input type='text' placeholder='Qualification' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <input type='text' placeholder='JoinDate' className={`lg:w-full`} hidden/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Department:</label>
              <select name="Department" id="Department" className="lg:w-full">
                <option value="" className='text-gray-500'>Select One</option>
                <option value="Department">Department</option>
                <option value="Department">Department</option>
                <option value="Department">Department</option>
              </select>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Photo:</label>
              <input type='file' className={`lg:w-full`}/>
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

export default Managementaddteacher
