import { publicAxios } from "./axios.service";
import { setSessionStorageItem } from "./SessionStorage";

const login = async (email, password) => {
  try {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    const response = await publicAxios.post(`/eduvance/user/login`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = response.data;
    
    if (data.success) {
      localStorage.setItem('user', JSON.stringify(data));
      setSessionStorageItem('user', data);
      return { success: true, userData: data };
    }
    return { success: false, error: 'Login failed' };
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error: 'An error occurred while logging in' };
  }
};

export { login };
