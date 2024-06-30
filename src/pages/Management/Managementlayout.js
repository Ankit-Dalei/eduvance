import React from 'react'
import { Outlet } from 'react-router-dom';
import Managementsidebar from './Managementsidebar';
import Managementheader from './Managementheader';
import { useSelector } from 'react-redux'


const Managementlayout = () => {
  const count = useSelector((state) => state.sider.value)
    document.title=`Management - Eduvance`
    return (
      <>
        <div className={`lg:h-screen lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`}>
          <div className={`bg-gray-200 lg:h-full ${count? 'lg:w-[15%]' : 'lg:w-[7%]'} `}>
            <Managementsidebar/>
          </div>
          <div className={`lg:flex lg:justify-between lg:items-center lg:flex-col lg:h-full ${count? 'lg:w-[85%]' : 'lg:w-[93%]'}`}>
            <div className={`lg:h-[12%] lg:w-full`}>
              <Managementheader/>
            </div>
            <div className={`lg:h-[87.9%] lg:w-full`}>
              <Outlet/>
            </div>
          </div>
        </div>
      </>
    );
}

export default Managementlayout