import React from 'react'
import './App.css';
import Weather from './components/Weather.js';
import Form from './components/Form.js';

const API_key = '4bd110800000f46eb7be05be36b61622';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      city: '',
      icon: '',
      main: '',
      celsius: '',
      temp_max: '',
      temp_min: '',
      description: '',
      icon: '',
      weatherMain: '',
      error: false,
      totalReactPackages: null,
      errorMessage: null,
      eee: false

    };
    // this.getWeatherApi();

  }

  calCelsius(temp){
    let cell = Math.floor (temp - 273.15)
    return cell
  }
  getWeatherApi = async(e) => {
        
    e.preventDefault()


    const city = e.target.elements.city.value
      // GET request 
    fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
        .then(async response => {
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            } 
            
            this.setState({ totalReactPackages: data.total,
              city:  data.name,
              eee: true,
              celsius: this.calCelsius (data.main.temp),
              temp_max: this.calCelsius (data.main.temp_max),
              temp_min: this.calCelsius (data.main.temp_min),
              description: data.weather[0].description,
              weatherMain: data.weather[0].main,
              icon: data.weather[0].icon,
              errorMessage: 'ok'
             })

        })
        .catch(error => {
            this.setState({ errorMessage: 'error' });
            console.error('There was an error!', error);
        });
}

render() {
    
    return (
      <div className="App">
        <div className='main'>
          <div className='petText'>Pet prodject</div>
          <h1 className='mainHeader'>Weather forecasts for thousands of locations around the world</h1>
          <Form loadweather={this.getWeatherApi} errorMessage={this.state.errorMessage}/>
          <Weather 
            city={this.state.city} 
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
    );
}

}

export default App;
