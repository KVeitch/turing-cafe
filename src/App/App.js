import React, { Component } from 'react';
import Form from '../Form/Form'
import ReservationContainer from '../ReservationContainer/ReservationContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations:[]
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    // .then(response => {
    //   if(!response.ok) {
    //     throw new Error(`Sorry, ${response.status} error.  Please check your URL`)
    //   }
    // })
    .then(data => data.json())
    // .then(data => {console.log(data); return data})
    .then(data => this.setState({reservations:data}))
  }

  addReservation(newRes) {
    const options = {
      method: 'POST',
      body: JSON.stringify(newRes),
      headers : {
        'Content-Type' : 'application/json'
      }
    }

    fetch('http://localhost:3001/api/v1/reservations',options)


  }

  cancelReservation(id) {
    const options = {
        method: 'DELETE',
        headers : {
          'Content-Type' : 'application/json'
        }
    }
    fetch(`http://localhost:3001/api/v1/reservations/${id}`,options)
    .then(data=> {console.log('del: ',data );return data})
  }


  render() {
    return (
      <main className='App'>
        <Form 
          addReservation={this.addReservation}
        />
        
        <ReservationContainer 
          reservations ={this.state.reservations}
          cancelReservation= {this.cancelReservation}
        />
      </main>

    )
  }
}

export default App;
