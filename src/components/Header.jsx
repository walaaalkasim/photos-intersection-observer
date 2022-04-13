import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Nav from "./Nav";

import image from "../helpers/image.jpg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={image} alt="" />
      </Link>
      <LoginForm />
      <Nav />
    </header>
  );
};

export default Header;
