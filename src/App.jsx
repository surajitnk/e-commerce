import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import Home from './pages/Home'; 
import MyState from './context/myState';
import Login from './pages/Registration/Login';
import Signup from './pages/Registration/Signup';
import Productinfo from './pages/Productinfo/Productinfo';
import Dashboard from './pages/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import AddProduct from './pages/Products/Addproduct';
import Order from './pages/order/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Protection = ({children}) => {
    if (localStorage.getItem('user')) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };
  const AdminProt = ({children}) => {
     const admin = JSON.parse(localStorage.getItem('user'))
     if(admin.user.email == 'sharm@ghy.com'){
      return children;
     }

     else{
      return <Navigate to="/login" />;
     }
  }

  return (
    <MyState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Define Home route */}
          <Route 
            path="/order" 
            element={
              <Protection>
                <Order />
              </Protection>
            } 
          />
          <Route path="/dashboard" element={
            <AdminProt><Dashboard /></AdminProt>
          } />          
          <Route path="/login" element={<Login />} /> 
          <Route path="/addproduct" element={<AddProduct />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/productinfo/:id" element={<Productinfo />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;
