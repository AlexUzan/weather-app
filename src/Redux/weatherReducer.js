import getOWI from '../apis/OpenWeatherMap.js';


const CONVERSION = 'CONVERSION';
const REQUEST = 'REQUEST';
const RECEIVE = 'RECEIVE';
const UPDATE_TIME = 'UPDATE_TIME';
const defaultState = {
  fetching: false,
  weather_desc: '',
  weather_icon: '',
  temperature: 0,
  unit: 'metric',
  wind_speed: 0,
  date: new Date().toLocaleString()
}


function tempConversion(unit, temperature) {
  if (unit === 'metric') {
    return ['imperial', Math.round((9/5) * temperature + 32)];
  }
  else {
    return ['metric', Math.round((5/9) * (temperature - 32))];
  }
}


export function weatherReducer(state=defaultState, action) {
  var newState = {...state};
  switch (action.type) {
    case CONVERSION:
      [newState.unit, newState.temperature] = tempConversion(
        state.unit, state.temperature
      );
      break;

    case REQUEST:
      newState.fetching = true;
      break;

    case RECEIVE:
      newState.weather_desc = action.data.weather[0].description;
      newState.weather_icon = action.data.weather[0].icon;
      newState.temperature = Math.round(action.data.main.temp);
      newState.wind_speed = action.data.wind.speed;
      newState.fetching = false;
      break;

    case UPDATE_TIME:
      newState.date = new Date().toLocaleString();
      break;

    default:
      break;
  }
  return newState;
}

export const conversion = () => {
  return {
    type: CONVERSION
  };
};

export const request = () => {
  return {
    type: REQUEST
  };
};

export const receive = (data) => {
  return {
    type: RECEIVE,
    data
  };
};

export const updateTime = () => {
  return {
    type: UPDATE_TIME
  };
};

export function fetchWeather(city, countryCode, unit) {
  return function (dispatch) {
    dispatch(request());
    return getOWI(city, countryCode, unit).then(
      data => dispatch(receive(data))
    );
  };
}
