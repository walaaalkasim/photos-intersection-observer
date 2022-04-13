import { useState, useEffect } from "react";

const useFetch = (url, initialState) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState(initialState);
  useEffect(() => {
    fetch(url, { headers: { Authorization: `${API_KEY}` } })
      .then((response) => response.json())
      .then((results) => setData({ results, loading: false, error: null }))
      .catch((error) => setData({ results: null, loading: false, error }));
  }, [url, API_KEY]);
  return data;
};
export default useFetch;
