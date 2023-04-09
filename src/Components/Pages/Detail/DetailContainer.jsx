import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from "../../../Context/GlobalContext";
import Detail from './Detail';
import axios from 'axios';



const DetailContainer = () => {
   
 const { state, dispatch } = useContext(GlobalContext);
 const { id } = useParams();

 useEffect(() => {
   const getUser = axios.get(
     `https://jsonplaceholder.typicode.com/users/${id}`
   );
   getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data }));
 }, []);
  
  return (
    <div>
      <Detail user={state.user} />
    </div>
  );
}

export default DetailContainer