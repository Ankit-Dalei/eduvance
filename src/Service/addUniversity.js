import { BASE_URL } from "./Url";

const addUniversity = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/universities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to add university');
    }
    return { success: true };
  } catch (error) {
    console.error('Error adding university:', error);
    return { success: false, error: 'An error occurred while adding the university' };
  }
};

export { addUniversity };
