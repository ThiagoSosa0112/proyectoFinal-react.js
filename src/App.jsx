import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './componentes/NotFound';
import Cart from './container/Cart'
import ShopProvider from './context/ShopProvide';

function App() {
  return (
   <ShopProvider>
     <BrowserRouter>
      <NavBar/>
        <Routes>
         <Route path='/' element={<ItemListContainer/>}></Route>
         <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
         <Route path='/item/:productId' element={<ItemDetailContainer/>}></Route>
         <Route path= '/cart' element= {<Cart/>}></Route>
         <Route path='*' element={<NotFound/>}/>     
        </Routes>
    </BrowserRouter>
   </ShopProvider>
  );
}

export default App;



