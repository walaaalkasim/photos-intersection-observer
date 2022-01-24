import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Nav from "./Nav";

import pexels from "../helpers/pexels.jpg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={pexels} alt="" />
      </Link>
      <LoginForm />
      <Nav />
    </header>
  );
};

export default Header;
