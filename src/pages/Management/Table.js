import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Table = (props) => {
  const {actionsCourse,actionsDelete,actionsEdit,tableHeadAction,tableHeadcol,tableHeadName,tableHeadId,data}=props
  console.log(data)
  return (
    <>
      <div className={`lg:h-[100%] lg:w-[100%] lg:flex lg:justify-center lg:items-center`}>
        <div className={`lg:h-[95%] lg:w-[95%] lg:flex lg:justify-between lg:items-center lg:flex-col`}>
          <div className={`lg:h-[10%] lg:w-[100%] lg:flex lg:justify-between lg:items-center`}>
            <form className={`lg:bg-slate-300 lg:h-[35px] lg:w-[350px] lg:flex lg:justify-between lg:items-center lg:rounded-3xl lg:p-2`}>
              <input type='text' placeholder='Search Here' className={` lg:bg-slate-300 lg:h-[25px] lg:w-[90%] lg:rounded-3xl lg:p-3 lg:border-none lg:outline-slate-300`}/>
              <button className={`lg:flex lg:justify-center lg:items-center lg:w-[10%] lg:outline-none lg:border-none`}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
            <button className={` lg:bg-gray-800 lg:p-1 lg:flex lg:justify-center lg:items-center lg:w-[100px] lg:rounded-3xl lg:text-white hover:bg-slate-300 hover:text-slate-900 lg:font-serif`}>Export</button>
          </div>
          <div className={`lg:h-[70%] lg:w-[100%]`}>
            <table className='lg:border-separate lg:border lg:border-slate-500 lg:h-auto lg:w-[100%] lg:text-center lg:overflow-hidden'>
              <thead className={`lg:h-[10%] lg:w-[90%] lg:bg-gray-300`}>
                <tr className={`lg:border`}>
                  <th className='lg:p-1 mr-3'><input type='checkbox'/> {tableHeadId}</th>
                  <th className='lg:p-1'>{tableHeadName}</th>
                  <th className='lg:p-1'>{tableHeadcol}</th>
                  <th className='lg:p-1'>{tableHeadAction}</th>
                </tr>
              </thead>
              <tbody className='overflow-hidden'>
              {data.map((item,index)=>{
                  return(
                    <tr>
                  <td className={`lg:p-1`}><input type='checkbox'/> {item.id}</td>
                  <td className={`lg:p-1`}>{item.username}</td>
                  <td className={`lg:p-1`}>{item.email}</td>
                  <td className={`lg:inline-flex lg:items-center lg:justify-center lg:space-x-4 lg:p-1`}>
                    <div className={`lg:bg-green-700 lg:p-1 lg:w-[70px] lg:rounded-full lg:text-white hover:bg-green-600 hover:text-slate-800 lg:cursor-pointer lg:font-serif`}>{actionsEdit}</div>
                    <div className={`lg:bg-red-600 lg:p-1 lg:w-[70px] lg:rounded-full lg:text-white hover:bg-red-500 hover:text-slate-800 lg:cursor-pointer lg:font-serif`}>{actionsDelete}</div>
                    {actionsCourse?<div className={`lg:bg-blue-600 lg:p-1 lg:w-[70px] lg:rounded-full lg:text-white hover:bg-blue-500 hover:text-slate-800 lg:cursor-pointer lg:font-serif`}>{actionsCourse}</div>:''}
                  </td>
                </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className={`lg:h-[15%] lg:w-[100%] lg:flex lg:justify-end lg:items-center`}>
            <div className={`lg:h-[100%] lg:w-[50%] lg:flex lg:justify-end lg:items-center`}>
                <p>1 - 8 of 7800</p>
                <div className={`lg:ml-6`}>
                    <FontAwesomeIcon icon={faAngleLeft} className={` hover:text-slate-300 cursor-pointer lg:text-xl`}/>
                    <FontAwesomeIcon icon={faChevronRight} className={`lg:ml-3  hover:text-slate-300 cursor-pointer lg:text-xl`}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
