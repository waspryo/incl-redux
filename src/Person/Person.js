import React from 'react';
import './Person.css';

const person = (props) => {
  console.log(props, 'aaaaa')
  return (
    <div className="Person">
      <h1 onClick={props.click}>Hello {props.name} and I am {props.age}years old</h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person;