import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faBook,faChalkboardUser,faCodeBranch,faPersonChalkboard,faPersonPraying, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'

const Managementsidebar = () => {
  const count = useSelector((state) => state.sider.value)
  return (
    <>
      <div className={`lg:h-[100%] lg:w-[100%] lg:flex lg:justify-center lg:items-center lg:flex-col`}>
        <div className={`lg:h-[100%] lg:w-[100%] bg-slate-900 lg:flex lg:justify-between lg:items-center lg:flex-col`}>
          <div className={`bg-slate-950 lg:h-[12%] lg:w-[100%] lg:flex lg:justify-center lg:items-center`}>
            {count?<div className={`lg:w-[100%] lg:flex lg:flex-end lg:justify-center lg:items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[40px] rounded-full '/>
          </div>:
          <div className={`lg:flex lg:flex-row lg:justify-center lg:items-center lg:h-full lg:w-[80%]`}>
          <div className={`lg:w-[30%] lg:flex lg:flex-end lg:justify-center lg:items-end`}>
            <img src={`./Images/management.png`} alt='' className='h-[40px] rounded-full '/>
          </div>
          <div className={`lg:w-[70%]`}>
            <h1 className={`"lg:font-semibold lg:text-lg lg:text-white`}>Jony Bhau</h1>
          </div>
          </div>
          }
          </div>
          <div className={`bg-slate-950 lg:h-[70%] lg:w-[100%] lg:flex lg:justify-center lg:items-center`}>
          {count?<ul className='lg:h-[95%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col'>
            <Link to={`Home`} className={`lg:h-[30px] lg:w-[30px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-full lg:text-2xl`}><FontAwesomeIcon icon={faHouse} size="xs" className={`text-white `}/></Link>
            <Link to={`School`} className={`lg:h-[30px] lg:w-[30px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-full lg:text-2xl lg:mt-3`}><FontAwesomeIcon icon={faGraduationCap} size="xs" className={`text-white `}/></Link>
            <Link to={`Branch`} className={`lg:h-[30px] lg:w-[30px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-full lg:text-2xl lg:mt-3`}><FontAwesomeIcon icon={faCodeBranch} size="xs" className={`text-white `}/></Link>
            <Link to={`Course`} className={`lg:h-[30px] lg:w-[30px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-full lg:text-2xl lg:mt-3`}><FontAwesomeIcon icon={faBook} size="xs" className={`text-white `}/></Link>
            <Link to={`Teacher`} className={`lg:h-[30px] lg:w-[30px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-full lg:text-2xl lg:mt-3`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs" className={`text-white `}/></Link>
            <Link to={`Student`} className={`lg:h-[30px] lg:w-[30px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-full lg:text-2xl lg:mt-3`}><FontAwesomeIcon icon={faPersonPraying} size="xs" className={`text-white `}/></Link>
            <Link to={`Section`} className={`lg:h-[30px] lg:w-[30px] lg:flex lg:justify-center lg:items-center hover:bg-slate-300 rounded-full lg:text-2xl lg:mt-3`}><FontAwesomeIcon icon={faChalkboardUser} size="xs" className={`text-white `}/></Link>
          </ul>:
          <ul className='lg:h-[95%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col'>
            <Link to={`Home`} className={`lg:h-[30px] lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:text-slate-50 hover:bg-slate-300 hover:text-slate-800 rounded-full lg:text-2xl`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faHouse} size="xs"/></div> <div className={`w-[70%]`}><li>Home</li></div></Link>
            <Link to={`School`} className={`lg:h-[30px] lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:text-slate-50 hover:bg-slate-300 hover:text-slate-800 rounded-full lg:text-2xl lg:mt-3`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faGraduationCap} size="xs"/></div> <div className={`w-[70%]`}><li>School</li></div></Link>
            <Link to={`Branch`} className={`lg:h-[30px] lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:text-slate-50 hover:bg-slate-300 hover:text-slate-800 rounded-full lg:text-2xl lg:mt-3`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faCodeBranch} size="xs"/></div> <div className={`w-[70%]`}><li>Branch</li></div></Link>
            <Link to={`Course`} className={`lg:h-[30px] lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:text-slate-50 hover:bg-slate-300 hover:text-slate-800 rounded-full lg:text-2xl lg:mt-3`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faBook} size="xs"/></div> <div className={`w-[70%]`}><li>Course</li></div></Link>
            <Link to={`Teacher`} className={`lg:h-[30px] lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:text-slate-50 hover:bg-slate-300 hover:text-slate-800 rounded-full lg:text-2xl lg:mt-3`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonChalkboard} size="xs"/></div> <div className={`w-[70%]`}><li>Teacher</li></div></Link>
            <Link to={`Student`} className={`lg:h-[30px] lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:text-slate-50 hover:bg-slate-300 hover:text-slate-800 rounded-full lg:text-2xl lg:mt-3`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faPersonPraying} size="xs"/></div> <div className={`w-[70%]`}><li>Student</li></div></Link>
            <Link to={`Section`} className={`lg:h-[30px] lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:text-slate-50 hover:bg-slate-300 hover:text-slate-800 rounded-full lg:text-2xl lg:mt-3`}><div className={`w-[20%]`}><FontAwesomeIcon icon={faChalkboardUser} size="xs"/></div> <div className={`w-[70%]`}><li>Section</li></div></Link>
          </ul>}
          </div>
          <div className={`bg-slate-950 lg:h-[17.7%] lg:w-[100%] lg:flex lg:justify-center lg:items-center`}>
          <button className={`${count? 'lg:h-[30px] lg:w-[30px] rounded-full lg:text-white hover:bg-slate-300' :'lg:bg-slate-100 lg:h-[40px] lg:w-[160px] lg:rounded-lg text-xl font-mono hover:bg-slate-800 hover:text-slate-50'}`}>{count?<FontAwesomeIcon icon={faRightFromBracket}/>:'Logout'}</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Managementsidebar
