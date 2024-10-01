import { BASE_URL } from "../Url";
export const DegreeFatch=async () => {
    try {
      const response = await fetch(`${BASE_URL}/admin/degree/all`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };