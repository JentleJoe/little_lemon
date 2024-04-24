import React from 'react'
import Button from './Button'

const Promotion = () => {
  return (
    <section className='promotion-section'>
      <div className="promo-details">
        <h2>GET<span className='discount'> 30%</span> OFF RESERVATIONS<br />
         MADE TODAY ONLY <span className='exclam'>!!!</span>
        </h2>
        <Button text="Reserve Table" />
      </div>
    </section>
  )
}

export default Promotion