import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { StudentM } from '../../../Service/Management/TableData';

function Managementstudent() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const data = await StudentM();
        if (data) {
          setStudentData(data);
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <>
      <Table
        tableHeadId={'Serial Id'}
        tableHeadName={'Student Name'}
        tableHeadcol={'Email'}
        tableHeadAction={'Action'}
        actionsEdit={'Edit'}
        actionsDelete={'Delete'}
        actionsCourse={''}
        data={studentData}
        pagename={"Student"}
      />
    </>
  );
}

export default Managementstudent;
