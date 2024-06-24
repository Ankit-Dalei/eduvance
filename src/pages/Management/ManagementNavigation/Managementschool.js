import React from 'react'
import Table from '../Table';
import { usersData } from '../../../Data/data';

const Managementschool = () => {
  return (
    <>
      <Table tableHeadId={'Serial Id'} tableHeadName={'Username'} tableHeadcol={'Email Id'} tableHeadAction={'Action'} actionsEdit={'Edit'} actionsDelete={'Delete'} actionsCourse={'Course'} data={usersData}/>
    </>
  )
}

export default Managementschool
