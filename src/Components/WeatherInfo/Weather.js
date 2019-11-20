import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Weather.module.css'; 





class Weather extends Component {

    render(){
        return(
            <Auxiliary>
                <p>Weather Component</p>
            </Auxiliary>
        )
    }
}

export default Weather; 