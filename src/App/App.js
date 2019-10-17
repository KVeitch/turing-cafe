import React, { Component } from 'react';
import Form from '../Form/Form'
import ReservationContainer from '../ReservationContainer/ReservationContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
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
    .then(data=> {console.log(data); return data})
    .then(data => this.setState({reservations:data}))
  }

  render() {
    return (
      <main className='App'>
        <Form />
        <ReservationContainer 
          reservations ={this.state.reservations}
        />
      </main>

    )
  }
}

export default App;
