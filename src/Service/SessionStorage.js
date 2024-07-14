
export const setSessionStorageItem = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getSessionStorageItem = (key) => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  export const removeSessionStorageItem = (key) => {
    sessionStorage.removeItem(key);
  };
  
  export const clearSessionStorage = () => {
    sessionStorage.clear();
  };
  