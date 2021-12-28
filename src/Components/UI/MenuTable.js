import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'S.no', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'price', headerName: 'Price', width: 130 },
];



export default function DataTable({menuDetails}) {
  const filteredMenuDetails=menuDetails?.length?menuDetails.map((each, index)=>{
    return {
      id: index+1,
      name:each.name,
      description:each.description?each.description:"NA",
      price:`$${each.price}`
    }
  }):[]
  return (
    <div style={{ height: 400, width: '100%' }}>
      {filteredMenuDetails?.length?

      <DataGrid
        rows={filteredMenuDetails}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />:<p>No Items Found</p>
    }
    </div>
  );
}
