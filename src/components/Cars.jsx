import React from 'react'
import './styles/Cars.css'
function Cars(props) {
  const cars = props.cars
  console.log(cars)
  return (
    <section className='cars orange'>
      <div className='orange'>
        <img src={cars[0].imgUrl} alt={cars[0].title} />
        <h2>{cars[0].title}</h2>
        <p>{cars[0].description}</p>
      </div>
    </section>

  )
}
export default Cars