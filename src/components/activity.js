import React from "react"
import { connect } from "react-redux"


const Joke = (props) => {
const {activity, type } = props
console.log(props)
    return (
      <div className="Activity">
        {activity && <p>Activity: {activity}</p>}
        
        {type && <p>Type: {type} </p>}
      </div>
      
    )
  }

  const mapStatetoProps = (state) => {
  
    return ({
        activity: state.activity,
        type: state.type
    })
  }

  export default connect(mapStatetoProps)(Joke)