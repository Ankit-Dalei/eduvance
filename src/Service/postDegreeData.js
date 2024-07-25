import { BASE_URL } from "./Url";

export const postDegreeData = async (DegreeData) => {
  try {
    const response = await fetch(`${BASE_URL}/campus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DegreeData),
    });

    if (!response.ok) {
      return false;
    }

    await response.json();
    return true;
  } catch (error) {
    console.error('There was an error!', error);
    return { success: false, error: 'An error occurred while adding the university' };

  }
};
