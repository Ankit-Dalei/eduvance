import React from 'react'
import Table from '../Table';
import { usersData } from '../../../Data/data';

function Managementstudent() {
  return (
    <>
      <Table tableHeadId={'Serial Id'} tableHeadName={'Student Name'} tableHeadcol={'Email'} tableHeadAction={'Action'} actionsEdit={'Edit'} actionsDelete={'Delete'} actionsCourse={''} data={usersData} pagename={"Student"}/>
    </>
  )
}

export default Managementstudent
