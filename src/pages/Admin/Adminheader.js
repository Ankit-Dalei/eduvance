import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux'
import { toggleSidebar } from '../../Redux/formSlice';
import { Link } from 'react-router-dom';
import Adminprofile from './Adminprofile';
import Adminformchoice from './AdminForm/Adminformchoice';
import { toggleFormon } from '../../Redux/formSlice';
import { getSessionStorageItem } from '../../Service/SessionStorage';

const Adminheader = () => {
  const [profileDisplay,SetprofileDisplay]=useState(true)
  const count = useSelector((state) => state.forms.sidebar)
  const formDisplay = useSelector((state) => state.forms.formon)
  
  const dispatch = useDispatch()
  const handelclick=()=>{
    dispatch(toggleSidebar())
  }
  const handelprofileclick=()=>{
    if (profileDisplay===true) {
      SetprofileDisplay(false)
    } else {
      SetprofileDisplay(true)
    }
  }
  const handelFormclick=()=>{
    dispatch(toggleFormon())
  }
  const data=getSessionStorageItem('user');

  
  return (
    <>
      <div className={`h-full w-full p-2 text-black flex justify-between items-center flex-row relative `}>
        <div className={` md:h-[20px] md:w-[25px] sm:rounded-full sm:flex sm:justify-center sm:items-center hover:border-gray-500 cursor-pointer absolute lg:left-[-18px] sm:border-solid sm:border-2 sm:border-gray-300 hover:sm:text-gray-500 sm:text-gray-300 md:left-[-16px] md:z-[2] sm:h-[15px] sm:w-[18px] sm:text-xs ${count?`z-[0]`:`sm:z-[2] sm:left-[-12px]`}  hover:text-gray-300 text-gray-500 flex justify-center items-center text-xl w-[15%]`} onClick={handelclick}>
                {count?<FontAwesomeIcon icon={faChevronLeft}  />:<FontAwesomeIcon icon={faChevronRight} />}
        </div>
        <div className={`h-full w-[15%] sm:hidden `} ></div>
        <div className={`p-3 font-semibold text-3xl flex justify-center sm:justify-start`}>Eduvance</div>
        <div className={`p-3 flex sm:justify-between justify-end items-center sm:gap-4 w-[15%] sm:w-auto`}>
          <div className={`bg-green-200 text-green-400 sm:p-2 sm:w-9 sm:h-9 sm:flex sm:justify-center sm:items-center sm:border-2 sm:rounded-lg sm:font-light sm:text-xl hover:bg-green-300 hover:text-green-100 cursor-pointer hidden`} onClick={handelFormclick}><FontAwesomeIcon icon={faPlus} /></div>
          <Link to='Notification'><div className={`bg-green-200 text-green-400 p-2 w-9 h-9 flex justify-center items-center border-2 rounded-lg font-light text-xl hover:bg-green-300 hover:text-green-100 cursor-pointer`}><FontAwesomeIcon icon={faBell} /></div></Link>
          <div className={`sm:flex sm:justify-center justify-end items-center sm:flex-row sm:gap-4 md:h-[50px] sm:h-[35px] md:w-auto sm:w-auto sm:font-semibold hidden`} style={{boxShadow: '-1px 0px 0px gray'}}>
            <div className={`sm:flex sm:justify-around sm:items-center hidden`}><p className={`text-gray-400`}>Hello,</p>{data.user.userName}</div>
            <div className={`bg-slate-400 md:h-[45px] md:w-[45px] rounded-full cursor-pointer sm:h-[30px] sm:w-[30px] h-[30px] w-[30px]`} onMouseEnter={handelprofileclick} onMouseLeave={handelprofileclick}>
              <img src='' alt=''/>
            </div>
          </div>
        </div>
      </div>
      {profileDisplay?'':<Adminprofile name={data.user.userName} email={data.user.userEmail}/>}
      {formDisplay?<Adminformchoice/>:''}
    </>
  )
}

export default Adminheader