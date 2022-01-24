import { useState, useRef, useEffect } from "react";
import MyContext from "./MyContext";
import useFetch from "../hooks/useFetch";

const MyProvider = ({ children }) => {
  const pageEnd = useRef();
  const [photos, setPhotos] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("a");
  const [color, setColor] = useState("");
  const url = `https://api.pexels.com/v1/search?query=${query}&page=${page}&color=${color}&per_page=${perPage}`;

  const initialState = { results: null, loading: true, error: null };
  const { results, loading, error } = useFetch(url, initialState);

  const loadMore = () => {
    setPerPage((prevPerPage) => prevPerPage + 10);
  };

  useEffect(() => {
    const options = { root: null, rootMargins: null, threshold: 0.1 };
    const handleIntersect = ([pageEnd]) => {
      if (pageEnd.isIntersecting) loadMore();
    };
    if (!loading) {
      const observer = new IntersectionObserver(handleIntersect, options);

      observer.observe(pageEnd.current);
      return () => {
        observer.unobserve(pageEnd);
      };
    }
  }, [loading]);

  const USER = process.env.REACT_APP_USER;
  const PASSWORD = process.env.REACT_APP_PASSWORD;
  const [form, setForm] = useState({ user: "", password: "" });
  const [auth, setAuth] = useState(false);
  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.user === USER && form.password === PASSWORD
      ? setAuth(true)
      : setAuth(false);
    setForm({ user: "", password: "" });
  };

  return (
    <MyContext.Provider
      value={{
        handleFormSubmit,
        handleFormInput,
        auth,
        setPage,
        photos,
        form,
        setColor,
        pageEnd,
        perPage,
        results,
        loading,
        error,
        setQuery,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
