import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Card from '../Card/Card';
import classes from '../WeatherData/WeatherDataPage3.module.css';


class WeatherDataPage3 extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.props.selection);
    }



    render() {
        var cards;
        if (this.props.selection) {
            cards = this.props.data.map(function (item) {
                return (
                    <Card val={Math.round(item.main.temp - 273.15)} date={item.dt_txt} />

                )
            })
        }

        else {
            cards = this.props.data.map(function (item) {
                return (
                    <Card val={Math.round((item.main.temp * (9 / 5) - 459.67))} date={item.dt_txt} />

                )
            })

        }

        return (
            <Auxiliary>
                <div className={classes.display__grid}>
                    {cards}
                </div>

            </Auxiliary>

        )

    }
}

export default WeatherDataPage3; 