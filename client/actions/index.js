import axios from 'axios';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export function getWeatherData(cityName) {

 	return dispatch => {
		dispatch(signalWeatherRequest());

		var cityUrl = cityName.split(' ').join('_');
		console.log('cityName', cityName);

		return axios({
			method: 'GET',
			url : "http://api.wunderground.com/api/2d8cde3edef86501/conditions/q/CA/" + cityUrl + ".json",
		})
		.then(response => dispatch(getWeatherSuccess(response.data)))
    .catch(response => console.error('Weather GET error:', response));
	}

}

function signalWeatherRequest() {
	return {
		type: GET_WEATHER_REQUEST
	}
}

function getWeatherSuccess(weatherData) {
	return {
		type: GET_WEATHER_SUCCESS,
		data: weatherData
	}
}
