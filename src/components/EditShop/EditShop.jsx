import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

function EditShop() {

  const [formData, setFormData] = useState({
    username: '',
    shop_name: '',
    address: '',
    contact_no: '',
    email: ''
  });

  console.log(formData);

  const handleSubmit = async (e) => {


    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    console.log('Form data:', formData);
    if (!token) {
      alert('You are not authorized');
      return;
    }

    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/shop_app/shops/',
        formData,
        {
          headers: {
            Authorization: `Token ${token}`
          },
        }
      );
      console.log('Response:', response.data);
      alert('Shop added successfully:', response.data);
      setFormData({
        username: '',
        shop_name: '',
        address: '',
        contact_no: '',
        email: ''
      });
      alert('Shop added successfully');
    } catch (error) {
      console.error('Error adding shop:', error);
      alert('Error adding shop:', error);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



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
                    label="Owner Name"
                    name="username"
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                className="mb-4"
                label="Shop Name"
                name="shop_name"
                value={formData.owner_name}
                onChange={handleChange}
              />
              <MDBInput
                className="mb-4"
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <MDBInput
                className="mb-4"
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <MDBInput
                className="mb-4"
                label="Contact No."
                type="tel"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
              />
              <div className="text-center">
                <button
                  className="btn btn-primary col-6"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add Shop
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
    </>
  )
}

export default EditShop