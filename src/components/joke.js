import React from "react"


export default function Joke(props) {
const {activity} = props
    return (
      <div>
        <p>Activity: {activity}</p>
      </div>
    )
  }