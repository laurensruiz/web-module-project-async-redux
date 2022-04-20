import React, { useEffect } from 'react';
import './App.css';

import Activity from './components/activity';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchDataApi } from './state/action-creators';




function App(props) {
  
const {fetchDataApi} = props;



const handleActivityClick =() => {
  fetchDataApi();
}
  return (
    <div className="App">
      <h1>Feelin' bored?</h1>
      <Activity />
      <button onClick={handleActivityClick}>Press for Fun</button>
    </div>
  );
}


export default connect(st=> st, {fetchDataApi})(App);
