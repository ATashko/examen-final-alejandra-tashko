import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import "./Home.css";


const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
 
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
