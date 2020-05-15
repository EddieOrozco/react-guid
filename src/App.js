import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Eddie',
        age: 27,
      },
      {
        name: 'Josh',
        age: 30,
      },
      {
        name: 'Goku',
        age: 41,
      },
    ],
    showPersons: false,
  };

  // Methods
  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        {
          name: newName,
          age: 27,
        },
        {
          name: 'Josh',
          age: 30,
        },
        {
          name: 'Vegita',
          age: 35,
        },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Eduardo',
          age: 27,
        },
        {
          name: event.target.value,
          age: 30,
        },
        {
          name: 'Goku',
          age: 41,
        },
      ],
    });
  };

  togglePersonsHandler = () => {
    // Deconstruction
    const doesShow = this.state.showPersons;
    // Changing showPersons state with toggle
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className='App'>
        <h1>Hi Im React</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Ed!')}
              changed={this.nameChangeHandler}
            >
              My Hobbies: Truck Buying
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
