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
  const handleChange = (e) => {
    const { name, value } = e.target;
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
                      name=""
                      value={formData.shop_name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  className="mb-4"
                  label="Product Company"
                  name=""
                  value={formData.pro_company}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Product Name"
                  type=""
                  name=""
                  value={formData.product_name}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Description "
                  type=""
                  name=""
                  value={formData.description}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Price"
                  type=""
                  name=""
                  value={formData.price}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Selling Price "
                  type=""
                  name=""
                  value={formData.selling_price}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Stock Quantity "
                  type=""
                  name=""
                  value={formData.stock_quantity}
                  onChange={handleChange}
                />
                <label htmlFor="">Choose product image</label>
                <MDBInput
                  className="mb-4"
                  type='file'
                  name=""
                  value={formData.image}
                  onChange={handleChange}
                />
                <div className="text-center">
                  <button
                    className="btn btn-primary col-6"
                    type="submit"
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