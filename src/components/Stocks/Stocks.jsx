import React, { useEffect, useState } from 'react'
import './Stocks.css'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa';





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

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/shop_app/stocks/${id}/`,
        {
          headers: {
            Authorization: `token ${token}`
          }
        })
      setStocksData(prevData => prevData.filter(stock => stock.id !== id))
    } catch (error) {
      console.log(error)
    }
  }



  const columns = [
    { field: 'id', headerName: 'Prodct ID', width: 230 },
    { field: 'pro_company', headerName: 'Product Company', width: 230 },
    { field: 'productname', headerName: 'Product Name', width: 230 },
    {
      field: 'quantity', headerName: 'Stock Available', width: 230,
    },
    {
      field: 'action', headerName: 'Action', width: 230,
      renderCell: (params) => (
        <div className='d-flex gap-4'>
          <Link to={`/updateStock/${params.row.id}`}><FaEdit /></Link>
          <FaTrash onClick={() => handleDelete(params.row.id)} style={{ cursor: 'pointer', color: '#980002' }} />

        </div>
      ),
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