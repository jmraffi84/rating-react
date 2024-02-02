
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';

const productData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10,
    title: "Gharag",
    rating: 4,
    description: "This is the test item for demo purpose",
    count: 0,
    inCart: false,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1658836516806-b74c94d50675?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10,
    title: "Gharag",
    rating: 3,
    description: "This is the test item for demo purpose",
    count: 0,
    inCart: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1658836516806-b74c94d50675?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10,
    title: "Gharag",
    rating: 5,
    description: "This is the test item for demo purpose",
    count: 0,
    inCart: false,

  },
]
function App() {
  const [cart, setCart] = useState([]);
  const [button, setButton] = useState(false)
  const addToCart = (productId) => {

    setCart((prevCart) => [...prevCart, productId]);
  };

  const removeCart = (productId) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };

  return (
    <div className="App">
      <Header productData={productData} addToCart={addToCart} removeCart={removeCart} cart={cart} />
      <Routes>
        <Route path='/' exact element={<Home productData={productData} addToCart={addToCart} removeCart={removeCart} />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
