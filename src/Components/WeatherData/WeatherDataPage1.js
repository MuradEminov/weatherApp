import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import classes from '../../Components/WeatherData/WeatherDataPage1.module.css'; 
import Card from '../Card/Card';
import classes from '../../Components/WeatherData/WeatherDataPage1.module.css';


class WeatherDataPage1 extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const cards = this.props.data.map(function (item) {
            return (
                <Card celc={Math.round(item.main.temp-273.15)}/>                                   

            )
        })

        return (
            <Auxiliary> 
                <div className={classes.display__grid}>
                {cards}
                </div>
                
            </Auxiliary>

        )

    }
}

export default WeatherDataPage1; 