import React, { useEffect, useState } from 'react'
import './Inventory.css'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Swal from 'sweetalert2'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import EditInventory from '../EditInventory/EditInventory';
import { localStorageAvailable } from '@mui/x-data-grid/utils/utils';


function Inventory() {

  const [productsData, setProductsData] = useState([])


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

  useEffect(() => {
    fetchInventory()
  }, [])

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token')

    try {
      const response = await axios.delete(`http://127.0.0.1:8000/shop_app/products/${id}`, {
        headers: {
          Authorization: `token ${token}`
        }
      })
      alert('product deleted successfully')
      fetchInventory()
    } catch (error) {
      alert(error)
    }
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Product has been deleted",
    //   showConfirmButton: false,
    //   timer: 1500
    // });
  }






  return (
    <>
      <div className='mx-5 mb-0'>

        <Link to={'/add-products'}><button className='btn btn-primary'>Add Products</button>
        </Link>
      </div>

      <div className="productCards m-5">
        <div className="row flex-wrap">
          {
            productsData.map((product, index) => (
              <div key={index} className="col-4">

                <Card sx={{ maxWidth: 345 }} className='mb-5'>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.pro_company} - {product.product_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className='d-flex justify-content-center '>
                    <div onClick={(e) => e.stopPropagation()} className='d-flex gap-5 mb-3'>
                      <Link to={`/EditInventory/${product.id}`}>
                        <FaEdit />
                      </Link>
                      <Link to={`/ViewProduct/${product.id}`}>
                        <FaEye />
                      </Link>
                      <button onClick={() => handleDelete(product.id)}>
                        <MdDelete />
                      </button>
                    </div>
                  </CardActions>
                </Card>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default Inventory