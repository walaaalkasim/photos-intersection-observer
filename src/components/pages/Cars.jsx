import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
const Cars = () => {
  const context = useContext(MyContext);
  const { setColor, setPage, perPage, auth, results, loading, error } = context;
  const navigate = useNavigate();
  console.log(results.photos);

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
  // const handleDetails = () => {
  //   navigate("photoDetails");
  // };
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
        {" "}
        <h2>Cars</h2>
        <div className="pagination-upper-page">
          <button className="prev-page" onClick={handlePrevPage}>
            previous
          </button>
          <button className="next-page" onClick={handleNextPage}>
            next
          </button>
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
            <Link to="/photoDetails" state={item}>
              <img src={item.src.large} alt={item.alt} />
            </Link>

            {/* </a> */}
            <div className="photo-details">
              {/* <span>by:{item.photographer}</span> */}
              {/* <span> {item.alt}</span> */}
            </div>
          </div>
        ))}
      </div>
      <div>
        {perPage >= 90 && (
          <div className="pagination-down-page">
            <button className="prev-btn-footer" onClick={handleNextPage}>
              prev page
            </button>

            <button className="next-btn-footer" onClick={handlePrevPage}>
              next page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
