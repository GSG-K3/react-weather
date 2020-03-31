import React, { Component } from "react";
import "./App.css";
import SearchLocation from "./component/SearchLocation";
class App extends Component {
  state = {
    lat: null,
    log: null, 
    cityName:"",
    temperature:"", 
    weather:"", 
    icon:"",
    wind_speed:"", 
    Humidity:""
  };
  componentDidMount() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position, "position");
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setState=({lat:latitude,log:longitude}) 
       
      });
      
    // this.getWeather();
    }
    
   
  }   
  render() {
    return (
      <div className="App">
        <h1> WHAT'S THE WEATHER? </h1>
        <SearchLocation city={this.state.cityName} onSubmit={this.getWeather}/>
      </div>
    );
  }
 
}

export default App;
