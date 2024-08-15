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
export const deleteCampusData = async (campusId) => {
  try {
    await axios.delete(`${BASE_URL}/eduvance/admin/campus/${campusId}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting campus data:", error);
    return { success: false, error: error.message };
  }
};
export const editCampusData = async (campusId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/eduvance/admin/campus/${campusId}`, updatedData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error updating campus data:", error);
    return { success: false, error: error.message };
  }
};