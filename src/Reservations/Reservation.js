import React from 'react';
import './Reservation.css';

const Reservation = (props) => {

 const { name, id, date, time, number, cancelReservation} = props
  return(
    <section className='reservation'>
    <h2>{name}</h2>
    <p>{date}</p>
    <p>{time}</p>
    <p>Number of guest {number}</p>
    <div type='button' className='cancel__btn' onClick={()=>cancelReservation(id)}>Cancel</div>
    </section>
  )

}

export default Reservation;