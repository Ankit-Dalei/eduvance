import React from 'react'

const Form = ({form}) => {
  const handelSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className={`bg-slate-400 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
        <form className={`bg-slate-300`} onSubmit={handelSubmit}>
          
        </form>
      </div>
    </>
  )
}

export default Form
