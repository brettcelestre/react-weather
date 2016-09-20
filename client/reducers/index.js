import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import WeatherReducer from './weather-reducer.js';

export default combineReducers({
  weather: WeatherReducer,
	routing: routerReducer
});
