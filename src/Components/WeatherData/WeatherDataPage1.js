import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import classes from '../../Components/WeatherData/WeatherDataPage1.module.css'; 
import Card from '../Card/Card';


class WeatherDataPage1 extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const cards = this.props.data.map(function (item) {
            return (
                <Card temp={item.main.temp}/>                                   

            )
        })

        return (
            <Auxiliary>
                {cards}
            </Auxiliary>

        )

    }
}

export default WeatherDataPage1; 