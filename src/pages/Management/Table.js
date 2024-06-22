import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Table = () => {
  return (
    <>
      <div className={` lg:h-[100%] lg:w-[100%] lg:flex lg:justify-center lg:items-center`}>
        <div className={`lg:h-[95%] lg:w-[95%] lg:flex lg:justify-between lg:items-center lg:flex-col`}>
          <div className={`lg:h-[10%] lg:w-[100%] lg:flex lg:justify-between lg:items-center`}>
            <form className={`lg:bg-slate-300 lg:h-[35px] lg:w-[350px] lg:flex lg:justify-between lg:items-center lg:rounded-3xl lg:p-2`}>
              <input type='text' placeholder='Search Here' className={` lg:bg-slate-300 lg:h-[25px] lg:w-[90%] lg:rounded-3xl lg:p-3 lg:border-none lg:outline-slate-300`}/>
              <button className={`lg:flex lg:justify-center lg:items-center lg:w-[10%] lg:outline-none lg:border-none`}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
            <button className={` lg:bg-gray-800 lg:p-1 lg:flex lg:justify-center lg:items-center lg:w-[100px] lg:rounded-3xl lg:text-white hover:bg-slate-300 hover:text-slate-900`}>Export</button>
          </div>
          <div className={`bg-slate-400 lg:h-[70%] lg:w-[100%]`}></div>
          <div className={`lg:h-[15%] lg:w-[100%] lg:flex lg:justify-end lg:items-center`}>
            <div className={`lg:h-[100%] lg:w-[50%] lg:flex lg:justify-end lg:items-center`}>
                <p>1 - 10 of 7800</p>
                <div className={`lg:ml-6`}>
                    <FontAwesomeIcon icon={faAngleLeft} className={` hover:text-slate-300 cursor-pointer lg:text-xl`}/>
                    <FontAwesomeIcon icon={faChevronRight} className={`lg:ml-3  hover:text-slate-300 cursor-pointer lg:text-xl`}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
