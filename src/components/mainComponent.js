import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleTable from "./simpleTable";
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
    <nav className="navbar navbar-light ">
  <div className="container-fluid">
    <span className=" navbarName">impress AI</span>
  </div>
</nav>

    <div id="main-container"> 

    <Link to="/add" ><button type="button" class="btn btn-info addbtn">Add Users</button></Link>
      <SimpleTable dataSource={users} />
      </div>
    </div>
  );
}

export default MainComponent;