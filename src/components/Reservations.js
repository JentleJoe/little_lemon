import React from 'react'
import Button from './Button'
import { useState } from 'react'
import Alert from './Alert'
import { dialogBox } from '../constants'

const Reservations = ({toggleIconClose, handleAlert}) => {

    const [formData, setFormData] = useState({})
    const [showDialog, setShowDialog] = useState(false)

    const alertMessage = dialogBox.bookingSuccess.text
    const alertColor = dialogBox.bookingSuccess.color

    // SELECT STATE MANAGEMENT
    const selectedOccassion = [
        { value: 'birthday', label: 'Birthday' },
        { value: 'engagement', label: 'Engagement' },
        { value: 'anniversry', label: 'Anniversary' }
    ]
    const selectedTime = [
        {value: "8:00", label: "8:00"},
        {value: "10:00", label: "10:00"},
        {value: "12:00", label: "12:00"},
        {value: "14:00", label: "14:00"},
        {value: "16:00", label: "16:00"},
        {value: "18:00", label: "18:00"}
    ]
    const selectedNumber = [
        {value: "2",  label: "2 people"},
        {value: "4",  label: "4 people"},
        {value: "6",  label: "6 people"},
        {value: "8",  label: "8 people"}
    ]
    const selectedLocation = [
        {value: "indoor", label: "Indoor"},
        {value: "Outdoor", label: "Outdoor"}
    ]

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevData) => {
            return({
                ...prevData,
                [name] : value
            })
        } )
        console.log(formData)
    }

    const handleDialog = () => {
        !showDialog && setShowDialog((prev) => !prev) //displays Alert
        // show order summary
        // unmount order summary componnt on button click
        setTimeout(() => {
            setShowDialog((prev) => !prev)
        }, 1000);
    }

    const resetForm = () => {
        setFormData({
            occassion: "",
            time: "",
            number: "",
            location: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // handleDialog() //Handles Alert message locally
        handleAlert(alertMessage, alertColor) //Handles Alert Message from Parent
        // Submit form to API
    }

  return (
    <>
    {showDialog && <Alert text={alertMessage} color={alertColor}/>}
    <section className='reservations' id='reservations'>
        <h2>Book A Table</h2>
        <div className='rsrv-container'>
            <form className='rsrv-form' onSubmit={handleSubmit}>
                <div className='rsvform-container'>
                    <div className='rsv-input'>
                        <label htmlFor='occassion'>Select Occassion</label>
                        <select name='occassion' onChange={handleChange} id='occassion' required>
                            <option value="">Select Occassion</option>
                            {/* map selectedOccassion array */}
                            {
                                selectedOccassion.map((occassion) => {
                                    return(
                                        <option key={occassion.value} value={occassion.value}>
                                            {occassion.label}
                                        </option>
                                    )
                                })
                            }
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
                            {
                                selectedTime.map((occassion) => {
                                    return(
                                        <option key={occassion.value} value={occassion.value}>
                                            {occassion.label}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='number'>Number of people</label>
                        <select name='number' onChange={handleChange} id='number' required>
                            <option value="">Select Number</option>
                            {
                                selectedNumber.map((occassion) => {
                                    return(
                                        <option key={occassion.value} value={occassion.value}>
                                            {occassion.label}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='location'>Select Table location</label>
                        <select name='location' onChange={handleChange} id='location'>
                            {
                                selectedLocation.map((occassion) => {
                                    return(
                                        <option key={occassion.value} value={occassion.value}>
                                            {occassion.label}
                                        </option>
                                    )
                                })
                            }
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