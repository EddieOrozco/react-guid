import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Eddie', age: 27 },
      { id: 1, name: 'Josh', age: 30 },
      { id: 2, name: 'Goku', age: 41 },
    ],
    showPersons: false,
  };

  // Methods
  // ARRAYS AND OBJECTS ARE REFERENCE TYPES
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
    // Deconstruction //POINTER
    const doesShow = this.state.showPersons;
    // Changing showPersons state with toggle
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // Set a Pointer
    // const persons = this.state.persons.slice(); // Copy of persons
    const persons = [...this.state.persons]; // Copy of persons
    // Change element Pointer is Pointing to
    persons.splice(personIndex, 1);
    // Make Changes with set state
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi Im React</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
