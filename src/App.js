import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './moduels/Home';
import Login from './moduels/LOGIN';
import Footer from './components/Footer';
import { Routes , Route } from 'react-router-dom';
import ItemDetails from './components/ItemDetails';
import ProductM from './moduels/ProductsM';
import Signup from './moduels/SIGNUP';
function App() {
  return (
    <div className='text-grey-600'>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item-details/:itemId" element={<Home/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<ProductM />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
