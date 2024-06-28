import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faPlus,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { changestate } from '../../Redux/sidebar';
import { Link } from 'react-router-dom';


const Managementheader = () => {
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
          <div className={` lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:relative`}>
            <div className={`lg:h-full lg:w-[95%] lg:flex lg:justify-between lg:items-center lg:flex-row `}>
              <div className={` lg:h-[20px] lg:w-[25px] lg:rounded-full lg:flex lg:justify-center lg:items-center hover:border-gray-500 cursor-pointer lg:absolute lg:left-[-18px] lg:border-solid lg:border-2 lg:border-gray-300 lg:hover:text-gray-500 lg:text-gray-300`} onClick={handelclick}>
                {isState?<FontAwesomeIcon icon={faChevronRight}  />:<FontAwesomeIcon icon={faChevronLeft} />}
              </div>
              <h1 className={` lg:h-full lg:w-[76%] lg:flex lg:justify-start lg:items-center lg:text-4xl lg:font-sans lg:font-bold`}>Eduvance</h1>
              <div className={` lg:h-full lg:w-[20%] lg:flex lg:justify-end lg:items-center`}>
                <Link to={`notification`}><FontAwesomeIcon icon={faBell} size="xl" className={`text-black hover:text-slate-400 cursor-pointer `}/></Link>
                <Link to={'ChooseRoll'} className={`lg:bg-gray-800 lg:p-2 lg:rounded-lg lg:text-white hover:bg-slate-300 hover:text-slate-900 cursor-pointer lg:ml-6 lg:font-serif`}><FontAwesomeIcon icon={faPlus} size="sm"/> Create role</Link>
                {/* <div className={`lg:h-[40px] lg:w-[40px] lg:rounded-[50%]`}>
                  <img src='./Images/management.png' alt=''className='rounded-[50%] cursor-pointer'/>
                </div> */}
              </div>
            </div>
          </div>
        </>
    )
}

export default Managementheader
