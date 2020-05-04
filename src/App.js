import React, {useState} from 'react';
/*import logo from './logo.svg';*/
import './App.css';

const api = {
  key : "9c63bcc881bda8f8fd73608995f9a967",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState('');

  const search = e =>{
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
    }
  }

  const currentDate = (d) =>{
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <div className="header">
        <img src={require('./images/logo.png')} alt="My Logo" height="100" width="140"/>
          <ul className="menuItems">
              <li>My Projects</li>
              <li>About</li>
          </ul>
      </div>

      <div className={(typeof weather.main != "undefined")?((weather.main.temp < 16)?'content cold-bg':'content warm-bg'): 'content warm-bg'}>
        <h2>What is your Weather ?</h2>
        <input type="text"
               className="search-bar"
               placeholder="search for city...."
               onChange={e =>setQuery(e.target.value)}
               value={query}
               onKeyPress = {search}/>
      {(typeof weather.main != "undefined") ? (
        <div>
        <div className="details_sheet_1">
          <p className="temperature">{weather.main.temp}°C</p>
          <ul>
            <li>{weather.name}, {weather.sys.country}</li>
            <li>{currentDate(new Date())}</li>
          </ul>
        </div>
        <div className="set_two">
          <ul className="details_sheet_2">
            <li>Maximum Temperature: {weather.main.temp_max}°C</li>
            <li>Minimum Temperature: {weather.main.temp_min}°C</li>
            <li>Feels like: {weather.main.feels_like}°C</li>
            <li>Wind Speed: {weather.wind.speed}mph</li>
          </ul>
          <ul className="details_sheet_3">
            <li>Pressure: {((weather.main.pressure)*0.0002953*100).toFixed(2)}Hg</li>
            <li>Visibility: {((weather.visibility)*0.000621371).toFixed(2)} miles</li>
            <li>Latitute: {weather.coord.lat}°{((weather.coord.lat < 0)?'S':'N')}</li>
            <li>Longitude: {weather.coord.lon}°{((weather.coord.lon < 0)?'W':'E')}</li>
          </ul>
        </div>
        </div>
      ):('')}
      </div>

    </div>
  );
}

export default App;
