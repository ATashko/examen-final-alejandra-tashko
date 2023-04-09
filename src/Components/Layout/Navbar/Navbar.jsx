import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";
import Switch from "@mui/material/Switch";
import { ButtonGroup, Button } from "@mui/material";
const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div>
      <ButtonGroup
        size="small"
        aria-label="small button group"
        underline="none"
      >
        <NavLink to="/">
          <Button>Home</Button>
        </NavLink>

        <NavLink to="/dentists">
          <Button>Dentistas</Button>
        </NavLink>

        <NavLink to="/contact">
          <Button>Contacto</Button>
        </NavLink>

        <NavLink to="/favs">
          <Button>Favoritos</Button>
        </NavLink>
      </ButtonGroup>
      <Switch
        checked={state.isDark}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
