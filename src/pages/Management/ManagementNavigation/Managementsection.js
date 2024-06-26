import React from 'react'
import Table from '../Table';
import { usersData } from '../../../Data/data';

function Managementsection() {
  return (
    <>
      <Table tableHeadId={'Serial Id'} tableHeadName={'Section'} tableHeadcol={'Section Id'} tableHeadAction={'Action'} actionsEdit={'Edit'} actionsDelete={'Delete'} actionsCourse={''} data={usersData} pagename={"Section"}/>
    </>
  )
}

export default Managementsection
