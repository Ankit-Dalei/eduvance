import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { SchoolM } from '../../../Service/Management/TableData';

const Managementschool = () => {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    const fetchSchoolData = async () => {
      const data = await SchoolM();
      if (data) {
        setSchoolData(data);
      }
    };
    fetchSchoolData();
  }, []);

  return (
    <>
      <Table
        tableHeadId={'Serial Id'}
        tableHeadName={'School Name'}
        tableHeadcol={'School Id'}
        tableHeadAction={'Action'}
        actionsEdit={'Edit'}
        actionsDelete={'Delete'}
        actionsCourse={'Branch'}
        data={schoolData}
        pagename={"School"}
        link={'/management/ChooseRoll/addBranch'}
      />
    </>
  );
}

export default Managementschool;

