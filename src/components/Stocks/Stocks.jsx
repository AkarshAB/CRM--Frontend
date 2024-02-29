import React from 'react'
import './Stocks.css'
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'Prodct ID', width: 230 },
  { field: 'productName', headerName: 'Product Name', width: 230 },
  { field: 'category', headerName: 'Category', width: 230 },
  {
    field: 'StockAvailable', headerName: 'Stock Available', width: 230, editable: true
  },
  {
    field: 'Price', headerName: 'Price', width: 230,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, productName: 'Snow', category: 'Jon', StockAvailable: 35 },
  { id: 2, productName: 'Lannister', category: 'Cersei', StockAvailable: 42 },
  { id: 3, productName: 'Lannister', category: 'Jaime', StockAvailable: 45 },
  { id: 4, productName: 'Stark', category: 'Arya', StockAvailable: 16 },
  { id: 5, productName: 'Targaryen', category: 'Daenerys', StockAvailable: 45 },
  { id: 6, productName: 'Melisandre', category: null, StockAvailable: 150 },
  { id: 7, productName: 'Clifford', category: 'Ferrara', StockAvailable: 44 },
  { id: 8, productName: 'Frances', category: 'Rossini', StockAvailable: 36 },
  { id: 9, productName: 'Roxie', category: 'Harvey', StockAvailable: 65 },
];

function Stocks() {
  return (
    <>
      <div style={{ height: '83vh', width: '' }} className='my-auto mx-5 d-flex justify-content-center align-items-center '>
        <DataGrid className='border '
          rows={rows}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
          // onEditCellChange={handleEditCellChange}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}

        />
      </div>
    </>
  )
}

export default Stocks