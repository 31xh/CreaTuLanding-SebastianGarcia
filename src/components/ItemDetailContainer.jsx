import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getItemById } from '../firebase/db'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const { prodId } = useParams()

  useEffect(() => {
    getItemById(prodId)
      .then(item => setItem(item))
  }, [prodId])

  return (
    <div className='my-5'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
