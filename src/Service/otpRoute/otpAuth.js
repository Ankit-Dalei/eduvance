import axios from 'axios';
import { BASE_URL } from "../Url";
export const sendOtp = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/eduvance/otp/request`, { email });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "user not found");
    }
    throw new Error("user not found");
  }
};
export const verifyOtp = async (email, otp) => {
    try {
      const response = await axios.post(`${BASE_URL}/eduvance/otp/validate`, { email, otp });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };