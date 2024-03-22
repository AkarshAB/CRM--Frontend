import React, { useEffect, useState } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Await, useParams } from 'react-router';


function EditInventory() {
  //get
  const [result, setResult] = useState(null)
  const { id } = useParams()

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchInventoryData = async () => {
      try {
        const response = await axios.get(
          ``,
          {
            headers: {
              Authorization: `Token ${token}`
            },
          }
        );
        setResult(response.data);
        if (response.data) {
          setFormData({
            shop_name:response.data.shop_name ||'',
            image:response.data.image || '',
            pro_company:response.data.pro_company || '',
            product_name:response.data.product_name || '',
            description:response.data.description || '',
            price:response.data.price || '',
            selling_price:response.data.selling_price || '',
            stock_quantity:response.data.stock_quantity || ''
          });
        }

      }
      catch (error) {
        console.error('error fetching inventory data', error);
        alert('error fetching inventory data', error);
      }
    }
    fetchInventoryData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    try {
      const response = await axios.put(`${id}`,
        formData, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      alert('edited')
    } catch (error) {
      console.log(error);
    }
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
                  value={formData.stock_quantity}
                  type='number'
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

                    save Changes
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

export default EditInventory