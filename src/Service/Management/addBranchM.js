import { BASE_URL } from "../Url";

export const addBranchM = async (branchData) => {
  try {
    const response = await fetch(`${BASE_URL}/eduvance/branch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(branchData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData.message || 'Network response was not ok' };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
