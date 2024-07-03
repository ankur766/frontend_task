import React from 'react'

import {useNavigate} from 'react-router-dom'
  import { useParams } from 'react-router-dom';
import '../assets/css/delete.css'

export default function DeleteData(props) {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { deleteUser } = props;
  const handleonDelete=(shouldDelete)=> {
    if (shouldDelete) {
      deleteUser(id);
    }
    navigate('/');
  }
   
  return (
    <div className='deleteContainer'>
      <h2>Are you sure you want to delete this user?</h2>
      <button   type="button" className='btn btn-primary'  onClick={() => handleonDelete(true)}>Yes</button>
      <button   type="button"  className='btn btn-danger' onClick={() => handleonDelete(false)}>No</button>
    </div>
   
  )
}
