import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../reducers/reposReducer';
import './app.scss'

const App = () =>{ 
  const dispatch = useDispatch()
  const count = useSelector(state => state.repos.count)
  function onCountClick(){
    dispatch(setCount(5))
  }

  return (
    <div className={'app'}>
      <button onClick={()=>onCountClick()}>COUNT</button>
      <div>{count}</div>
    </div>
  );
};

export default App;