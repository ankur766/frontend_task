import React, { useState } from "react";

import {useNavigate} from 'react-router-dom'
import '../assets/css/commonInput.css'

const InputHandler = (props) => {
  const { addUser } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
const Navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }
   console.log(name)
    addUser({ name, email });
    setName(""); 
    setEmail("");
  };
const handelnavigate=()=>{
  Navigate('/')
}
  return (
     <div className="formcontainer">
      <button  className="btn btn-primary" onClick={ handelnavigate}>No Add more Data</button>
      <h1 className="heading">Add User</h1> 

  
   <form >
    
  <div className="form-group">
    <label htmlFor="name">Your Name</label>
    <input
      type="text"
      className="form-control"
    
     required
      placeholder="Enter Name"

      value={name} 
        onChange={(e) => {
         setName(e.target.value);
       }}
      

    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email Address</label>
    <input
      type="email"
      className="form-control"
     
      placeholder="abc@gmail.com"
      required
      value={email} 
      onChange={(e) => {
       setEmail(e.target.value);
         }}

    />
  </div>
 
  <button type="submit" className="btnclass btn btn-primary" onClick={handleSubmit}>
    Submit
  </button>
 
</form>
</div>
  
  );
};

export default InputHandler;