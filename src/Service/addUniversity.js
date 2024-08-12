import { BASE_URL } from "./Url";
import axios from 'axios';
import toast from 'react-hot-toast';

export const editUniversity = (universityId, updatedData, data, setData, setFilteredData, setIsEditModalVisible, resetState) => {
  axios.put(`http://localhost:8181/eduvance/admin/university/${universityId}`, updatedData)
    .then(() => {
      const newData = data.map(item => item.unId === universityId ? { ...item, ...updatedData } : item);
      setData(newData);
      setFilteredData(newData);
      setIsEditModalVisible(false);
      resetState(); 
      toast.success('University updated successfully');
    })
    .catch(error => {
      console.error('Error updating data:', error);
      toast.error('Failed to update university');
    });
};

export const deleteUniversity = (universityId, data, setData, setFilteredData, setIsDeleteModalVisible) => {
  axios.delete(`http://localhost:8181/eduvance/admin/university/${universityId}`)
    .then(() => {
      const newData = data.filter(item => item.unId !== universityId);
      setData(newData);
      setFilteredData(newData);
      setIsDeleteModalVisible(false);
      toast.success('University deleted successfully');
    })
    .catch(error => {
      console.error('Error deleting data:', error);
      toast.error('Failed to delete university');
    });
};
export const addUniversity = async (formNewData) => {
  try {
    const response = await fetch(`${BASE_URL}/eduvance/admin/university`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formNewData)
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

