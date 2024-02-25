import './App.css';
import Header from './components/common/header/Header.jsx';
import Login from './components/pages/login/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import Register from './components/pages/register/Register.jsx';
import Footer from './components/common/footer/Footer.jsx';
import Home from './components/pages/home/Home.jsx';
import ShopProfile from './components/ShopPage/ShopProfile.jsx';
import ShopAdding from './components/ShopAdding/ShopAdding.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/shopDetails' element={<ShopProfile />}></Route>
        <Route path='/addShop' element={<ShopAdding />}></Route>
      </Routes>
      <div className=''><Footer /></div>
    </div>
  );
}

export default App;
