import React from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Adminsidebar from './Adminsidebar';
import Adminheader from './Adminheader';

const Adminlayout = () => {
    const count = useSelector((state) => state.sider.value)
    document.title=`Admin - Eduvance`
  return (
    <>
        <div className={`bg-slate-900 lg:h-screen lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`}>
          <div className={`bg-gray-100 lg:h-full ${count? 'lg:w-[18%]' : 'lg:w-[8%]'} `}>
            <Adminsidebar/>
          </div>
          <div className={`bg-gray-200 lg:flex lg:justify-between lg:items-center lg:flex-col lg:h-full ${count? 'lg:w-[82%]' : 'lg:w-[92%]'}`}>
            <div className={`lg:h-[12%] lg:w-full`}>
              <Adminheader/>
            </div>
            <div className={`lg:h-[87.9%] lg:w-full`}>
              <Outlet/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Adminlayout
