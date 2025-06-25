import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const { prodId } = useParams()

  useEffect(() => {
    fetch(`https://685432bd5470323abe951525.mockapi.io/api/v1/products/${prodId}`)
      .then(resp => resp.json())
      .then(data => setItem(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [prodId])

  return (
    <div className='my-5'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
