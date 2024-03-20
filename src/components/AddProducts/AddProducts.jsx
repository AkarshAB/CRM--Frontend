import React, { useEffect, useState } from 'react'
import './AddProducts.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddProducts() {

  const [formData, setFormData] = useState({
    shop_name: '',
    image: '',
    pro_company: '',
    product_name: '',
    description: '',
    price: '',
    selling_price: '',
    stock_quantity: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token')
    try {
      const response = await axios.post('',
        formData,
        {
          headers: {
            Authorization: `Token ${token}`
          }
        })
      Swal.fire({
        title: "Product added successfully!",
        icon: "success"
      });

    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    console.log(formData); // This will log the updated formData
  }, [formData]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({...formData, [name]:(value)});
      console.log(formData)
  }

  return (
    <>
      <MDBContainer fluid className="mt-5 shopAddWrapper col-6">
        <section>
          <MDBRow className="justify-content-center">
            <MDBCol lg="8">
              <form>
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      className="mb-4"
                      label="Shop Name"
                      name="shop_name"
                      value={formData.shop_name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  className="mb-4"
                  label="Product Company"
                  name="pro_company"
                  value={formData.pro_company}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Product Name"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Description "
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Selling Price "
                  name="selling_price"
                  value={formData.selling_price}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Stock Quantity "
                  name="stock_quantity"
                  type='number'
                  value={formData.stock_quantity}
                  onChange={handleChange}
                />
                <label htmlFor="">Choose product image</label>
                <MDBInput
                  className="mb-4"
                  type='file'
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
                <div className="text-center">
                  <button
                    className="btn btn-primary col-6"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Add Products
                  </button>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </>
  )
}

export default AddProducts