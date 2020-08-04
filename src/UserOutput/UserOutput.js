import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Name: {props.userName}</p>
      <p>I hope </p>
    </div>
  )
}
export default userOutput