import React, { useEffect, useState } from 'react'
import './Stocks.css'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom'




function Stocks() {

  const [stocksData, setStocksData] = useState([])

  useEffect(() => {
    const fetchStocks = async () => {
      const token = localStorage.getItem('token')
      console.log('token', token);
      try {
        const response = await axios.get('http://127.0.0.1:8000/shop_app/stocks/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          })
        console.log(response);
        setStocksData(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchStocks()
  }, [])



  const columns = [
    { field: 'id', headerName: 'Prodct ID', width: 230 },
    { field: 'pro_company', headerName: 'Product Company', width: 230 },
    { field: 'productname', headerName: 'Product Name', width: 230 },
    {
      field: 'quantity', headerName: 'Stock Available', width: 230,
    },
    // {
    //   field: 'Price', headerName: 'Price', width: 230,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];


  return (
    <>
      <div>
        <Link to={'/add-stock'}><button className='btn btn-primary ms-5 mt-3'>Add Stock</button></Link>
      </div>
      <div className="table-wrapper">
        <div style={{ height: '61vh', width: '' }} className='my-auto mx-5 d-flex justify-content-center mt-3 table-wrapper'>
          <DataGrid className='border '
            rows={stocksData}
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
      </div>
    </>
  )
}

export default Stocks