import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Managemententrypanal = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <div className={`lg:w-full lg:h-full lg:flex lg:justify-center lg:items-start`}>
        <div className={`lg:w-[95%] lg:h-[90%] lg:flex lg:justify-start lg:items-center lg:flex-col`}>
            <div className={`lg:h-auto lg:w-full lg:text-3xl lg:flex lg:justify-center lg:items-start lg:font-semibold lg:text-gray-400 lg:subpixel-antialiased lg:p-3`}>ADD ROLE</div>
            <div className={`lg:h-[95%] lg:w-full lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-2 mt-3`}>
                <div className={`lg:h-auto lg:w-[80%]`}>
                    <ul className={`lg:flex lg:justify-start lg:items-center bg-slate-400 lg:p-2 lg:h-full lg:space-x-5 lg:font-semibold`}>
                        <Link to={``} className={`lg:p-1 hover:bg-slate-200 hover:text-slate-900 lg:rounded-2xl lg:pl-3 lg:pr-3 ${isActive('/management/ChooseRoll') ? 'bg-slate-500 text-white' : 'lg:text-gray-100'}`}><li>ADD SCHOOL</li></Link>
                        <Link to={`addBranch`} className={`lg:p-1 hover:bg-slate-200 hover:text-slate-900 lg:rounded-2xl lg:pl-3 lg:pr-3 ${isActive('/management/ChooseRoll/addBranch') ? 'bg-slate-500 text-white' : 'lg:text-gray-100'}`}><li>ADD BRANCH</li></Link>
                        <Link to={`addCourse`} className={`lg:p-1 hover:bg-slate-200 hover:text-slate-900 lg:rounded-2xl lg:pl-3 lg:pr-3 ${isActive('/management/ChooseRoll/addCourse') ? 'bg-slate-500 text-white' : 'lg:text-gray-100'}`}><li>ADD COURSE</li></Link>
                        <Link to={`addTeacher`} className={`lg:p-1 hover:bg-slate-200 hover:text-slate-900 lg:rounded-2xl lg:pl-3 lg:pr-3 ${isActive('/management/ChooseRoll/addTeacher') ? 'bg-slate-500 text-white' : 'lg:text-gray-100'}`}><li>ADD TEACHER</li></Link>
                        <Link to={`addStudent`} className={`lg:p-1 hover:bg-slate-200 hover:text-slate-900 lg:rounded-2xl lg:pl-3 lg:pr-3 ${isActive('/management/ChooseRoll/addStudent') ? 'bg-slate-500 text-white' : 'lg:text-gray-100'}`}><li>ADD STUDENT</li></Link>
                    </ul>
                </div>
                <div className={`lg:h-[95%] lg:w-[80%] lg:flex lg:justify-center lg:items-center`}>
                    <Outlet/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Managemententrypanal
