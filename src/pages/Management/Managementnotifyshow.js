import React from 'react'
import { useLocation } from 'react-router-dom'

const Managementnotifyshow = () => {
    const location = useLocation();
    const message = location.state?.message;
    console.log(message)
  return (
    <>
      <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
        <div className={`lg:h-[95%] lg:w-[95%] overflow-y-scroll lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-2`}>
            <div className={`lg:h-auto lg:w-full lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-2 mxyz`}>
              <div className={`bg-slate-400 lg:h-[110px] lg:w-[100%]`}>heading</div>
              <div className={`bg-slate-400 lg:h-[60vh] lg:w-[100%]`}>{message.content}</div>
              <div className={`bg-slate-400  lg:w-[100%] lg:h-[90px]`}>
                <button>Reply</button>
                <button>Forward</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Managementnotifyshow
