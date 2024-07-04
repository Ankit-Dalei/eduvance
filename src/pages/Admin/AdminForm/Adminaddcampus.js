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
            <div className={``}>
            </div>
        </div>
      </div>
    </>
  )
}

export default Adminaddcampus
