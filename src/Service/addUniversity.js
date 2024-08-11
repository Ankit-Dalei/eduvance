import { BASE_URL } from "./Url";
export const addUniversity = async (formNewData) => {
  
console.log("hello")
console.log("hello")
  try {
    console.log("bfdata",formNewData)
    const response = await fetch(`${BASE_URL}/eduvance/admin/university`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formNewData)
    });
    console.log("bfdatadata",formNewData)
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

