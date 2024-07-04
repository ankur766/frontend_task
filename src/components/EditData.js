import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../assets/css/commonInput.css'
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
  const handelnavigate=()=>{
    navigate('/')
  }


 
  return (
    <div className="formcontainer">
      <h1 className="heading">Update User</h1>
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
          <Button className="btnclass1" variant="contained" onClick={handleSubmit}>Update</Button>
          <Button className="btnclass2" variant="contained" onClick={handelnavigate}>Cancle</Button>
        </div>
      </Box>
    </div>
  );
}



 
