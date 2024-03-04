import React, { useEffect, useState } from 'react'
import './Inventory.css'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Formik } from 'formik';
// import { useDataGridProps } from '@mui/x-data-grid';



function Inventory() {

  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    const fetchInventory = async () => {
      const token = localStorage.getItem('token')
      console.log('token', token);
      if (!token) {
        alert('You are not authorised')
      }
      try {
        const response = await axios.get('http://127.0.0.1:8000/shop_app/products/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          });
        console.log(response);
        setProductsData(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchInventory()
  }, [])




  const columns = [
    { field: 'id', headerName: 'Prodct ID', width: 230 },
    { field: 'productName', headerName: 'Product Name', width: 230 },
    { field: 'category', headerName: 'Category', width: 230 },
    {
      field: 'StockAvailable', headerName: 'Stock Available', width: 230
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

  return (
    <>
      <div className='mx-5 mb-0'>
        <button className='btn btn-primary'>Add Products</button>
      </div>
      <div style={{ height: '83vh', width: '' }} className='my-auto mx-5 d-flex justify-content-center mt-3'>
        <DataGrid className='border '
          rows={rows}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
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

export default Inventory