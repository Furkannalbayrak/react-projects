import React from 'react'
import '../css/Products.css'
import {useNavigate} from 'react-router-dom'

function Urun({ urun }) {
  const { category, id, title, image, price, description } = urun;

  const navigate = useNavigate();

  return (
      <div className='cards'>
        <img className='product-img' src={image} />
        <div className='product-text'>
          <p>{title}</p>
          <p className='price'>{price} $</p>
        </div>

        <div className='button-div'>
          <button  onClick={()=>navigate(`/products-details/${id}`)}  className='product-button'>Detayına git</button>
        </div>
      </div>
  )
}

export default Urun