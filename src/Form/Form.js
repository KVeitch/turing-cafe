import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state= {
      name : '',
      date: '',
      time: '',
      numGuest:'',

    }
  }

  handleChange(event) {
    console.log(event)
    this.setState({ [event.target.name]:event.target.value })
  }

  render() {
    return (
      <>
        <input name='name' value={this.state.name} onChange={(event)=>this.handleChange(event)}/>
        <input name='date' value={this.state.date} onChange={(event)=>this.handleChange(event)}/>
        <input name='time' value={this.state.time} onChange={(event)=>this.handleChange(event)}/>
        <input name='numGuest' value={this.state.numGuest} onChange={(event)=>this.handleChange(event)}/>
        <div type="button"> Set Reservation</div>
      </>
    )
  }


}

export default Form;