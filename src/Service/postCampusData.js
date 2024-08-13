import { BASE_URL } from "./Url";
import axios from 'axios';
export const postCampusData = async (campusData) => {
  try {
    const response = await fetch(`${BASE_URL}/campus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campusData),
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
export const fetchCampusData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/eduvance/admin/campus/all`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching campus data:", error);
    throw error;
  }
};