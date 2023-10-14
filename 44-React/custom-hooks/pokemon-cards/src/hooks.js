import { useState, useEffect } from "react";
import axios from "axios";

function useFlip() {
    const [isFlipped, setIsFlipped] = useState(true)
    const flip = () => {
        setIsFlipped(!isFlipped)
    }
    return [isFlipped, flip]
}

function useAxios(key, url) {
  const [responses, setResponses] = useLocalStorage(key);

  const addResponseData = async (formatter = data => data, restOfUrl = "") => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setResponses(data => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}

function useLocalStorage(key, initialValue = []) {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };
