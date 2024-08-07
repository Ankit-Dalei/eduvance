import axios from "axios";
import { publicAxios } from "./axios.service";
import { BASE_URL } from "./Url";
import { setSessionStorageItem } from "./SessionStorage";

const login = async (email, password) => {
  try {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    const response = await publicAxios.post(`/user/login`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = response.data;
    setSessionStorageItem('user', data);
    return { success: true, userData: data};
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error: 'An error occurred while logging in' };
  }
};

export { login };

// export const getUser = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}`, {
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data.message;
//   }
// };
