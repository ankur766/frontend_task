import React from "react";
import { DataGrid } from '@mui/x-data-grid';

import { Link } from "react-router-dom";
import  '../assets/css/table.css'
const SimpleTable = ({ dataSource}) => {
  const columns= [
    { field: 'id', headerName: 'ID', width: 70  },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
          <Link to={`impressai/edit/${params.id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <span style={{ margin: '0 5px' }}></span> 
          <Link to={`impressai/delete/${params.id}`}>
            <button className="btn btn-danger">Delete</button>
          </Link>
        </div>
      ),
    },
  ];
  const rows = dataSource.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      action: item.id,
    };
  }
  );
 
  return (
   
    <div  className="data-grid table" 
    style={{ height: 400, width: '50%', 
    }}>
    <DataGrid  style={{
      color:"white"

    

    }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  );
};

export default SimpleTable;
