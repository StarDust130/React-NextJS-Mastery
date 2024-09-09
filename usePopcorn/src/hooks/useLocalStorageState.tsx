import { useEffect, useState } from "react";

const useLocalStorageState = (key, initialState) => {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
export { useLocalStorageState };
