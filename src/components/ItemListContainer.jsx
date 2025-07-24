import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { getItems, getItemsByCategory } from '../firebase/db';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      getItemsByCategory(categoryId).then(items => setProductos(items)) 
    } else {
      getItems().then(items => setProductos(items))
    }
    
  }, [categoryId]);

  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
