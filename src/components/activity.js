import React from "react"
import { connect } from "react-redux"
import { fetchDataApi } from '../state/action-creators'

const Activity = (props) => {
const {activity, type, fetchDataApi } = props


const handleActivityClick =() => {
  fetchDataApi();
}
    return (
      
      <div className="Activity">
        <h2>Feeling Bored?</h2>
        {activity && <p>Activity: {activity}</p>}

        {type && <p>Type: {type} </p>}
        <button onClick={handleActivityClick}>Press for Fun</button>
      </div>
      
    )
  }

  const mapStatetoProps = (state) => {
  
    return ({
        activity: state.activity,
        type: state.type
    })
  }

  export default connect(mapStatetoProps, {fetchDataApi})(Activity)