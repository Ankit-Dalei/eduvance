import axios from "axios";
import { publicAxios } from "./axios.service";
import { BASE_URL } from "./Url";


const login = async (username, password) => {
  try {
    const formData = new FormData();
    formData.append('userid', username);
    formData.append('password', password);

    const response = await fetch(`${publicAxios}/user/login`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    // console.log(data.user.userId)
    return { success: true,role: data.user.userId};
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error: 'An error occurred while logging in' };
  }
};

export { login };

export const getUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};