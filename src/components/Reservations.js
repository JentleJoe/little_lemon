import React from 'react'

const Reservations = () => {
  return (
    <section>
        <h1>Book a Table</h1>
        <div className='form-container'>
            <form className='rsrv-form'>
                <label htmlFor='occassion'>Select Occassion</label>
                <select id='occassion'>
                    <option value="occassion">Occassion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <label htmlFor='date'>Select Date</label>
                <input type='date' id='date' name='date' />
                <label htmlFor='time'>Select Time</label>
                <select id='time'>
                    <option value="">0:00</option>
                    <option value="">8:00 am</option>
                    <option value="">11:00 am</option>
                    <option value="">2:00 pm</option>
                    <option value="">5:00 pm</option>
                </select>
                <label htmlFor='number'>Number of people</label>
                <select id='number'>
                    <option value=""></option>
                    <option value="">2 people</option>
                    <option value="">4 people</option>
                    <option value="">6 people</option>
                    <option value="">8 people</option>
                </select>
                <label htmlFor='location'>Select Table location</label>
                <select id='location'>
                    <option value="">Indoor</option>
                    <option value="">Outdoor</option>
                </select>
            </form>
        </div>
    </section>
  )
}

export default Reservations