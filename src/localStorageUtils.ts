// Initialize local storage with default board data if it doesn't exist
export const initializeLocalStorage = <T>(key: string, defaultData: T) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(defaultData));
  }
};

// Retrieve the board data from local storage
export const getLocalStorageData = <T>(key: string, defaultData: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultData;
};

// Save updated board data to local storage
export const saveLocalStorageData = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};
