import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './components/containers/cart/CartContext';
import Cart from './components/containers/cart/Cart';
import ItemListContainer from './components/containers/items/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/containers/details/ItemDetailContainer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/pokeminis/" element={<ItemListContainer/>}/>
          <Route path="/pokeminis/type/:typeId" element={<ItemListContainer/>}/>
          <Route path="/pokeminis/details/:detailsId" element={<ItemDetailContainer/>}/>
          <Route path="/pokeminis/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;