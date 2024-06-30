import React from 'react'
import Form from '../Form'

const Managementaddschool = () => {
  const handelSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
        <form className={`lg:p-2 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`} onSubmit={handelSubmit}>
          <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>School ID:</label>
              <input type='text' placeholder='School Id' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>School Name:</label>
              <input type='text' placeholder='School Name' className={`lg:w-full`}/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Campus:</label>
              <input type='text' placeholder='Campus' className={`lg:w-full lg:cursor-not-allowed`} value={'Bhubaneswar'} readonly/>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Description:</label>
              <textarea rows="6" className="lg:w-full" placeholder='Typehere'></textarea>
            </div>
          </div>
          <div className={`lg:p-2 lg:w-[50%] lg:h-full`}>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>Degree:</label>
              <select name="Degree" id="Degree" className="lg:w-full">
                <option value="" className='text-gray-500'>Select One</option>
                <option value="Master">Master</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Ph.D">Ph.D</option>
              </select>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-start lg:flex-col gap-2 lg:font-semibold lg:text-sm`}>
              <label className='lg:w-full lg:text-lg'>University:</label>
              <input type='text' placeholder='University' className={`lg:w-full lg:cursor-not-allowed`} value={'Centurion University'} readonly/>
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

export default Managementaddschool
