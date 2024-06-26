import React from 'react'
import Table from '../Table';
import { usersData } from '../../../Data/data';

function Managementteacher() {
  return (
    <>
      <Table tableHeadId={'Serial Id'} tableHeadName={'Teacher Name'} tableHeadcol={'Email'} tableHeadAction={'Action'} actionsEdit={'Edit'} actionsDelete={'Delete'} actionsCourse={''} data={usersData} pagename={"Teacher"}/>
    </>
  )
}

export default Managementteacher
