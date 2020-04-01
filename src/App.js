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
 
  componentDidMount(e) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position, 'position');
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setState({ lat: latitude, log: longitude });
      });
      
    
    
    
    }

  }
  getLocation = e =>{
    // const lat =e.lat;
    //   const log = e.log;
      const locationAPI =
      'https://api.openweathermap.org/data/2.5/weather?lat='+this.lat +'&lon='+this.log+'139&units=metric&apikey=cf9fb4df751879d3f30929a3dd9050e4';
      fetch(locationAPI )
      .then((res) => res.json())

      .then((res) => {
        console.log(locationAPI)
        this.setState({ log: console.log(res.position.coords.latitude),
                         lat: console.log(res.position.coords.longitude) });
      })

      .catch((err) => console.log(err));
    
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
          temperature: response.main.temp,
          weather:response.weather[0].description,
          wind_speed:response.main.humidity 
        });
      })
  };

  render() {
    return (
      <div className="App">
        <h1> WHAT'S THE WEATHER? </h1>
        <SearchLocation weather={this.getWeather} city={this.state.city_name} />
    <h2>{this.state.city_name}</h2>
       <div>
    <h3>{this.state.temperature}</h3>
    <h3>{this.state.weather}</h3>
    <h3>{this.state.wind_speed}</h3>
      </div>
      </div>
    );
  }
}

export default App;
