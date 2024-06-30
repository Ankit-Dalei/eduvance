import React from 'react'
import Table from '../Table';
import { usersData } from '../../../Data/data';

const Managementschool = () => {
  return (
    <>
      <Table tableHeadId={'Serial Id'} tableHeadName={'School Name'} tableHeadcol={'School Id'} tableHeadAction={'Action'} actionsEdit={'Edit'} actionsDelete={'Delete'} actionsCourse={'Branch'} data={usersData} pagename={"School"} link={'/management/ChooseRoll/addBranch'}/>
    </>
  )
}

export default Managementschool
