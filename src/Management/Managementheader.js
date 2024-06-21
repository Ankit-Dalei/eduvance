import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical,faBell,faPlus } from '@fortawesome/free-solid-svg-icons';

const Managementheader = () => {
    return (
        <>
          <div className={` h-full flex justify-between items-center flex-row w-[95%] overflow-hidden xl:w-[100%] xl:justify-start `}>
            <div className={`h-full w-[20%]  flex justify-start items-center md:w-[30%] xl:w-[2%] `}><FontAwesomeIcon icon={faEllipsisVertical} size="xl" className={`text-white`}/></div>
            <h1 className={`h-2/3 w-[50%]  text-2xl flex justify-center items-center text-white md:w-[40%] xl:w-[63%] xl:justify-start `}>Eduvance</h1>
            <div className={`h-full w-[20%] flex justify-between items-center flex-row md:w-[30%] xl:w-[25%] xl:ml-[7%] `}>
            <FontAwesomeIcon icon={faBell} size="xl" className={`text-white`}/>
            <div className={`hidden md:block md:bg-slate-200 md:p-2 rounded-lg`}><FontAwesomeIcon icon={faPlus} size="xl" className={`text-black`}/> Create role</div>
            <div className={`h-[30px] w-[30px] bg-slate-50 rounded-[50%] md:h-[40px] md:w-[40px]`}>
              <img src='' alt=''/>
            </div>
            </div>
          </div>
        </>
      )
}

export default Managementheader
