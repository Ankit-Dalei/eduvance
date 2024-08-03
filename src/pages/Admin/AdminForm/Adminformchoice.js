import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux'
import { toggleFormoff } from '../../../Redux/formSlice';
import { toggleFormback } from '../../../Redux/formSlice';
import Adminadduni from './Adminadduni';
import { toggleFormmanaback } from '../../../Redux/formSlice';
import Adminaddmanag from './Adminaddmanag';
import Adminaddcampus from './Adminaddcampus';
import {toggleFormcampusback} from '../../../Redux/formSlice';
import { toggleFormdegreeback } from '../../../Redux/formSlice';
import Admindegree from './Admindegree';


const Adminformchoice = () => {
  const uniactive = useSelector((state) => state.forms.formback)
  const campusactive = useSelector((state) => state.forms.formcampusback)
  const managementactive = useSelector((state) => state.forms.formmanaback)
  const degreeactive = useSelector((state) => state.forms.formdegreeback)
  const dispatch = useDispatch()
  const handelchange=()=>{
    dispatch(toggleFormoff())
  }
  const handeluni=()=>{
    dispatch(toggleFormback())
  }
  const handelcampus=()=>{
    dispatch(toggleFormcampusback())
  }
  const handelmanagement=()=>{
    dispatch(toggleFormmanaback())
  }
  const handelDegree=()=>{
    dispatch(toggleFormdegreeback())
  }
  return (
    <>
      <div className={`h-[80%] w-[100%] flex justify-center items-center absolute lg:top-[12%] sm:top-[8%] left-0 z-[2]`}>
        <div className={`h-[60%] w-[65%] sm:h-[70%] sm:w-[45%] lg:h-[80%] lg:w-[25%] p-4 bg-slate-300 rounded-xl flex justify-start items-center flex-col`}>
            <div className={`h-[10%] w-[90%] relative flex justify-center items-center`}>
                <h1 className={`font-semibold text-gray-400 text-2xl font-mono`}>ADD ROLE</h1>
                <FontAwesomeIcon icon={faXmark} className={`absolute right-0 font-semibold hover:text-gray-700 text-gray-400 text-2xl font-mono cursor-pointer`} onClick={handelchange}/>
            </div>
            <div className={`h-[80%] w-[90%] flex justify-around items-center flex-col`}>
                <button className={`h-[50px] p-3 w-[190px] bg-gray-200 text-gray-500 rounded-xl font-semibold text-xl flex justify-center items-center hover:bg-gray-400 hover:text-gray-200`} onClick={handeluni}>University</button>
                <button className={`h-[50px] p-3 w-[190px] bg-gray-200 text-gray-500 rounded-xl font-semibold text-xl flex justify-center items-center hover:bg-gray-400 hover:text-gray-200`} onClick={handelcampus}>Campus</button>
                <button className={`h-[50px] p-3 w-[190px] bg-gray-200 text-gray-500 rounded-xl font-semibold text-xl flex justify-center items-center hover:bg-gray-400 hover:text-gray-200`} onClick={handelmanagement}>Management</button>
                <button className={`h-[50px] p-3 w-[190px] bg-gray-200 text-gray-500 rounded-xl font-semibold text-xl flex justify-center items-center hover:bg-gray-400 hover:text-gray-200`} onClick={handelDegree}>Degree</button>
            </div>
        </div>
      </div>
      {uniactive?<Adminadduni/>:''}
      {campusactive?<Adminaddcampus/>:''}
      {managementactive?<Adminaddmanag/>:''}
      {degreeactive?<Admindegree/>:''}
    </>
  )
}

export default Adminformchoice
