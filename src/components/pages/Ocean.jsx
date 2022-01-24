import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Ocean = () => {
  const context = useContext(MyContext);
  const { setColor, perPage, setPage, results, loading, error, auth } = context;
  const navigate = useNavigate();
  useEffect(() => {
    !auth && navigate("/");
  }, [auth, navigate]);
  const handleNextPage = () => {
    window.scrollTo(0, 0);
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    window.scrollTo(0, 0);
    setPage((prevPage) => prevPage - 1);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  if (loading)
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <p>
        <h2>Ocean</h2>
        <div className="pagination">
          <button className="prev-page" onClick={handlePrevPage}>
            previous
          </button>
          <button className="next-page" onClick={handleNextPage}>
            next
          </button>{" "}
        </div>
        <div className="color-pick">
          <button
            className="red-btn"
            value="red"
            onClick={(e) => handleColor(e)}
          ></button>
          <button
            className="blue-btn"
            value="blue"
            onClick={(e) => handleColor(e)}
          ></button>
          <button
            className="green-btn"
            value="green"
            onClick={(e) => handleColor(e)}
          ></button>
          <button
            className="yellow-btn"
            value="yellow"
            onClick={(e) => handleColor(e)}
          ></button>
        </div>
      </p>
      <div className="car_photos_container">
        {results.photos.map((item) => (
          <div key={item.id}>
            <img src={item.src.large} alt={item.alt} />
            <p>by:{item.photographer}</p>
          </div>
        ))}
      </div>
      {perPage === 90 && <button onClick={handleNextPage}>next page</button>}
    </div>
  );
};

export default Ocean;
