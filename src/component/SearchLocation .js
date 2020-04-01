import React, { Component } from 'react';
class SearchLocation extends Component {
  state = {
    city:''
  };
  handleChange= e => {
    const city_name = e.target.value;
    this.setState({city:city_name });
    console.log(city_name); 
  };
  searchLocation = e => {
    e.preventDefault();
    this.props.weather(this.state); // 

  
  };

  render() {
    return (
      <div className="LocationContainer">
        <form onSubmit={this.searchLocation}>
          <input
            className="InputText"
            id="SearchLocation"
            placeholder="Enter your City to find out"
            type="text"
            onChange={this.handleChange}
              value={this.state.city}
          
          ></input>
        <input type="submit" value="Get weather" className="search-btn" />
         
        </form>
      </div>
    );
  }
}
export default SearchLocation;
