import React from 'react'
import FeedbackCard from './FeedbackCard'
import { userReview } from '../constants'

function Testimonials() {
  return (
    <section className='testimonials-section'>
      <h2>TESTIMONIALS</h2>
      <div className='fbcards-container'>
      {
        userReview.map((user, index) => {
          return(
          <FeedbackCard key={index} img={user.img} date={user.date}
          review={user.review} name={user.name} bio={user.bio} />
        )})
      }
      </div>
    </section>
  )
}

export default Testimonials