import React from 'react'

const ItemDetailMedia = ({item}) => {
  return (
    <div>
      {item.hasVideo ? <video className='h-75 w-100' src={item.video} loop autoPlay></video> : <img src={item.image} className='img-fluid text-center' alt='#'/>}
    </div>
  )
}

export default ItemDetailMedia
