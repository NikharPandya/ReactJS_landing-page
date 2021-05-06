import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="tesla logo" />
      </div>

      <div className="header__center">
        <p>Modal S</p>
        <p>Modal 3</p>
        <p>Modal X</p>
        <p>Modal Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>

      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
};

export default Header;
