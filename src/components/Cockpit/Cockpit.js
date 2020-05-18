import React from 'react';

const cockpit = (props) => {
  const style = {
    backgroudColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };
  return (
    <div className='Cockpit'>
      <h1>Hi Im React</h1>
      <p>This is working</p>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
