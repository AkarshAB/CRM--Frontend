import React from 'react'
import './AddProducts.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

function AddProducts() {
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