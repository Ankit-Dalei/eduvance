import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import {formcampu} from '../../../Redux/formcampusback';

const Adminaddcampus = () => {
    const dispatch = useDispatch()
  const handelchange=()=>{
    dispatch(formcampu())
  }
  return (
    <>
      <div className={`h-[80%] w-[100%] flex justify-center items-center absolute top-[12%] left-0 z-[2]`}>
        <div className={`h-[90%] w-[25%] p-4 bg-slate-300 rounded-xl flex justify-start items-center flex-col`}>
            <div className={`h-[10%] w-[90%] relative flex justify-center items-center`}>
                <h1 className={`font-semibold text-gray-400 text-2xl font-mono`}>ADDING CAMPUS</h1>
                <FontAwesomeIcon icon={faXmark} className={`absolute right-0 font-semibold hover:text-gray-700 text-gray-400 text-2xl font-mono cursor-pointer`} onClick={handelchange}/>
            </div>
            <form className={`h-[90%] w-full flex justify-around items-center flex-col gap-2 font-serif`}>
              <input type='text' placeholder='CAMPUS ID' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='text' placeholder='CAMPUS NAME' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='text' placeholder='UNIVERSITY ID' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='text' placeholder='ESTD' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='text' placeholder='STATE' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='text' placeholder='ADDRESS' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='text' placeholder='PHONE' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='text' placeholder='LANDLINK' className={`h-[40px] w-[90%] p-2 rounded-xl`}/>
              <input type='date' placeholder='DATE OF JOIN' className={`h-[40px] w-[90%] p-2 rounded-xl`} hidden/>
              <button className={`h-[40px] w-[90%] p-2 bg-blue-500 rounded-xl`}>Submit</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Adminaddcampus
