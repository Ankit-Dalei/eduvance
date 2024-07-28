import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { CourseM } from '../../../Service/Management/TableData';

const Managementcourse = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const data = await CourseM();
        if (data) {
          setCourseData(data);
        }
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData();
  }, []);

  return (
    <>
      <Table
        tableHeadId={'Serial Id'}
        tableHeadName={'Course'}
        tableHeadcol={'Course Id'}
        tableHeadAction={'Action'}
        actionsEdit={'Edit'}
        actionsDelete={'Delete'}
        actionsCourse={''}
        data={courseData}
        pagename={"Course"}
      />
    </>
  );
}

export default Managementcourse;
