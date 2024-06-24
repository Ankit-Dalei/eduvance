import React from 'react'
import Table from '../Table';
import { courses } from '../../../Data/course';

const Managementbranch = () => {
  return (
    <>
      <Table tableHeadId={'Serial Id'} tableHeadName={'Branch'} tableHeadcol={'Branch Id'} tableHeadAction={'Action'} actionsEdit={'Edit'} actionsDelete={'Delete'} actionsCourse={''} data={courses}/>
    </>
  )
}

export default Managementbranch
