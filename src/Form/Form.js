import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state= {
      name : '',
      date: '',
      time: '',
      number:'',

    }
  }

  handleChange(event) {
    console.log(event)
    this.setState({ [event.target.name]:event.target.value })
  }

  handleClick = () => {
    this.props.addReservation({ ...this.state })
    this.setState({ name:'', date:'', time:'', number:''})
  }

  render() {
    console.log(this.props)
    return (
      <form>
        <input 
          name='name' 
          placeholder='Name'
          value={this.state.name} 
          onChange={(event)=>this.handleChange(event)}
        />
        <input 
          name='date' 
          placeholder='Date (mm/dd)'
          value={this.state.date} 
          onChange={(event)=>this.handleChange(event)}
        />
        <input 
          name='time' 
          placeholder='Time'
          value={this.state.time} 
          onChange={(event)=>this.handleChange(event)}
        />
        <input 
          name='number' 
          placeholder='Numberof Guests'
          value={this.state.numGuest} 
          onChange={(event)=>this.handleChange(event)}
        />
        <div type="button" className='btn__reservation' onClick={this.handleClick}> Set Reservation</div>
      </form>
    )
  }


}

export default Form;