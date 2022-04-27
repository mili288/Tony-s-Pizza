import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from './pages/Cart';
import ProductDetail from './helpers/ProductDetail';
import Checkout from './pages/Checkout'

function App() {
  return ( <div className="App">
    <Router>
  <Navbar /> 
  <Routes> 
    <Route path="/"  element={<Home/>} />
    <Route path="/menu"  element={<Menu/>} />
    <Route path="/products/:id" element={<ProductDetail/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/about"  element={<About/>} />
    <Route path="/contact"  element={<Contact/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="*"/>
  </Routes>
   <Footer />
  </Router>
  </div>
  );
}

export default App;



