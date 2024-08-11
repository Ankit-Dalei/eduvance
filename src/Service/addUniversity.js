import { BASE_URL } from "./Url";

const addUniversity = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/eduvance/admin/university`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    console.log(formData)
    console.log(response)

    if (!response.ok) {
      throw new Error('Failed to add university');
    }
    return { success: true };
  } catch (error) {
    console.error('Error adding university:', error);
    return { success: false, error: 'An error occurred while adding the university' };
  }
};

export default { addUniversity };

