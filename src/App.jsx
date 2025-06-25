import React from 'react'
import Nabvar from './components/Nabvar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nabvar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/product/:prodId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
