import React from 'react'
import { Outlet } from 'react-router-dom';
import Managementsidebar from './Managementsidebar';
import Managementheader from './Managementheader';

const Managementlayout = () => {
    document.title=`Admin - Eduvance`
    return (
      <>
        <div className={`h-auto bg-slate-900 relative md:h-screen md:w-screen xl:flex xl:justify-center xl:items-center xl:flex-row `}>
          <div className={`h-screen hidden bg-slate-900 fixed top-0 left-0 w-10/12 md:block md:w-[30%] xl:block xl:relative xl:w-[20%]`}>
            <Managementsidebar/>
          </div>
          <div className={`h-auto w-1/1 xl:w-[80%] xl:h-[100vh] `}>
            <div className={`h-[10vh] bg-slate-900 w-full flex justify-center items-center md:h[8vh] xl:h-[15vh] `}>
              <Managementheader/>
            </div>
            <div className={`h-auto bg-slate-100 xl:h-[85vh] `}>
              <Outlet/>
            </div>
          </div>
        </div>
      </>
    );
}

export default Managementlayout
