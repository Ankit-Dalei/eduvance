import React from 'react'
import { Link } from 'react-router-dom'

const Adminprofile = () => {
  return (
    <>
      <div className={`h-auto w-auto p-7 bg-slate-300 absolute right-3 z-[2] top-0 mt-[5%] rounded-xl flex justify-center items-center`}>
        <div className={``}>
            <h1 className={`font-semibold text-xl`}>Ankit Dalei</h1>
            <p className={`text-gray-400 text-wrap`}>ankitdalei123@gmail.com</p>
        </div>
        {/* <div className={``}> */}
            {/* <Link to={``}>Logout</Link>
        </div> */}
      </div>
    </>
  )
}

export default Adminprofile
