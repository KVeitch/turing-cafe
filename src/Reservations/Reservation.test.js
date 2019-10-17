import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Reservation from './Reservation';

describe('Filled Reservation',()=>{
  let wrapper, res;
  const mockCancelReservation = jest.fn();

  beforeEach(()=> {

    res={
      key: 1,
      date : '12/12',
      id : 1,
      name : 'Susan Boyle',
      number : 36,
      time : '7:20',
      cancelReservation : mockCancelReservation
    }
    wrapper = shallow(<Reservation 
                          key= {res.id} 
                          date = {res.date}
                          id = {res.id}
                          name = {res.name}
                          number = {res.number}
                          time = {res.time}
                          cancelReservation = {res.cancelReservation}
    
                        />)
  })

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

})






describe('Empty Reservation',()=>{
  let wrapper;
  
  beforeEach(()=> {
    wrapper = shallow(<Reservation />)
  })

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

})