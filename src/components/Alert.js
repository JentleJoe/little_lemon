import React from 'react'

const Alert = ({text, color}) => {
  return (
    <div className='dialogbx-container'>
        <div className={`dialogbx ${color}`}>{text}</div>
    </div>
  )
}

export default Alert