import { BASE_URL } from "./Url";

export const postManagementData = async (managementData) => {
  try {
    const response = await fetch(`${BASE_URL}/management`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(managementData),
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
