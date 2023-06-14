import './App.css';
import React ,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './moduels/Home';
import Login from './moduels/LOGIN';
import Footer from './components/Footer';
import ProductM from './moduels/ProductsM';
import Signup from './moduels/SIGNUP';
import Cart from './moduels/Cart';
import Logout from './moduels/LOGOUT/Logout'
import { useLocation } from 'react-router-dom';
function App() {
  const [refreshHeader, setRefreshHeader] = useState(false);

  // Custom hook to listen for route changes
  const useRouteChange = () => {
    const location = useLocation();

    React.useEffect(() => {
      // Check if the current route is "/"
      if (location.pathname === "/") {
        // Set the refreshHeader state to true
        setRefreshHeader(true);
      } else {
        // Set the refreshHeader state to false
        setRefreshHeader(false);
      }
    }, [location]);
  };

  // Call the custom hook to listen for route changes
  useRouteChange();


  return (
    <div className='text-grey-600'>
      {refreshHeader && <Header />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item-details/:itemId" element={<ProductM />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product" element={<ProductM />} />
          <Route path="/cart-details" element={<Cart />} />
          <Route path="/logout" element={<Logout />} />
          
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <Footer /> 
    </div>
  );
}

export default App;
