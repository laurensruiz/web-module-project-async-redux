import React from "react"
import { connect } from "react-redux"
import { fetchDog } from '../state/action-creators'

const Dog = (props) => {
const {dog, fetchDog} = props
const handleDogClick =() => {
  fetchDog();
}
    return (
      
      <div className="dog">
        <h2>Need a friend</h2>
        {dog && <img src={`${dog}`} height="300"/>}

        <br></br>
        <button onClick={handleDogClick}>Press for Floofs</button>
      </div>
      
    )
  }

  const mapStatetoProps = (state) => {
  
    return ({
        dog: state.dog
    })
  }

  export default connect(mapStatetoProps, {fetchDog})(Dog)