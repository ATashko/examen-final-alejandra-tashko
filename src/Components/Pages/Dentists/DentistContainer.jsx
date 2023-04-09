import React, { useContext, useEffect } from "react";
import Dentist from './Dentist';
import { GlobalContext } from "../../../Context/GlobalContext";



const DentistContainer = () => {
const { state, dispatch } = useContext(GlobalContext);


return (
  <div>
    <Dentist users={state.users} dispatch={dispatch} favs={state.favs} />
  </div>
);
}

export default DentistContainer
