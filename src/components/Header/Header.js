import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="container mt-2 p-3 text-center">
      <nav className="text-uppercase menu-items">
        <CustomLink to={"/home"}>Home</CustomLink>
        <CustomLink to={"/reviews"}>Reviews</CustomLink>
        <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
        <CustomLink to={"/about"}>About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
