import React from 'react'
import star from '../assets/img/5-Star.png'

const FeedbackCard = () => {
  return (
    <div className='fb-card'>
        <div className='fb-header'>
            <div className='star-imgbx'>
                <img src={star} className='star' width={"100"}/>
            </div>
            <div className='fb-date'>10th March, 2024</div>
        </div>
        <div className='fb-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud
        </div>
        <div className='fb-persona'>
            <div className='fb-imgbx'>
                <img alt='user' />
            </div>
            <div className='user-details'>
                <div className='user-name'>Ray Robertson</div>
                <div className='user-about'>CEO Company</div>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard