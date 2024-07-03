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
        <div className={`bg-slate-900 sm:h-screen sm:w-full flex justify-center items-center flex-row relative h-screen w-full`}>
          <div className={`bg-gray-100 h-full ${count? 'lg:w-[18%]' : 'lg:w-[8%]'} ${count? 'md:w-[25%]' : 'md:w-[10%]'} ${count? 'sm:w-[25%]' : 'sm:w-[10%]'} md:relative absolute left-0 z-[1]  ${count? 'w-[50%]' : 'w-[0%]'} `}>
            <Adminsidebar/>
          </div>
          <div className={`bg-gray-200 flex justify-between items-center flex-col h-full  ${count? 'lg:w-[82%] lg:ml-0' : 'lg:w-[92%] lg:ml-0'}  ${count? 'md:w-[75%] md:ml-0' : 'md:w-[90%] md:ml-0'} ${count? 'sm:w-[100%] sm:ml-[0%]' : 'sm:w-[90%] sm:ml-[10%]'}  ${count? 'w-[100%] ml-0' : 'w-[100%] ml-[0%]'} `}>
            <div className={`lg:h-[12%] w-full h-[8%]`}>
              <Adminheader/>
            </div>
            <div className={`lg:h-[87.9%] lg:w-full md:h-[90.5%] md:w-[95%] sm:h-[90.5%] sm:w-[95%]`}>
              {/* <Outlet/> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default Adminlayout
