import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faBook,faChalkboardUser,faCodeBranch,faPersonChalkboard,faPersonPraying, faHouse, faRightFromBracket, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'

const Adminsidebar = () => {
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
            <p>{count?
            <div className={`lg:flex lg:justify-center lg:items-center gap-1 lg:font-serif lg:font-semibold lg:text-2xl lg:text-gray-300`}>ADMIN <div className={`lg:text-green-400`}>DASH</div></div>
          :<div className={`lg:w-[100%] lg:flex lg:flex-end lg:justify-center lg:items-end lg:text-2xl`}>
            <div className={`lg:border-2  lg:h-[45px] lg:w-[45px] lg:rounded-full lg:flex lg:justify-center lg:items-center`}>
              <FontAwesomeIcon icon={faUserTie} className={`lg:text-gray-300`}/>
            </div>
          </div>
          }</p>
          </div>
          <div className={`lg:h-[70%] lg:w-[100%] lg:flex lg:justify-center lg:items-center lg:font-thin`}>
          {count?<ul className='lg:h-[95%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col space-y-5'>
            <Link to={``} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl ${isActive('/admin') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faHouse} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold lg:font-serif`}>Home</li></div></Link>
            <Link to={`University`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl ${isActive('/admin/University') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold lg:font-serif`}>University</li></div></Link>
            <Link to={`Campus`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl ${isActive('/admin/Campus') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faBook} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold lg:font-serif`}>Campus</li></div></Link>
            <Link to={`Management`} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl ${isActive('/admin/Management') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold lg:font-serif`}>Management</li></div></Link>
            <Link to={``} className={`lg:h-[35px] lg:w-[70%] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 hover:text-green-400 rounded-xl lg:text-xl ${isActive('') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faRightFromBracket} size="xs"/></div> <div className={`w-[70%]`}><li className={`lg:text-sm lg:font-semibold lg:font-serif`}>Logout</li></div></Link>
          </ul>:
          <ul className='lg:h-[95%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col space-y-5'>
          <Link to={``} title={``} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400 ${isActive('/admin') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><FontAwesomeIcon icon={faHouse} size="xs"/></Link>
          <Link to={`University`} title={`University`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400 ${isActive('/admin/University') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></Link>
          <Link to={`Campus`} title={`Campus`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400 ${isActive('/admin/Campus') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><FontAwesomeIcon icon={faBook} size="xs"/></Link>
          <Link to={`Management`} title={`Management`} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400 ${isActive('/admin/Management') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></Link>
          <Link to={``} title={``} className={`lg:h-[35px] lg:w-[35px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-lg lg:text-xl hover:text-green-400 ${isActive('') ? 'bg-slate-300 text-black' : 'lg:text-gray-400'}`}><FontAwesomeIcon icon={faRightFromBracket} size="xs"/></Link>
        </ul>
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Adminsidebar
