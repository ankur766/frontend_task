import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditData(props) {
  const { id } = useParams();
  const { editUser, userState } = props;


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = userState.users.find(user => user.id === id);
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [id, userState.users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }

    const isConfirmed = window.confirm("Are you sure you want to submit?");
    if (isConfirmed) {
      editUser(id, { name, email });
      navigate("/");
    }
  
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
}



 
