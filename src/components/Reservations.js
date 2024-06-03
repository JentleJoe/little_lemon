import React from 'react'
import Button from './Button'
import { useState } from 'react'
import Dialog from './Dialog'
import { dialogBox } from '../constants'

const Reservations = ({toggleIconClose}) => {

    const [formData, setFormData] = useState({location: "indoor"})
    const [showDialog, setShowDialog] = useState(false)

    const alertMessage = dialogBox.bookingSuccess.text
    const alertColor = dialogBox.bookingSuccess.color

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevData) => {
            return({
                ...prevData,
                [name] : value
            })
        } )
    }
 
    const handleDialog = () => {
        !showDialog && setShowDialog((prev) => !prev) //displays dialog
        // delay for 2 seconds
        // showDialog && setShowDialog((prev) => !prev)  //closes dialog
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        handleDialog()
    }

  return (
    <>
    {showDialog && <Dialog text={alertMessage} color={alertColor}/>}
    <section className='reservations' id='reservations'>
        <h2>Book A Table</h2>
        <div className='rsrv-container'>
            <form className='rsrv-form' onSubmit={handleSubmit}>
                <div className='rsvform-container'>
                    <div className='rsv-input'>
                        <label htmlFor='occassion'>Select Occassion</label>
                        <select name='occassion' onChange={handleChange} id='occassion' required>
                            <option value="">Select Occassion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='date'>Select Date</label>
                        <input type='date' id='date' name='date' required onChange={handleChange}/>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='time'>Select Time</label>
                        <select name='time' onChange={handleChange} id='time' required>
                            <option value="">Select Time</option>
                            <option value="8:00">8:00</option>
                            <option value="10:00">10:00</option>
                            <option value="12:00">12:00</option>
                            <option value="14:00">14:00</option>
                            <option value="16:00">16:00</option>
                            <option value="18:00">18:00</option>
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='number'>Number of people</label>
                        <select name='number' onChange={handleChange} id='number' required>
                            <option value="">Select Number</option>
                            <option value="2">2 people</option>
                            <option value="4">4 people</option>
                            <option value="6">6 people</option>
                            <option value="8">8 people</option>
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='location'>Select Table location</label>
                        <select name='location' onChange={handleChange} id='location'>
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                        </select>
                    </div>
                </div>
                <div className='rsrv-button' onClick={toggleIconClose}>
                    <Button text="Confirm Order" />
                </div>
            </form>
            <div className='open-details'>
                <h3 className='open-head'>OPENING HOURS</h3>
                <div className='open-text'>
                    Little lemon restaurant works round the clock as
                    we strive to always be there for our customers. <br/>
                    We operate from 8am to 10pm on the weekdays, on Saturdays
                    we are open from 9am to 5pm and on Sundays from
                    12noon till 6pm.
                </div>
                <div className='open-days'>
                    <p className='day'>Monday - Friday</p>
                    <p className='time'>8AM - 10AM</p>
                </div>
                <div className='open-days'>
                    <p className='day'>Saturday</p>
                    <p className='time'>9AM - 5PM</p>
                </div>
                <div className='open-days'>
                    <p className='day'>Sunday</p>
                    <p className='time'>12PM - 6PM</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Reservations