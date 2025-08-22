import React from 'react'

function Course({ kurslarim }) {

  const { id, title, description, price, link, image } = kurslarim;

  return (
    <div className='card'>
      <div>
        <img className='resim' src={image} alt="" />
        <h2 className='course-title'>{title}</h2>
        <div className='description'>{description} </div>
        <p className='price'>{price}</p>
        <div className='showMore'>
          <a className='showMoreChild' href={link} >Daha fazla goruntule</a>
        </div>

      </div>
    </div>
  )
}

export default Course
