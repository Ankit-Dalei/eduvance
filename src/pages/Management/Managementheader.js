import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faPlus,faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { changestate } from '../../Redux/sidebar';


const Managementheader = () => {
  const dispatch = useDispatch()
    return (
        <>
          <div className={` lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-row`}>
            <div className={` lg:h-full lg:w-[3%] lg:flex lg:justify-start lg:items-center`}><FontAwesomeIcon icon={faBars} size="xl" className={`text-black`} onClick={()=>dispatch(changestate())}/></div>
            <h1 className={` lg:h-full lg:w-[73%] lg:flex lg:justify-start lg:items-center lg:text-2xl lg:font-sans`}>Eduvance</h1>
            <div className={` lg:h-full lg:w-[20%] lg:flex lg:justify-between lg:items-center`}>
              <FontAwesomeIcon icon={faBell} size="xl" className={`text-black`}/>
              <div className={`lg:bg-gray-800 lg:p-2 lg:rounded-lg lg:text-white`}><FontAwesomeIcon icon={faPlus} size="xl" className={`text-white`}/> Create role</div>
              <div className={`lg:h-[40px] lg:w-[40px] lg:rounded-[50%]`}>
                <img src='./Images/management.png' alt=''className='rounded-[50%]'/>
              </div>
            </div>
          </div>
        </>
      )
}

export default Managementheader
