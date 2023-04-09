import React, { useContext, useEffect } from "react";
import Dentist from './Dentist';
import { GlobalContext } from "../../../Context/GlobalContext";
import axios from "axios";


const DentistContainer = () => {
const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
  
  const getDentists = axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  getDentists
    .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
    .catch((err) => console.log(err));
}, []);
   
  {console.log(state.users);}

return (
  <div>
    <Dentist users={state.users} dispatch={dispatch} favs={state.favs} />
  </div>
);
}

export default DentistContainer
