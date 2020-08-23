## 条件分岐を変数に格納

```bash
let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          // 変数personを出す
        {persons}
      </div>
    );
```

## propsで受け取った値を元に条件分岐
これを
```bash
    {
        props.inputLength > 5 ?
          <p>text long</p> :
          <p>text short</p>
      }
```
こう書くとベター
```bash
const validation = (props) => {
  let validationMessage = 'Text long enough '
  if (props.inputLength <= 5) {
    validationMessage = 'text too short'
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div >
  )

}
```

## 配列ないの要素を消す方法
```bash
deletChartHandler = (index) => {
    // ばらす
    const text = this.state.userInput.split('')
    // 要素一番を消す
    text.splice(index, 1)
    // 結合させる
    const updatedText = text.join('');
    this.setState({ userInput: updatedText })
  }
```
}消す
}

## function componenでrefを使う
```bash
import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
  const toggleBtnRef = useRef(null)


  useEffect(() => {
    console.log('useEffect')
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud')
    // }, 1000);
    toggleBtnRef.current.click()
    return () => {
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
        </button>
    </div>
  )
}

export default React.memo(cockpit)
```
            age={this.state.persons[2].age} />つ            age={this.state.persons[2].age} />
