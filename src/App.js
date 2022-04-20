import React from 'react';
import './App.css';
import Header from './components/header';
import Joke from './components/joke';
import { connect } from 'react-redux';
// import { getActivityfromApi } from './state/action-creators';


function App(props) {
  // const {getActivityfromApi, activity } = props;

  // const handleRandomActivity =()=> {
  //   getActivityfromApi();
  // }

  const activity = "swim"

  return (
    <div className="App">
      <h1>Feelin' down?</h1>
      <Header />
      <Joke activity={activity}/>
      <button >Press for Fun</button>
    </div>
  );
}

// const mapStatetoProps = (state) => {
  
//   return ({
//       activity: state.activity
//   })
// }
// export default connect(mapStatetoProps, {getActivityfromApi})(App);
export default App;