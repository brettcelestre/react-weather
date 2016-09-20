import {
  GET_WEATHER_REQUEST,
	GET_WEATHER_SUCCESS,
	GET_WEATHER_FAILURE
} from '../actions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case GET_WEATHER_REQUEST:
			return state;
		case GET_WEATHER_SUCCESS:
			return action.data;
		default:
			return state;
	}
}
