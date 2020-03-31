import React, { Component } from 'react'
class SearchLocation extends Component {
    state = {
        city: ''
    }
    inputChange = (e) => {
        const cityName = e.target.value;
        this.setState({ city: cityName});
        console.log(cityName);
    }
    submitLocation = (e) => {
        e.preventDefault();
        console.log('submit', this.state.city);
        document.getElementById('SearchLocation').value = '';
        this.props.onSubmit(this.state.city);

    }


    render() {
        return <div className='LocationContainer'>
            <form onSubmit ={(e) => this.submitLocation(e)}>
                <input className='InputText' id='SearchLocation'placeholder="Enter your City to find out ..."
                 onChange={(e) => this.inputChange(e)} type="text"></input>
                <button className='SearchButton' type="submit" > Get Weather </button>
            </form>

        </div>
    }
}
export default SearchLocation;