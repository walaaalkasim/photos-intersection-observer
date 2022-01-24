import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/pages/Home";
import Cars from "../components/pages/Cars";
import Ocean from "../components/pages/Ocean";
import Success from "../components/pages/Success";
import NotFound404 from "../components/pages/NotFound404";
import PhotoDetails from "../components/pages/PhotoDetails";
import Footer from "../components/Footer";
import MyProvider from "../context/MyProvider";

const Routings = () => (
  <MyProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/ocean" element={<Ocean />} />
        <Route path="/success" element={<Success />} />
        <Route path="/photoDetails" element={<PhotoDetails />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </Router>
  </MyProvider>
);
export default Routings;
