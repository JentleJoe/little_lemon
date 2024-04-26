import React from 'react'
import Button from './Button'

const Reservations = () => {
  return (
    <section className='reservations'>
        <h2>Book A Table</h2>
        <div className='rsrv-container'>
            <form className='rsrv-form'>
                <div className='rsv-input'>
                    <label htmlFor='occassion'>Select Occassion</label>
                    <select id='occassion'>
                        <option value="occassion">Occassion</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <div className='rsv-input'>
                    <label htmlFor='date'>Select Date</label>
                    <input type='date' id='date' name='date' />
                </div>
                <div className='rsv-input'>
                    <label htmlFor='time'>Select Time</label>
                    <select id='time'>
                        <option value=""></option>
                        <option value="">8:00</option>
                        <option value="">10:00</option>
                        <option value="">12:00</option>
                        <option value="">14:00</option>
                        <option value="">16:00</option>
                        <option value="">18:00</option>
                    </select>
                </div>
                <div className='rsv-input'>
                    <label htmlFor='number'>Number of people</label>
                    <select id='number'>
                        <option value=""></option>
                        <option value="">2 people</option>
                        <option value="">4 people</option>
                        <option value="">6 people</option>
                        <option value="">8 people</option>
                    </select>
                </div>
                <div className='rsv-input'>
                    <label htmlFor='location'>Select Table location</label>
                    <select id='location'>
                        <option value="">Indoor</option>
                        <option value="">Outdoor</option>
                    </select>
                </div>
                <Button text="Confirm Order" />
            </form>
            <div className='open-details'>
                <h3 className='open-head'>OPENING HOURS</h3>
                <div className='open-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Et, inventore hic nulla, provident laudantium voluptate
                    ipsa eligendi commodi mollitia vero animi, repudiandae
                    quidem minima est sint sapiente quas iure deleniti.
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
  )
}

export default Reservations