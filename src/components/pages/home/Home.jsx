import React, { useEffect, useState } from 'react'
import './Home.css'
// import img from '../../../assets/wp6733581.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home() {

  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    const userData = async () => {
      try {
        const loggedInUsername = localStorage.getItem('username');
        const response = await axios.get('http://127.0.0.1:8000/shop_app/register/')
        // console.log(response.data);
        // console.log(response);
        const loggedInUserDetails = response.data.find(user => user.username === loggedInUsername);
        // setUserDetails(response.data)
        if (loggedInUserDetails) {
          setUserDetails(loggedInUserDetails);
        } else {
          console.log('Logged-in user details not found.');
        }
        // console.log(userDetails);
      }
      catch (error) {
        console.log(error);
      }
    }
    userData();
  }, [])





  return (
    <>
      <div className="container">
        <div className="row mt-3 justify-content-center align-items-center ">
          <div className="col-8 homeLeft">
            <h3 className='text-center my-3 '>OWNER PROFILE</h3>


            <div className="ownerDetails">

              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{userDetails.username}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{userDetails.email}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-2 homeRight">
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