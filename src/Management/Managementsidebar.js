import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faBook,faChalkboardUser,faCodeBranch,faPersonChalkboard,faPersonPraying } from '@fortawesome/free-solid-svg-icons';

const Managementsidebar = () => {
  return (
    <>
      <div className={`h-full`}>
        <div className={`h-[20%] shadow-sm shadow-white`}>
          <div className={`flex flex-row justify-center items-center h-full w-full`}>
          <div className={`w-[30%] flex flex-end justify-center items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[70px] rounded-full '/>
          </div>
          <div className={`w-[70%]`}>
            <h1 className={`"font-semibold text-xl text-white`}>Ankit Dalei</h1>
            <p className='text-sm text-white'>Welcome to your Workspace</p>
          </div>
          </div>
        </div>
        <div className={`h-[60%] flex justify-center items-center`}>
          <ul className=' h-[90%] w-[100%] flex flex-col  items-center gap-[5px]'>
            <Link to={``} className={` w-[85%] flex justify-start items-center text-2xl`}><div className={`w-[25%]`}><FontAwesomeIcon icon={faGraduationCap} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>School</li></div></Link>
            <Link to={``} className={` w-[85%] flex justify-start items-center text-2xl`}><div className={`w-[25%]`}><FontAwesomeIcon icon={faCodeBranch} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Branch</li></div></Link>
            <Link to={``} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[25%]`}><FontAwesomeIcon icon={faBook} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Course</li></div></Link>
            <Link to={``} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[25%]`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Teacher</li></div></Link>
            <Link to={``} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[25%]`}><FontAwesomeIcon icon={faPersonPraying} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Student</li></div></Link>
            <Link to={``} className={` w-[85%] flex justify-start items-center text-2xl `}><div className={`w-[25%]`}><FontAwesomeIcon icon={faChalkboardUser} size="xs" className={`text-white `}/></div> <div className={`w-[70%]`}><li className={`text-white`}>Section</li></div></Link>
          </ul>
        </div>
        <div className={`h-[15%] flex justify-center`}>
          <button className={`bg-slate-100 h-[50%] w-[70%] rounded-lg font-sans`}>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Managementsidebar
