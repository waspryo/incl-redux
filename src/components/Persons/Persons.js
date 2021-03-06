import React, { Component } from 'react';
// import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from '../Persons/Person/Person';


class Persons extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('person js')
  //   return state
  // }

  // componentWillReceiveProps(props) {
  //   console.log('person.js componentWillReceiveProps', props)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons js shouldComponentUpdate')
    if (nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked) {
      return true;
    } else {
      return false
    }
  }

  componentWillUnmount() {
    console.log('Persons componentWillUnmount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons getSnapshotBeforeUpdate')
    return { message: 'Snap Shot' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Person.js componentDidUpdate')
    console.log(snapshot)
  }

  render() {
    console.log('persons rendering...')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}
        />
      );
    })
  }
}
export default Persons
