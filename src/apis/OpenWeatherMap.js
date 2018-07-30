import { URL, KEY } from '../config.json';


export default function getOWI(city, countryCode, unit) {
  var url = `${URL}/weather?q=${city},${countryCode}&APPID=${KEY}&units=${unit}&lang=en`;
  return fetch(url).then(
    response => response.json(),
    error => console.log(error)
  );
}
