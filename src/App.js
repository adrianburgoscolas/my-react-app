// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import UIComp from './UICompo/UIComp'
import {  useDispatch, useSelector } from 'react-redux';
import action from './Redux/Action';
import calculator from './Calculator';

const App = (props) => {
  const input = useSelector(state=>state.input)
  const dispatch = useDispatch();

  useEffect(()=>{
    const data = calculator(input);
    dispatch(action.sendResult(data));

  },[input,dispatch]);
  
  return (
    <div className="App">
      <UIComp />
    </div>
  );
}

export default App;
