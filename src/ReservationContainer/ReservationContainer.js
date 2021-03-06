import React from 'react';
import './ReservationContainer.css';
import Reservation from '../Reservations/Reservation'

const ReservationContainer = (props)=>{
  const cardList = props.reservations.map(res => 
    <Reservation
      key= {res.id} 
      date = {res.date}
      id = {res.id}
      name = {res.name}
      number = {res.number}
      time = {res.time}
      cancelReservation = {props.cancelReservation}
    />
  )

  return (<section className='section__reservation'>
    {cardList}
    </section>
  )

}

export default ReservationContainer;