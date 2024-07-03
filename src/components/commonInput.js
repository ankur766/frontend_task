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
    Navigate('/')
  };

  return (
     
    <form className="form">
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
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
    Submit
  </button>
</form>
  
  );
};

export default InputHandler;