import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faPlus,faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { changestate } from '../../Redux/sidebar';
import { Link } from 'react-router-dom';

const Managementheader = () => {
  const dispatch = useDispatch()
    return (
        <>
          <div className={` lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
            <div className={`lg:h-full lg:w-[95%] lg:flex lg:justify-between lg:items-center lg:flex-row`}>
              <div className={` lg:h-[35px] lg:w-[35px] lg:rounded-full lg:flex lg:justify-center lg:items-center hover:bg-slate-300 cursor-pointer `} onClick={()=>dispatch(changestate())}><FontAwesomeIcon icon={faBars} size="lg" className={`text-black `} /></div>
              <h1 className={` lg:h-full lg:w-[76%] lg:flex lg:justify-start lg:items-center lg:text-2xl lg:font-sans`}>Eduvance</h1>
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
