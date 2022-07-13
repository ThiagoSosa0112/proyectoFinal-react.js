import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './componentes/NotFound';
import ItemDetail from './componentes/ItemDetail';
import Cart from './container/Cart'
function App() {
  return (
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
  );
}

export default App;

