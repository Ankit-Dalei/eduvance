import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Table = (props) => {
  const {actionsCourse,actionsDelete,actionsEdit,tableHeadAction,tableHeadcol,tableHeadName,tableHeadId,data}=props
  const totalentries=data.length
  const [initialindex,setinitialindex]=useState(0)
  const [initialindexpre,setinitialindexpre]=useState(0)
  const [finalindex,setfinalindex]=useState(8)
  const [finalindexpre,setfinalindexpre]=useState(0)
  const dataArray=data.slice(initialindex, finalindex);
  const lastindex = data[data.length - 1].id;
  console.log(finalindex)

  const handelPrivious=(()=>{
    // dataArray=[]
    if (initialindex==0) {
      
    } else {
      if (initialindex+8 > lastindex) {
        setinitialindex(() => initialindexpre)
        setfinalindex(() => finalindexpre)
      } else {
        setinitialindex(() => initialindex - 8)
        setfinalindex(() => finalindex - 8)
      }
    }
  })
  const handelNext=(()=>{
    if (finalindex==totalentries || finalindex > lastindex) {
      
    }else {
    // dataArray=[]
    if (finalindex+8 > lastindex) {
      setfinalindexpre(finalindex)
      setinitialindexpre(initialindex)
      setfinalindex(lastindex)
      setinitialindex(() => initialindex + 8)
    }else{
      setinitialindex(() => initialindex + 8)
      setfinalindex(() => finalindex + 8)
    }
    }
  })

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
              {dataArray.map((item,index)=>{
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
                <p>{initialindex+1} - {finalindex} of {totalentries}</p>
                <div className={`lg:ml-6`}>
                  <button><FontAwesomeIcon icon={faAngleLeft} className={` hover:text-slate-300 cursor-pointer lg:text-xl`} onClick={handelPrivious}/></button>
                  <button><FontAwesomeIcon icon={faChevronRight} className={`lg:ml-3  hover:text-slate-300 cursor-pointer lg:text-xl`} onClick={handelNext}/></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
