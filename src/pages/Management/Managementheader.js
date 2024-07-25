import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faPlus,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { changestate } from '../../Redux/sidebar';
import { Link } from 'react-router-dom';
import { formoff } from '../../Redux/formon';


const Managementheader = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.sider.value)
  const handelclick=()=>{
    dispatch(changestate())
  }
    return (
        <>
          <div className={`h-full w-full flex justify-center items-center relative`}>
            <div className={`h-full w-full p-2 text-black flex justify-between items-center flex-row relative`}>
              <div className={` md:h-[20px] md:w-[25px] sm:rounded-full sm:flex sm:justify-center sm:items-center hover:border-gray-500 cursor-pointer absolute lg:left-[-18px] sm:border-solid sm:border-2 sm:border-gray-300 hover:sm:text-gray-500 sm:text-gray-300 md:left-[-16px] md:z-[2] sm:h-[15px] sm:w-[18px] sm:text-xs ${count?`z-[0]`:`sm:z-[2] sm:left-[-12px]`}  hover:text-gray-300 text-gray-500 flex justify-center items-center text-xl w-[15%]`} onClick={handelclick}>
                {count?<FontAwesomeIcon icon={faChevronRight}  />:<FontAwesomeIcon icon={faChevronLeft} />}
              </div>
              <div className={`h-full w-[15%] sm:hidden `} ></div>
              <h1 className={` p-3 font-semibold text-xl md:text-3xl flex justify-center sm:justify-start`}>Eduvance</h1>
              <div className={`p-3 flex sm:justify-between justify-end items-center sm:gap-4 w-[15%] sm:w-auto`}>
                <Link to={`notification`}><FontAwesomeIcon icon={faBell} size="xl" className={`md:text-red-500 md:hover:text-slate-400 md:cursor-pointer md:font-mono hidden sm:block`}/></Link>
                <Link to={'ChooseRoll'} className={`md:bg-red-500 md:p-2 md:rounded-lg md:text-white md:hover:bg-slate-300 md:hover:text-slate-900 md:cursor-pointer md:ml-6 md:font-mono flex justify-center items-center`}><FontAwesomeIcon icon={faPlus} className='text-xl md:text-sm'/> <p className={`hidden md:block ml-2`}>Create role</p></Link>
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
