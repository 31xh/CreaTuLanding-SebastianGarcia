import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    fetch('https://685432bd5470323abe951525.mockapi.io/api/v1/products')
    .then(response => response.json())
    .then(data => {
      if (categoryId) {
        setProductos(data.filter(prod => String(prod.categoriaId) === String(categoryId)))
      } else {
        setProductos(data)
      }
    })
    
    .catch(error => console.error('Error fetching products:', error));
  }, [categoryId]);

  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
