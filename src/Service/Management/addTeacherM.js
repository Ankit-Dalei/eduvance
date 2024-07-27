import { BASE_URL } from '../Url';

export const addTeacherM = async (formData) => {
  try {
    const formDataObj = new FormData();
    
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataObj.append(key, formData[key]);
      }
    });

    const response = await fetch(`${BASE_URL}/teachers`, {
      method: 'POST',
      body: formDataObj,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit data');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting data:', error);
    return { success: false, error: error.message };
  }
};
