import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { changestate } from '../../Redux/sidebar';
import { Link } from 'react-router-dom';

const Adminheader = () => {
  const dispatch = useDispatch()
  const [isState,SetisState]=useState(true);
  const handelclick=()=>{
    dispatch(changestate())
    if (isState===true) {
      SetisState(false)
    } else {
      SetisState(true)
    }
  }
  return (
    <>
      <div className={`lg:h-full lg:w-full lg:p-2 lg:text-black lg:flex lg:justify-between lg:items-center lg:flex-row lg:relative`}>
        <div className={` lg:h-[20px] lg:w-[25px] lg:rounded-full lg:flex lg:justify-center lg:items-center hover:border-gray-500 cursor-pointer lg:absolute lg:left-[-18px] lg:border-solid lg:border-2 lg:border-gray-300 lg:hover:text-gray-500 lg:text-gray-300`} onClick={handelclick}>
                {isState?<FontAwesomeIcon icon={faChevronRight}  />:<FontAwesomeIcon icon={faChevronLeft} />}
        </div>
        <div className={`lg:p-3 lg:font-semibold lg:text-3xl lg:flex lg:justify-start`}>Eduvance</div>
        <div className={`lg:p-3 lg:flex lg:justify-between lg:items-center gap-4`}>
          <div className={`bg-green-200 lg:text-green-400 lg:p-2 lg:w-9 lg:h-9 lg:flex lg:justify-center lg:items-center lg:border-2 lg:rounded-lg lg:font-light lg:text-xl hover:lg:bg-green-300 hover:lg:text-green-100 cursor-pointer`}><FontAwesomeIcon icon={faPlus} /></div>
          <Link to='Notification'><div className={`bg-green-200 lg:text-green-400 lg:p-2 lg:w-9 lg:h-9 lg:flex lg:justify-center lg:items-center lg:border-2 lg:rounded-lg lg:font-light lg:text-xl hover:lg:bg-green-300 hover:lg:text-green-100 cursor-pointer`}><FontAwesomeIcon icon={faBell} /></div></Link>
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
