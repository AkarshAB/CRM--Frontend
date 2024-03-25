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

  const [image, setImage] = useState()

  const [data, setData] = useState({
    shop_name: '',
    image: '',
    pro_company: '',
    product_name: '',
    description: '',
    price: '',
    selling_price: '',
    // stock_quantity: ''
  });

  const formData = new FormData()
  formData.append("shop_name", data.shop_name)
  formData.append("pro_company", data.pro_company)
  formData.append("product_name", data.product_name)
  formData.append("description", data.description)
  formData.append("price", data.price)
  formData.append("selling_price", data.selling_price)
  formData.append("image", data.image)


  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token')
    try {
      const response = await axios.post('http://127.0.0.1:8000/shop_app/products/',
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
      Swal.fire({
        title: "Product added successfully!",
        icon: "success"
      });
      setData({})

    } catch (error) {
      console.log(error);
      alert(error)
    }

  }
  useEffect(() => {
    console.log(data); // This will log the updated data
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: (value) });
    // console.log(data)
  }

  return (
    <>
      <MDBContainer fluid className="mt-3 shopAddWrapper col-6">
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
                      value={data.shop_name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  className="mb-4"
                  label="Product Company"
                  name="pro_company"
                  value={data.pro_company}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Product Name"
                  name="product_name"
                  value={data.product_name}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Description "
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Price"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                />
                <MDBInput
                  className="mb-4"
                  label="Selling Price "
                  name="selling_price"
                  value={data.selling_price}
                  onChange={handleChange}
                />
                {/* <MDBInput
                  className="mb-4"
                  label="Stock Quantity "
                  name="stock_quantity"
                  type='number'
                  value={data.stock_quantity}
                  onChange={handleChange}
                /> */}
                <label htmlFor="">Choose product image</label>
                <MDBInput
                  className="mb-4"
                  type='file'
                  name="image"
                  // value={data.image}
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <div className="text-center">
                  <button
                    className="btn btn-primary col-6 mb-5"
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