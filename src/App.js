import React, { Component } from 'react';
import Auxiliary from '../src/hoc/Auxiliary';
import Home from '../src/Components/Home/Home';
import axiosinstanceMunich from '../src/Components/Axios/axiosInstanceMunich';
import Weather from './Components/WeatherInfo/Weather';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      dataMunich: null, // Data array for Munich city

    }
  }


  componentDidMount() {
                                  // On component mount, make an API call to the weather-data end-point: 
   
      axiosinstanceMunich.get('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40')
      .then(response => {
        var obj = Object.values(response.data);
        this.setState({ dataMunich: obj });
        console.log(this.state.dataMunich);
      })
      .catch(error => {
        console.log(error);
      });                      
  
  }

  render() {
    return (  
         this.state.dataMunich ? <Weather /> : <Home /> );

  }

}

export default App;
