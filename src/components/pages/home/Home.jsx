import React from 'react'
import './Home.css'
import img from '../../../assets/wp6733581.jpg'
import { Link } from 'react-router-dom'

function Home() {

  const user = localStorage.getItem('username')
  const email = localStorage.getItem('email')
  return (
    <>
      <div className="container">
        <div className="row mt-3 justify-content-center align-items-center ">
          {/* <div className="col-6 homeLeft">
            <h3 className='text-center my-3 '>OWNER PROFILE</h3> */}


          {/* <div className="ownerDetails"> */}

          {/* <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{user}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table> */}
          {/* </div> */}
          {/* </div> */}
          <div className="col-6 homeRight">
            <h5 className='text-center shopsSection mb-3'>SHOPS</h5>
            <p><Link to={'/shopDetails'}>Shop 1</Link></p>
            <p><Link to={'/shopDetails'}>Shop 2</Link></p>
            <p><Link to={'/shopDetails'}>Shop 3</Link></p>
            <p><Link to={'/shopDetails'}>Shop 4</Link></p>
            <p><Link to={'/shopDetails'}>Shop 5</Link></p>
            <Link to={'/addShop'}><div className="btn btn-primary">Add Shop</div></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home