import React, { Component } from 'react';
import Input from '../containers/input.js';

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>React Weather</h1>
				<Input />
      </div>
    );
  }
}
