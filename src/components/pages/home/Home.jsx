import React, { useEffect, useState } from 'react'
import './Home.css'
// import img from '../../../assets/wp6733581.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Chart from './Chart';


function Home() {

  const [userDetails, setUserDetails] = useState({})
  const [shopListDetails, setShopListDetails] = useState([])

  useEffect(() => {
    const userData = async () => {
      try {
        const loggedInId = localStorage.getItem('id');
        console.log(loggedInId)
        const response = await axios.get('http://127.0.0.1:8000/shop_app/register/')
        console.log(response.data);
        // console.log(response);
        const loggedInUserDetails = response.data.find(user => user.id == loggedInId);
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

    const fetchShopList = async () => {
      const token = localStorage.getItem('token')
      console.log(token)
      try {
        const response = await axios.get('http://127.0.0.1:8000/shop_app/shops/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          })
        console.log('shop', response)
        setShopListDetails(response.data)
        console.log(shopListDetails)
      } catch (error) {
        console.log(error)
      }
    }

    fetchShopList()
  }, [])





  return (
    <>
      <div className="container mt-5">
        <div className="row w-75 mx-auto p-5 justify-content-around align-items-center border rowWrapper ">
          <div className="col-6 homeLeft">
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
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4 homeRight">
            <h5 className='text-center shopsSection mb-3'>SHOPS</h5>
            <div className="shopListWrapper d-flex justify-content-center align-items-center w-100 mb-3 text-center gap-5">
              <Link to={'/editShop'}><i className="fa-solid fa-edit icons"></i></Link>
              <p className='mb-0 text-center'><Link to={'/shopDetails'}>Shop 1</Link></p>
              <i className="fa-solid fa-xmark icons"></i>
            </div>

            <Link to={'/addShop'}><div className="btn btn-primary">Add Shop</div></Link>
          </div>
        </div>
      </div>

      <Chart />
    </>
  )
}

export default Home