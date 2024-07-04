import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../assets/css/commonInput.css'; 

const InputHandler = (props) => {
  const { addUser } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }
    addUser({ name, email });
    setName("");
    setEmail("");
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="formcontainer">
      <h1 className="heading">Add User</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { 
            m: 2,
            width: '25ch',
            color:'white',
            background:'#e3af6b',
            borderRadius: 20,   
           
          },
          '& .MuiButton-root': {
            m: 2,
          },
          '& .btnclass1': {
            backgroundColor: '#3f51b5',
            color: 'white',
            '&:hover': {
              backgroundColor: '#303f9f', 
            },
          },
          '& .btnclass2': {
            backgroundColor: 'red',
            color: 'white',
            '&:hover': {
              backgroundColor: '#7e0606', 
            },


           
          },

          '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white', 
          borderRadius: 20,    
          borderWidth: 2,      
          fontSize: 24,  
        },
        '& input': {
                 
          fontWeight: 'bold',   
        },
      },
      '& .MuiInputLabel-root': {
        color: 'black', 
        fontSize: 20,      
        fontWeight: 'bold',    
      },
    
          '.MuiFormControl-root': {
            margin: '10px',
          },
          '.heading': {
            color: 'white', 
            fontSize: '30px', 
           
            fontFamily:'initial',
            fontWeight:'25ch'
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="name"
            label="Name"
            required
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            required
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="btnclass1" variant="contained" onClick={handleSubmit}>Submit</Button>
          <Button className="btnclass2" variant="contained" onClick={handleNavigate}>No Add Data</Button>
        </div>
      </Box>
    </div>
  );
};

export default InputHandler;
