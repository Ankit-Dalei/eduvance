import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faBook,faChalkboardUser,faCodeBranch,faPersonChalkboard,faPersonPraying, faHouse } from '@fortawesome/free-solid-svg-icons';

const Managementsidebar = () => {
  return (
    <>
      {/* <div className={`h-full flex justify-between flex-col `}>
        <div className={`h-[20%] shadow-sm shadow-white xl:h-[15%]`}>
          <div className={`flex flex-row justify-center items-center h-full w-full`}>
          <div className={`w-[30%] flex flex-end justify-center items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[70px] rounded-full '/>
          </div>
          <div className={`w-[70%]`}>
            <h1 className={`"font-semibold text-xl text-white`}>Jony Bhau</h1>
            <p className='text-sm text-white'>Welcome to your Workspace</p>
          </div>
          </div>
        </div>
        <div className={`h-[65%] flex justify-center items-center`}>
          <ul className=' h-[90%] w-[100%] flex flex-col justify-center items-center gap-[5px] md:gap-[8px]'>
            <Link to={`Home`} className={` w-[85%] flex justify-start items-center text-2xl`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faHouse} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Home</li></div></Link>
            <Link to={`School`} className={` w-[85%] flex justify-start items-center text-2xl`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faGraduationCap} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>School</li></div></Link>
            <Link to={`Branch`} className={` w-[85%] flex justify-start items-center text-2xl`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faCodeBranch} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Branch</li></div></Link>
            <Link to={`Course`} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[20%]`}><FontAwesomeIcon icon={faBook} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Course</li></div></Link>
            <Link to={`Teacher`} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Teacher</li></div></Link>
            <Link to={`Student`} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonPraying} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Student</li></div></Link>
            <Link to={`Section`} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[20%]`}><FontAwesomeIcon icon={faChalkboardUser} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Section</li></div></Link>
          </ul>
        </div>
        <div className={`h-[15%] flex justify-center items-center xl:items-center`}>
          <button className={`bg-slate-100 h-[50%] w-[70%] rounded-lg font-sans`}>Logout</button> 
        </div>
      </div> */}
    </>
  )
}

export default Managementsidebar
