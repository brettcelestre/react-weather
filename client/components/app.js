import React, { Component } from 'react';
import Weather from '../containers/input.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.city = '';
  }
  
  alertWeather() {
    console.log('weather is: ', this.props.weather);
  }
  
  render() {
    return (
      <div className='wrapper'>
        <h1>React Weather</h1>
				<Weather  />
        <button onClick={ this.alertWeather.bind(this) }>Log this.props.weather</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return state;
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ getWeatherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
