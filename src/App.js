import React from 'react';
import './App.css';
import Activity from './components/activity';
import Dog from './components/dog';


function App(props) {
  
  return (
    <div className="App">
      <h1>Random things</h1>
      <Activity />
      <Dog />
    </div>
  );
}


export default App;
