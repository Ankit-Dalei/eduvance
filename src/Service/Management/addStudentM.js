import { BASE_URL } from '../Url';

export const addStudentM = async (formData) => {
  try {
    const plainObject = {};
    formData.forEach((value, key) => {
      plainObject[key] = value;
    });

    const response = await fetch(`${BASE_URL}/students/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(plainObject),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData.message || 'Network response was not ok' };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message || 'An error occurred' };
  }
};
