import React, { Component } from 'react';
import './App.css';
import SearchLocation from './component/SearchLocation ';

class App extends Component {
  state = {
    lat: null,
    log: null,
    city_name: '',
    temperature: '',
    weather: '',
    wind_speed: '',
    Humidity: ''
  };
 
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position, 'position');
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setState = { lat: latitude, log: longitude };
      });

    }
  }
  getWeather = e => {
    const city = e.city;
    const api_call = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4`;
    fetch(api_call)
      .then(response => response.json())
      .then(response => {
        console.log(api_call);

        this.setState({
          city_name: response.name,
          temperature: console.log(response.main.temp),
          weather: response.weather[0].description,
          wind_speed: response.main.humidity
        });
      })
  };

  render() {
    return (
      <div className="App">
        <h1> WHAT'S THE WEATHER? </h1>
        <SearchLocation weather={this.getWeather} city={this.state.city_name} />
      </div>
    );
  }
}

export default App;
