import { BASE_URL } from '../Url';

export const addSchoolM = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/schools`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
