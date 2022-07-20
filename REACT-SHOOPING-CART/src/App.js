import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Nav from './Components/Nav';
import ProductList from './ProductList';
import Cart from './Components/Cart';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' exact element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  )
}

export default App;
