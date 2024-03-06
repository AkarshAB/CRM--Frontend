import './App.css';
import Header from './components/common/header/Header.jsx';
import Login from './components/pages/login/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import Register from './components/pages/register/Register.jsx';
import Footer from './components/common/footer/Footer.jsx';
import Home from './components/pages/home/Home.jsx';
import ShopProfile from './components/ShopPage/ShopProfile.jsx';
import ShopAdding from './components/ShopAdding/ShopAdding.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Billing from './components/Billing/Billing.jsx';
import Stocks from './components/Stocks/Stocks.jsx';
import BackButton from './components/common/Back Button/BackButton.jsx';
import BillingHistory from './components/BillingHistory/BillingHistory.jsx';
import ServiceRequests from './components/ServiceRequests/ServiceRequests.jsx';
import AddEmployee from './components/AddEmployee/AddEmployee.jsx';
import ManageEmployee from './components/ManageEmployee/ManageEmployee.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <BackButton />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/shopDetails' element={<ShopProfile />}></Route>
        <Route path='/addShop' element={<ShopAdding />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/stocks' element={<Stocks />}></Route>
        <Route path='/billing' element={<Billing />}></Route>
        <Route path='/BillingHistory' element={<BillingHistory />}></Route>
        <Route path='/service-requests' element={<ServiceRequests />}></Route>
        <Route path='/Manage-Employees' element={<ManageEmployee />}></Route>
        <Route path='/Add-Employee' element={<AddEmployee />}></Route>
      </Routes>
      <Footer />
      <div className=''></div>
    </div>
  );
}

export default App;
