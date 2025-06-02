import React from 'react'
import Nabvar from './components/Nabvar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer';



const App = () => {
  return (
    <div>
      <Nabvar/>
      <ItemListContainer greeting="ASUS la mejor opcion"/>
    </div>
  )
}

export default App
