import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <h4>Alejandra Tashko - Exámen Final</h4>
    </div>
  );
};

export default Footer;
