import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { faArrowLeft, faTrash, faReply, faShare } from '@fortawesome/free-solid-svg-icons';


const Managementnotifyshow = () => {
    const location = useLocation();
    const message = location.state?.message;
    console.log(message)

  const handelReply=()=>{}

  const handelForward=()=>{}
  return (
    <>
      <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
        <div className={`lg:h-[95%] lg:w-[95%] overflow-y-scroll lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-2`}>
            <div className={`rounded-3xl lg:p-3 lg:h-auto lg:w-full lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-2 mxyz`}>
              <div className={`lg:h-[50px] lg:w-[100%] lg:flex lg:justify-start lg:items-center gap-3 lg:text-gray-600`}>
                <Link to={`/management/notification`}><FontAwesomeIcon icon={faArrowLeft} /></Link>
                <div className={`lg:text-xl lg:font-semibold`}>
                  {message.heading}
                </div>
                <FontAwesomeIcon icon={faTrash} className='cursor-pointer'/>
              </div>
              <div className={`bg-slate-400 lg:h-[60vh] lg:w-[100%]`}>{message.content}</div>
              <div className={`lg:w-[100%] lg:h-[90px] lg:flex lg:justify-start lg:items-center lg:flex-row lg:gap-5`}>
                <button className={`bg-slate-100  lg:border-solid lg:border-gray-400 lg:border-2 lg:h-8 p-3 lg:w-[110px] lg:flex lg:justify-around lg:items-center lg:rounded-2xl lg:text-gray-600 lg:font-semibold`} onClick={handelReply}><FontAwesomeIcon icon={faReply} size='xs'/><div className={``}>Reply</div></button>
                <button className={`bg-slate-100  lg:border-solid lg:border-gray-400 lg:border-2 lg:h-8 p-3 lg:w-[110px] lg:flex lg:justify-around lg:items-center lg:rounded-2xl lg:text-gray-600 lg:font-semibold`} onClick={handelForward}><div>Forward</div><FontAwesomeIcon icon={faShare} size='xs'/></button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Managementnotifyshow