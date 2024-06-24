import React from 'react'
import Table from '../Table';
import { courses } from '../../../Data/course';

const Managementcourse = () => {
  return (
    <>
      <Table tableHeadId={'Serial Id'} tableHeadName={'Course'} tableHeadcol={'Course Id'} tableHeadAction={'Action'} actionsEdit={'Edit'} actionsDelete={'Delete'} actionsCourse={''} data={courses}/>
    </>
  )
}

export default Managementcourse
