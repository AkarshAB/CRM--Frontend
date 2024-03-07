import React, { useEffect } from 'react'
import './AddProducts.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';

function AddProducts() {

  const [formData, setFormData] = useState({

  })

  useEffect(() => {

  }, [])

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
                      label="Product Name"
                      name=""
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  className="mb-4"
                  label="Brand Name"
                  name=""
                />
                <MDBInput
                  className="mb-4"
                  label="price"
                  name=""
                />
                <MDBInput
                  className="mb-4"
                  label=""
                  type=""
                  name=""
                />
                <MDBInput
                  className="mb-4"
                  label=" "
                  type=""
                  name=""
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