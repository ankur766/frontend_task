import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditData from '../src/components/EditData';
import DeleteData from '../src/components/DeleteData';
import "./assets/css/style.css";
import { connect } from "react-redux";
import "../node_modules/antd/dist/antd.css";
import MainComponent from "../src/components/mainComponent"; 
import { addUser, getUsers, editUser, deleteUser } from "./actions/userActions";
import InputHandler from "./components/commonInput";
import '../src/assets/css/style.css'


function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent{...props} />} />
        <Route path="/add" element={<InputHandler  addUser={props.addUser}/>} />
 
        <Route path="/edit/:id" element={<EditData {...props} />} />
        <Route path="/delete/:id" element={<DeleteData  deleteUser={props.deleteUser}/>} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
  editUser,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);