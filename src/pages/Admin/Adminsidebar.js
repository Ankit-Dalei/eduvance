import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faBook,faChalkboardUser,faCodeBranch,faPersonChalkboard, faBell, faPlus, faHouse, faRightFromBracket, faUserTie, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { changestate } from '../../Redux/sidebar';
import { useSelector, useDispatch } from 'react-redux'

const Adminsidebar = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.sider.value)
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const handelclick=()=>{
    dispatch(changestate())
  }
  return (
    <>
      <div className={`h-[100%] w-[100%] flex justify-center items-center flex-col `}>
        <div className={`h-[100%] w-[100%] flex justify-start items-center flex-col `}>
          <div className={`lg:h-[12%] w-[100%] flex justify-center items-center h-[8%] relative`}>
            <p>{count?
            <div className={`flex justify-center items-center gap-1 font-serif font-semibold lg:text-2xl text-gray-300 text-lg`}>ADMIN <div className={`text-green-400`}>DASH</div>
            <div className={`absolute right-0 hover:text-gray-300 text-gray-500 text-xl md:hidden`} onClick={handelclick}>
                {count?<FontAwesomeIcon icon={faChevronLeft}  />:<FontAwesomeIcon icon={faChevronRight} />}
            </div>
            </div>
          :<div className={`sm:w-[100%] sm:flex sm:flex-end sm:justify-center sm:items-end md:text-2xl sm:text-xl`}>
            <div className={`sm:border-2  md:h-[45px] md:w-[45px] sm:rounded-full sm:flex sm:justify-center sm:items-center  sm:h-[40px] sm:w-[40px]`}>
              <FontAwesomeIcon icon={faUserTie} className={`text-gray-300`}/>
            </div>
          </div>
          }</p>
          </div>
          <div className={`h-[70%] w-[100%] flex justify-center items-center font-thin`}>
          {count?<ul className='h-[95%] w-[100%] flex justify-start items-center flex-col sm:space-y-5 space-y-2'>
            <Link to={``} className={`h-[35px] w-[80%] flex justify-center items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl  sm:w-[85%] sm:text-sm ${isActive('/admin') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faHouse} size="xs"/></div> <div className={`w-[70%]`}><li className={`sm:text-sm font-semibold font-serif`}>Home</li></div></Link>
            <Link to={`University`} className={`h-[35px] w-[80%] flex justify-center items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl  sm:w-[85%] sm:text-sm ${isActive('/admin/University') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></div> <div className={`w-[70%]`}><li className={`sm:text-sm font-semibold font-serif`}>University</li></div></Link>
            <Link to={`Campus`} className={`h-[35px] w-[80%] flex justify-center items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl  sm:w-[85%] sm:text-sm ${isActive('/admin/Campus') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faBook} size="xs"/></div> <div className={`w-[70%]`}><li className={`sm:text-sm font-semibold font-serif`}>Campus</li></div></Link>
            <Link to={`Management`} className={`h-[35px] w-[80%] flex justify-center items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl  sm:w-[85%] sm:text-sm ${isActive('/admin/Management') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></div> <div className={`w-[70%]`}><li className={`sm:text-sm font-semibold font-serif`}>Management</li></div></Link>
            <Link to={``} className={`h-[35px] w-[80%] flex justify-center items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl  sm:w-[85%] sm:text-sm sm:hidden ${isActive('') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPlus} size="xs"/></div> <div className={`w-[70%]`}><li className={`sm:text-sm font-semibold font-serif`}>Add Role</li></div></Link>
            <Link to={``} className={`h-[35px] w-[80%] flex justify-center items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl  sm:w-[85%] sm:text-sm sm:hidden ${isActive('') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faUserTie} size="xs"/></div> <div className={`w-[70%]`}><li className={`sm:text-sm font-semibold font-serif`}>Profile</li></div></Link>
            <Link to={``} className={`h-[35px] w-[80%] flex justify-center items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl  sm:w-[85%] sm:text-sm ${isActive('') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faRightFromBracket} size="xs"/></div> <div className={`w-[70%]`}><li className={`sm:text-sm font-semibold font-serif`}>Logout</li></div></Link>
          </ul>:
          <ul className='sm:h-[95%] sm:w-[100%] sm:flex sm:justify-start sm:items-center sm:flex-col space-y-5 md:space-y-3 sm:space-y-2 hidden'>
          <Link to={``} title={``} className={`sm:h-[35px] sm:w-[35px] sm:flex sm:justify-center sm:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400  sm:text-sm  ${isActive('/admin') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><FontAwesomeIcon icon={faHouse} size="xs"/></Link>
          <Link to={`University`} title={`University`} className={`sm:h-[35px] sm:w-[35px] sm:flex sm:justify-center sm:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400  sm:text-sm ${isActive('/admin/University') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></Link>
          <Link to={`Campus`} title={`Campus`} className={`sm:h-[35px] sm:w-[35px] sm:flex sm:justify-center sm:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400  sm:text-sm ${isActive('/admin/Campus') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><FontAwesomeIcon icon={faBook} size="xs"/></Link>
          <Link to={`Management`} title={`Management`} className={`sm:h-[35px] sm:w-[35px] sm:flex sm:justify-center sm:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400  sm:text-sm ${isActive('/admin/Management') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></Link>
          <Link to={``} title={``} className={`sm:h-[35px] sm:w-[35px] sm:flex sm:justify-center sm:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400  sm:text-sm ${isActive('') ? 'bg-slate-300 text-black' : 'text-gray-400'}`}><FontAwesomeIcon icon={faRightFromBracket} size="xs"/></Link>
        </ul>
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Adminsidebar