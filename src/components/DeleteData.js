import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../assets/css/delete.css';

export default function DeleteData({ deleteUser }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleonDelete = async (shouldDelete) => {
    if (shouldDelete) {
      try {
        await deleteUser(id);
       
      } catch (error) {
       
          
         
        
      }
      navigate('/');
    } else {
      navigate('/');
    }
  };

  return (
    <div className='deleteContainer'>
      <h2>Are you sure you want to delete this user?</h2>
      <button type="button" className='btn btn-primary' onClick={() => handleonDelete(true)}>Yes</button>
      <button type="button" className='btn btn-danger' onClick={() => handleonDelete(false)}>No</button>
    </div>
  );
}