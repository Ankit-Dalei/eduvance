import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom'
import { faArrowLeft, faTrash, faReply, faShare } from '@fortawesome/free-solid-svg-icons';

const Adminnotifyshow = () => {
    const location = useLocation();
    const message = location.state?.message;
    console.log(message)

  const handelReply=()=>{}

  const handelForward=()=>{}

  const data=()=>{
    return(
      <>
      <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; padding: 10px 0;">
            <img src="logo.png" alt="Company Logo" style="width: 100px;"/>
        </div>
        <div style="margin: 20px 0;">
            <h1 style="color: #333333;">Welcome to Our Service</h1>
            <p>Hello,</p>
            <p>We are excited to have you on board. Please click the button below to confirm your email address and get started.</p>
            <a href="https://www.example.com/confirm" style="display: block; width: 200px; margin: 20px auto; padding: 10px; text-align: center; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 5px;">Confirm Email</a>
        </div>
        <div style="text-align: center; color: #777777; font-size: 12px; margin-top: 20px;">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
            <p>1234 Street Name, City, State, ZIP</p>
        </div>
    </div>
      </>
    )
  }
  return (
    <>
      <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
        <div className={`lg:h-[95%] lg:w-[95%] overflow-y-scroll lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-2`}>
            <div className={`rounded-3xl lg:p-3 lg:h-auto lg:w-full lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-2 mxyz`}>
              <div className={`lg:h-[50px] lg:w-[100%] lg:flex lg:justify-start lg:items-center gap-3 lg:text-gray-600`}>
                <Link to={`/admin/Notification`}><FontAwesomeIcon icon={faArrowLeft} /></Link>
                <div className={`lg:text-xl lg:font-semibold`}>
                  {message.heading}
                </div>
                <FontAwesomeIcon icon={faTrash} className='cursor-pointer'/>
              </div>
              <div className={`bg-slate-400 lg:h-[60vh] lg:w-[100%]`}>
                {data}
              </div>
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

export default Adminnotifyshow
