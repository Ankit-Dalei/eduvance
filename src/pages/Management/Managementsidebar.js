import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faBook,faChalkboardUser,faCodeBranch,faPersonChalkboard,faPersonPraying, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'

const Managementsidebar = () => {
  const count = useSelector((state) => state.sider.value)
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <div className={`lg:h-[100%] lg:w-[100%] lg:flex lg:justify-center lg:items-center lg:flex-col`}>
        <div className={`lg:h-[100%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col`}>
          <div className={`lg:h-[12%] lg:w-[100%] lg:flex lg:justify-center lg:items-center`}>
            {count?
          <div className={`lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-full lg:w-[80%]`}>
          <div className={`lg:w-[30%] lg:flex lg:flex-end lg:justify-center lg:items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[40px] rounded-full '/>
          </div>
          <div className={`lg:w-[70%]`}>
            <h1 className={`"lg:font-semibold lg:text-lg lg:text-black lg:font-serif`}>Jony Bhau</h1>
          </div>
          </div>:<div className={`lg:w-[100%] lg:flex lg:flex-end lg:justify-center lg:items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[40px] rounded-full '/>
          </div>
          }
          </div>
          <div className={`lg:h-[70%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:font-thin`}>
          {count?<ul className='lg:h-[95%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col space-y-5'>
            <Link to={``} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-red-500 rounded-xl lg:text-xl ${isActive('/management') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faHouse} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold`}>Home</li></div></Link>
            <Link to={`School`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-red-500 rounded-xl lg:text-xl ${isActive('/management/School') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold`}>School</li></div></Link>
            <Link to={`Branch`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-red-500 rounded-xl lg:text-xl ${isActive('/management/Branch') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faCodeBranch} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold`}>Branch</li></div></Link>
            <Link to={`Course`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-red-500 rounded-xl lg:text-xl ${isActive('/management/Course') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faBook} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold`}>Course</li></div></Link>
            <Link to={`Teacher`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-red-500 rounded-xl lg:text-xl ${isActive('/management/Teacher') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold`}>Teacher</li></div></Link>
            <Link to={`Student`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-red-500 rounded-xl lg:text-xl ${isActive('/management/Student') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonPraying} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold`}>Student</li></div></Link>
            <Link to={`Section`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-red-500 rounded-xl lg:text-xl ${isActive('/management/Section') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faChalkboardUser} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold`}>Section</li></div></Link>
          </ul>:
          <ul className='lg:h-[95%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col space-y-5'>
          <Link to={``} title={`home`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-red-500 ${isActive('/management') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><FontAwesomeIcon icon={faHouse} size="xs"/></Link>
          <Link to={`School`} title={`School`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-red-500 ${isActive('/management/School') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></Link>
          <Link to={`Branch`} title={`Branch`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-red-500 ${isActive('/management/Branch') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><FontAwesomeIcon icon={faCodeBranch} size="xs"/></Link>
          <Link to={`Course`} title={`Course`} className={`lg:h-[30px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-red-500 ${isActive('/management/Course') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><FontAwesomeIcon icon={faBook} size="xs"/></Link>
          <Link to={`Teacher`} title={`Teacher`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-red-500 ${isActive('/management/Teacher') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></Link>
          <Link to={`Student`} title={`Student`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-red-500 ${isActive('/management/Student') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><FontAwesomeIcon icon={faPersonPraying} size="xs"/></Link>
          <Link to={`Section`} title={`Section`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-red-500 ${isActive('/management/Section') ? 'bg-slate-300 text-black' : 'lg:text-gray-500'}`}><FontAwesomeIcon icon={faChalkboardUser} size="xs"/></Link>
        </ul>
          }
          </div>
          <div className={`lg:h-[17.7%] lg:w-[100%] lg:flex lg:justify-center lg:items-center`}>
          <button className={`${count? 'lg:bg-slate-300 lg:h-[40px] lg:w-[160px] lg:rounded-lg lg:text-lg font-mono hover:bg-slate-800 hover:text-slate-50' :'lg:h-[35px] lg:w-[35px] rounded-lg lg:text-gray-500 hover:bg-slate-300 hover:text-red-500 lg:text-xl'}`}>{count?'Logout':<FontAwesomeIcon icon={faRightFromBracket}/>}</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Managementsidebar
