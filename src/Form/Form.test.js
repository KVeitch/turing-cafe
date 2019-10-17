import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Form from './Form';

describe('Form',()=>{
  let wrapper;
  
  beforeEach(()=> {
    wrapper = shallow(<Form />)
  })

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('handleChange', ()=>{

    it('should change state.name when handleChange is called from name',()=>{
      const event = {
        target:{
          name:'name',
          value:'Bob'
        } 
       }

      wrapper.instance().handleChange(event)
      expect(wrapper.state().name).toEqual('Bob') 
    })

    it('should change state.date when handleChange is called from date',()=>{
      const event = {
        target:{
          name:'date',
          value:'12/12'
        } 
       }
       wrapper.instance().handleChange(event)
       expect(wrapper.state().date).toEqual('12/12')
    })

    it('should change state.time when handleChange is called from time',()=>{
      const event = {
        target:{
          name:'time',
          value:'7:00'
        } 
       }
       wrapper.instance().handleChange(event)
       expect(wrapper.state().time).toEqual('7:00')
    })

    it('should change state.number when handleChange is called from number',() => {
      const event = {
        target:{
          name:'number',
          value:36
        } 
       }
       wrapper.instance().handleChange(event)
       expect(wrapper.state().number).toEqual(36)
    })
  })

  describe('handleClick', () => {
    it('should call handleClick when the button is clicked',()=>{
      wrapper.instance().handleClick= jest.fn();
      wrapper.instance().props.addReservation = jest.fn();
      wrapper.update()
      wrapper.find('.btn__reservation').simulate('click');

      expect(wrapper.instance().handleClick).toHaveBeenCalled()
    })

  })


})