import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleTable from "./simpleTable";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import '../assets/css/mainComponents.css'

function MainComponent(props) {
  const { getUsers, userState} = props;


  useEffect(() => {
    getUsers();
  }, []);

  const users = userState?.users || [];

  return (
    <div id="main-container-wrapper"> 
    

    <div id="main-container"> 

    <Link to="impressai/add" > <Button className="btnclass1" variant="contained" >ADD User</Button></Link>
      <SimpleTable dataSource={users} />
      </div>
    </div>
  );
}

export default MainComponent;