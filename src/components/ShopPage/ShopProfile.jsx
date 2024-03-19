import React from 'react'
import './ShopProfile.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


function ShopProfile() {

  const id = useParams()
  console.log(id)

  const fetchShopDetails = async() => {
    const token = localStorage.getItem('token')
    const response = await axios.get(`http://127.0.0.1:8000/shop_app/shops/${id}`,
    {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    console.log(response)
  }
  
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-8 homeLeft">
            <h3 className='text-center my-3 text-decoration-underline'>Shop Profile</h3>


            <div className="ownerDetails">

              <table>
                <tr>
                  <td>Shop Name:</td>
                  <td>Ration Kada</td>
                </tr>
                <tr>
                  <td>Owner Name:</td>
                  <td>Akarsh</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>Alayil House P.O. Kothaparambu, Kodungallur, Thrissur Dt.</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>aka@gmail.com</td>
                </tr>
                <tr>
                  <td>Shop Mobile Number:</td>
                  <td>8921400258</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-4 homeRight">

            <p><Link to={'/Manage-Employees'}>Manage Employees</Link></p>
            <p><Link to={'/inventory'}>Inventory</Link></p>
            <p><Link to={'/billing'}>Billing</Link></p>
            <p><Link to={'/stocks'}>Stocks</Link></p>
            <p><Link to={'/service-requests'}>Service Requests</Link></p>
            <Link to={'/BillingHistory'}> <button className='btn btn-primary'>Billing History</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopProfile