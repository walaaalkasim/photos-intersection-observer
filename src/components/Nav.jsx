import { useContext } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../context/MyContext";

const Nav = () => {
  const context = useContext(MyContext);
  const { auth, setQuery, setColor } = context;
  return (
    <>
      <nav>
        {auth && (
          <ul>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive && "green" };
              }}
            >
              <li className="home-nav">Home</li>
            </NavLink>
            <NavLink
              to="/cars"
              style={({ isActive }) => {
                return { color: isActive && "green" };
              }}
            >
              <li
                onClick={(e) => {
                  setQuery("cars");
                  setColor("");
                }}
              >
                Cars
              </li>
            </NavLink>

            <NavLink
              to="/ocean"
              style={({ isActive }) => {
                return { color: isActive && "green" };
              }}
            >
              <li
                onClick={(e) => {
                  setQuery("ocean");
                  setColor("");
                }}
              >
                Ocean
              </li>
            </NavLink>

            <NavLink
              to="/success"
              style={({ isActive }) => {
                return { color: isActive && "green" };
              }}
            >
              <li
                onClick={(e) => {
                  setQuery("success");
                  setColor("");
                }}
              >
                Success
              </li>
            </NavLink>
          </ul>
        )}
      </nav>
    </>
  );
};
export default Nav;
