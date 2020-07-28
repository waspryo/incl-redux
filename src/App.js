import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Man', age: 28 },
      { name: 'Jane', age: 22 },
      { name: 'Jhone', age: 29 }
    ],
    otherState: 'some other value'
  })

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Maxmara', age: 28 },
        { name: 'Jane Jr', age: 22 },
        { name: 'Jhone', age: 21 }
      ]
    })
  }
  const [otherState, setOtherState] = useState('some other value')

  console.log(personState, otherState)


  return (
    <div className="App">
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );

}

export default app;


// switchNameHandler = () => {
//   // この書き方はダメ
//   // this.state.persons[0].name = 'Maxmara'
//   this.setState({
//     persons: [
//       { name: 'Maxmara', age: 28 },
//       { name: 'Jane Jr', age: 22 },
//       { name: 'Jhone', age: 21 }
//     ]
//   })
// }