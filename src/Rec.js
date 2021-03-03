// import Weather from './Components/Weather.js';
import React from 'react'
import './App.css';
import Weather from './components/Weather.js';
import Form from './components/Form.js';

const API_key = '4bd110800000f46eb7be05be36b61622';
// api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
class Rec extends React.Component {
  constructor () {
    super ();
    this.state = {
      city: '',
      // country: '',
      icon: '',
      main: '',
      celsius: '',
      temp_max: '',
      temp_min: '',
      description: '',
      icon: '',
      weatherMain: '',
      error: false,
      errorMessage: null

    };
    // this.getWeatherApi();

  }

  calCelsius(temp){
    let cell = Math.floor (temp - 273.15)
    return cell
  }



  render () {
    return (
      <div className="App">
        <div className='main'>
          <div className='petText'>Pet prodject</div>
          <h1 className='mainHeader'>Weather forecasts for thousands of locations around the world</h1>
          <Form loadweather={this.getWeatherApi} error={this.state.error}/>
          <Weather 
            city={this.state.city} 
            // country={this.state.country} 
            celsius={this.state.celsius}
            description={this.state.description} 
            temp_max={this.state.temp_max} 
            temp_min={this.state.temp_min} 
            icon={this.state.icon}
            weatherMain={this.state.weatherMain}
            error={this.state.error}
            />
          </div>
    </div>
    )
  }
}

export default Rec;