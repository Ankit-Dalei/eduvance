import axios from "axios";
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
export const fetchManagementRecords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/eduvance/admin/management/all`);
    console.log("good",response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching management records:', error);
    throw error;
  }
};

export const deleteManagementRecord = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/eduvance/admin/management/${id}`);
    return true; 
  } catch (error) {
    console.error(`Error deleting management record with ID ${id}:`, error);
    throw error;
  }
};

export const updateManagementRecord = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating management record with ID ${id}:`, error);
    throw error;
  }
};
