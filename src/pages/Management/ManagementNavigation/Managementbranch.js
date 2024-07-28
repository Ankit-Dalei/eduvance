import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { BranchM } from '../../../Service/Management/TableData';

const Managementbranch = () => {
  const [branchData, setBranchData] = useState([]);

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        const data = await BranchM();
        if (data) {
          setBranchData(data);
        }
      } catch (error) {
        console.error('Error fetching branch data:', error);
      }
    };

    fetchBranchData();
  }, []);

  return (
    <>
      <Table
        tableHeadId={'Serial Id'}
        tableHeadName={'Branch'}
        tableHeadcol={'Branch Id'}
        tableHeadAction={'Action'}
        actionsEdit={'Edit'}
        actionsDelete={'Delete'}
        actionsCourse={''}
        data={branchData}
        pagename={"Branch"}
      />
    </>
  );
}

export default Managementbranch;
