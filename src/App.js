import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './moduels/Home';
import Login from './moduels/LOGIN';
import Footer from './components/Footer';
function App() {
  return (
    
    <div className='text-grey-600'>
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}


export default App;
