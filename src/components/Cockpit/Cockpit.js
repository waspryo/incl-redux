import React, { useEffect } from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {

  useEffect(() => {
    console.log('useEffect')
    const timer = setTimeout(() => {
      alert('Saved data to cloud')
    }, 1000);
    return () => {
      clearTimeout(timer)
      console.log('Cockpit clean work in useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('useEffect')
    return () => {
      console.log('Cockpit clean work in useEffect 2')
    }
  })

  console.log(props)
  const assignedClasses = [];
  let btnClass = ''
  if (props.showPersons) {
    btnClass = classes.Red
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
        </button>
    </div>
  )
}

export default React.memo(cockpit)