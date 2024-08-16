import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faBook,faChalkboardUser,faCodeBranch,faPersonChalkboard,faPersonPraying, faHouse, faRightFromBracket, faUserTie, faChevronRight, faChevronLeft  } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../../Redux/formSlice';
import toast from 'react-hot-toast';

const Managementsidebar = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.forms.sidebar)
  const location = useLocation();
  const navigate=useNavigate();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const handelclick=()=>{
    dispatch(toggleSidebar())
  }
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
    toast.success('Logout successfully');
  };
  
  return (
    <>
      <div className={`h-[100%] w-[100%] flex justify-center items-center flex-col`}>
        <div className={`h-[100%] w-[100%] flex justify-start items-center flex-col`}>
          <div className={`h-[12%] w-[100%] flex justify-center items-center relative`}>
            {count?
          <div className={`flex flex-row lg:justify-center lg:items-center lg:h-full w-[80%]`}>
          <div className={`w-[30%] flex flex-end justify-center items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[40px] rounded-full '/>
          </div>
          <div className={`w-[70%]`}>
            <h1 className={`"font-semibold text-lg text-black font-serif`}>Jony Bhau</h1>
          </div>
          <div className={`absolute right-0 hover:text-gray-300 text-gray-500 text-xl md:hidden`} onClick={handelclick}>
                {count?<FontAwesomeIcon icon={faChevronLeft}  />:<FontAwesomeIcon icon={faChevronRight} />}
          </div>
          </div>:<div className={`w-[100%] flex flex-end justify-center items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[40px] rounded-full '/>
          </div>
          }
          </div>
          <div className={`h-[70%] w-[100%] flex justify-start items-center font-thin`}>
          {count?<ul className='h-[95%] w-[100%] flex justify-start items-center flex-col space-y-5'>
            <Link to={``} className={`h-[35px] w-[70%] flex justify-center items-center hover:bg-slate-300 hover:text-red-500 rounded-xl text-xl ${isActive('/management') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faHouse} size="xs"/></div> <div className={`w-[70%]`}><li className={`text-sm font-semibold`}>Home</li></div></Link>
            <Link to={`School`} className={`h-[35px] w-[70%] flex justify-center items-center hover:bg-slate-300 hover:text-red-500 rounded-xl text-xl ${isActive('/management/School') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></div> <div className={`w-[70%]`}><li className={`text-sm font-semibold`}>School</li></div></Link>
            <Link to={`Branch`} className={`h-[35px] w-[70%] flex justify-center items-center hover:bg-slate-300 hover:text-red-500 rounded-xl text-xl ${isActive('/management/Branch') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faCodeBranch} size="xs"/></div> <div className={`w-[70%]`}><li className={`text-sm font-semibold`}>Branch</li></div></Link>
            <Link to={`Course`} className={`h-[35px] w-[70%] flex justify-center items-center hover:bg-slate-300 hover:text-red-500 rounded-xl text-xl ${isActive('/management/Course') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faBook} size="xs"/></div> <div className={`w-[70%]`}><li className={`text-sm font-semibold`}>Course</li></div></Link>
            <Link to={`Teacher`} className={`h-[35px] w-[70%] flex justify-center items-center hover:bg-slate-300 hover:text-red-500 rounded-xl text-xl ${isActive('/management/Teacher') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></div> <div className={`w-[70%]`}><li className={`text-sm font-semibold`}>Teacher</li></div></Link>
            <Link to={`Student`} className={`h-[35px] w-[70%] flex justify-center items-center hover:bg-slate-300 hover:text-red-500 rounded-xl text-xl ${isActive('/management/Student') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonPraying} size="xs"/></div> <div className={`w-[70%]`}><li className={`text-sm font-semibold`}>Student</li></div></Link>
            <Link to={`Section`} className={`h-[35px] w-[70%] flex justify-center items-center hover:bg-slate-300 hover:text-red-500 rounded-xl text-xl ${isActive('/management/Section') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faChalkboardUser} size="xs"/></div> <div className={`w-[70%]`}><li className={`text-sm font-semibold`}>Section</li></div></Link>
          </ul>:
          <ul className='h-[95%] w-[100%] flex justify-start items-center flex-col space-y-5'>
          <Link to={``} title={`home`} className={`h-[35px] w-[35px] flex justify-center items-center hover:bg-slate-300 rounded-lg text-xl hover:text-red-500 ${isActive('/management') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><FontAwesomeIcon icon={faHouse} size="xs"/></Link>
          <Link to={`School`} title={`School`} className={`h-[35px] w-[35px] flex justify-center items-center hover:bg-slate-300 rounded-lg text-xl hover:text-red-500 ${isActive('/management/School') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></Link>
          <Link to={`Branch`} title={`Branch`} className={`h-[35px] w-[35px] flex justify-center items-center hover:bg-slate-300 rounded-lg text-xl hover:text-red-500 ${isActive('/management/Branch') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><FontAwesomeIcon icon={faCodeBranch} size="xs"/></Link>
          <Link to={`Course`} title={`Course`} className={`h-[30px] w-[35px] flex justify-center items-center hover:bg-slate-300 rounded-lg text-xl hover:text-red-500 ${isActive('/management/Course') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><FontAwesomeIcon icon={faBook} size="xs"/></Link>
          <Link to={`Teacher`} title={`Teacher`} className={`h-[35px] w-[35px] flex justify-center items-center hover:bg-slate-300 rounded-lg text-xl hover:text-red-500 ${isActive('/management/Teacher') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></Link>
          <Link to={`Student`} title={`Student`} className={`h-[35px] w-[35px] flex justify-center items-center hover:bg-slate-300 rounded-lg text-xl hover:text-red-500 ${isActive('/management/Student') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><FontAwesomeIcon icon={faPersonPraying} size="xs"/></Link>
          <Link to={`Section`} title={`Section`} className={`h-[35px] w-[35px] flex justify-center items-center hover:bg-slate-300 rounded-lg text-xl hover:text-red-500 ${isActive('/management/Section') ? 'bg-slate-300 text-black' : 'text-gray-500'}`}><FontAwesomeIcon icon={faChalkboardUser} size="xs"/></Link>
        </ul>
          }
          </div>
          <div className={`h-[17.7%] w-[100%] flex justify-center items-center`}>
          <button onClick={handleLogout}  className={`${count? 'bg-slate-300 h-[40px] w-[160px] rounded-lg text-lg font-mono hover:bg-slate-800 hover:text-slate-50' :'h-[35px] w-[35px] rounded-lg text-gray-500 hover:bg-slate-300 hover:text-red-500 text-xl'}`}>{count?'Logout':<FontAwesomeIcon icon={faRightFromBracket}/>}</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Managementsidebar
