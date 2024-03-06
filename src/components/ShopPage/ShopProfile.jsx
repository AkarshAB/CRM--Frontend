import React from 'react'
import './ShopProfile.css'
import { Link } from 'react-router-dom'


function ShopProfile() {
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