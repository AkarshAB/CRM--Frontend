import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  console.log(username, email, password)

  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);


  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/shop_app/register/', {
        username: username,
        email: email,
        password: password
      });
      // alert('Registered successfully')
      Swal.fire({
        title: "Registered successfully",
        // text: "You clicked the button!",
        icon: "success"
      });
      console.log(response);

      navigate('/')
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
    } catch (error) {
      setError('Error registering user: ' + error.response.data.message);
      console.error('Error registering user:', error);
      // alert('Error registering user: ' + error.response.data.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };


  return (
    <>
      <div className={`loginMidWrapper ${fadeIn ? 'fade-in' : ''}`}>
        <div className="p-5">
          <div className="leftAndRightWrapper d-flex rounded">
            <div className="col-6 leftSide d-flex align-items-center">
              <div className="welcomeText text-center d-flex justify-content-center align-items-center flex-column">
                <h6 className='text-warning'>EXPERIENCE US!</h6>
                <h2>Effortless Transactions, Instant Records, and Seamless Management Await. Let's Simplify Your Shop's Success!</h2>
              </div>
            </div>
            <div className="col-6 loginRight">
              <div className="loginBox col-8">
                <h5 className='text-center'>REGISTER</h5>
                <label htmlFor="">Username</label>
                <input type="text" name="username" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="" className='mt-2'>Email</label>
                <input type="text" name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="" className='mt-2'>Password</label>
                <input type="password" name="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className='btn btn-success loginButton col-5 mt-4' onClick={handleRegister}>
                  Register
                </button>

                <p className='mt-3'>Already our customer <Link to={'/'}>Login Here..</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register