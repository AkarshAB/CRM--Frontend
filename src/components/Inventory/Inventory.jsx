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






  return (
    <>
      <div className='mx-5 mb-0'>

        <Link to={'/add-products'}><button className='btn btn-primary'>Add Products</button>
        </Link>
      </div>
      <div className="productCards m-5">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Inventory