import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { TeacherM } from '../../../Service/Management/TableData';

function Managementteacher() {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const data = await TeacherM();
        if (data) {
          setTeacherData(data);
        }
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData();
  }, []);

  return (
    <>
      <Table
        tableHeadId={'Serial Id'}
        tableHeadName={'Teacher Name'}
        tableHeadcol={'Email'}
        tableHeadAction={'Action'}
        actionsEdit={'Edit'}
        actionsDelete={'Delete'}
        actionsCourse={''}
        data={teacherData}
        pagename={"Teacher"}
      />
    </>
  );
}

export default Managementteacher;
