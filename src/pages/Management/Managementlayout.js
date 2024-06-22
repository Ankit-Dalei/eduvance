import React from 'react'
import { Outlet } from 'react-router-dom';
import Managementsidebar from './Managementsidebar';
import Managementheader from './Managementheader';
import { useSelector } from 'react-redux'


const Managementlayout = () => {
  const count = useSelector((state) => state.sider.value)
    document.title=`Admin - Eduvance`
    return (
      <>
        <div className={`bg-slate-900 lg:h-screen lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`}>
          <div className={`bg-gray-800 lg:h-full ${count? 'lg:w-[5%]' : 'lg:w-[15%]'} `}>
            <Managementsidebar/>
          </div>
          <div className={`bg-slate-500 lg:flex lg:justify-between lg:items-center lg:flex-col lg:h-full ${count? 'lg:w-[95%]' : 'lg:w-[85%]'}`}>
            <div className={`bg-gray-100 lg:h-[12%] lg:w-full`}>
              <Managementheader/>
            </div>
            <div className={`bg-slate-100 lg:h-[87.9%] lg:w-full`}>
              <Outlet/>
            </div>
          </div>
        </div>
      </>
    );
}

export default Managementlayout
