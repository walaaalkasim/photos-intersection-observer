import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const PhotoDetails = () => {
  const context = useContext(MyContext);
  const { auth, loading, error } = context;

  const navigate = useNavigate();
  const location = useLocation();
  const { alt, photographer, src } = location.state;

  console.log("first");

  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);
  if (loading)
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <span> it is :{alt} </span>
      <span>photographed by :{photographer}</span>
      <img src={src.large} alt="" />
    </div>
  );
};

export default PhotoDetails;
