import { BASE_URL } from '../Url';

export const SchoolM = async () => {
        try {
          const response = await fetch(`${BASE_URL}/your-endpoint`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
};
export const BranchM = async () => {
        try {
          const response = await fetch(`${BASE_URL}/your-endpoint`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
};
export const CourseM = async () => {
        try {
          const response = await fetch(`${BASE_URL}/your-endpoint`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
};
export const TeacherM = async () => {
        try {
          const response = await fetch(`${BASE_URL}/your-endpoint`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
};
export const StudentM = async () => {
        try {
          const response = await fetch(`${BASE_URL}/your-endpoint`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
};
