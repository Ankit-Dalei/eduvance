import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

const Adminheader = () => {
  return (
    <>
      <div className={`lg:h-full lg:w-full lg:p-2 lg:text-black lg:flex lg:justify-between lg:items-center lg:flex-row`}>
        <div className={`lg:p-3 lg:font-semibold lg:text-3xl lg:flex lg:justify-start`}>Eduvance</div>
        <div className={`lg:p-3 lg:flex lg:justify-between lg:items-center gap-4`}>
          <div className={`bg-green-200 lg:text-green-400 lg:p-2 lg:w-9 lg:h-9 lg:flex lg:justify-center lg:items-center lg:border-2 lg:rounded-lg lg:font-light lg:text-xl hover:lg:bg-green-300 hover:lg:text-green-100 cursor-pointer`}><FontAwesomeIcon icon={faPlus} /></div>
          <div className={`bg-green-200 lg:text-green-400 lg:p-2 lg:w-9 lg:h-9 lg:flex lg:justify-center lg:items-center lg:border-2 lg:rounded-lg lg:font-light lg:text-xl hover:lg:bg-green-300 hover:lg:text-green-100 cursor-pointer`}><FontAwesomeIcon icon={faBell} /></div>
          <div className={`lg:flex lg:justify-center lg:items-center lg:flex-row gap-4 lg:h-[50px] lg:w-[190px] lg:font-semibold`} style={{boxShadow: '-1px 0px 0px gray'}}>
            <div className={`lg:flex lg:justify-around lg:items-center`}><p className={`lg:text-gray-400`}>Hello,</p>Ankit</div>
            <div className={`bg-slate-400 lg:h-[45px] lg:w-[45px] lg:rounded-full cursor-pointer`}>
              <img src='' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adminheader
