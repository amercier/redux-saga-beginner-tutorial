/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';
import { number, func } from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>
);

Counter.propTypes = {
  value: number.isRequired,
  onIncrement: func.isRequired,
  onDecrement: func.isRequired,
}

export default Counter;
