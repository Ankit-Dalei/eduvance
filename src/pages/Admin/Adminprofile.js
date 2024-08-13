import React from 'react'
import { Link } from 'react-router-dom'

const Adminprofile = ({name,email}) => {
  
  return (
    <>
      <div className={`h-auto w-auto p-7 bg-slate-300 absolute right-3 z-[2] top-0 mt-[5%] rounded-xl flex justify-center items-center`}>
        <div className={``}>
            <h1 className={`font-semibold text-xl`}>{name}</h1>
            <p className={`text-gray-400 text-wrap`}>{email}</p>
        </div>
 
      </div>
    </>
  )
}

export default Adminprofile
