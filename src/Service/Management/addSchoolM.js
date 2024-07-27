import { BASE_URL } from '../Url';

export const addSchoolM = async (schoolData) => {
  try {
    const response = await fetch(`${BASE_URL}/schools`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(schoolData),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Get the error data from the response
      return { success: false, error: errorData.message || 'Network response was not ok' };
    }

    const data = await response.json(); // Get the success data from the response
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message || 'An error occurred' };
  }
};
