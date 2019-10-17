import React, { Component } from 'react';
import Form from '../Form/Form'
import ReservationContainer from '../ReservationContainer/ReservationContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Form />
        <ReservationContainer />
      </>

    )
  }
}

export default App;
