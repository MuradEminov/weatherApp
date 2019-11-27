import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Weather.module.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import leftArrow from '../../icons/left-arrow.png';
import rightArrow from '../../icons/right-arrow.png';
import WeatherDataPage1 from '../WeatherData/WeatherDataPage1';
import WeatherDataPage2 from '../WeatherData/WeatherDataPage2';
import { Route, Link } from 'react-router-dom';
import Chart from '../../Components/Chart/Chart'; 


class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSelection: 'celcius',
            celciusChecked: true,
            fahrenheitChecked: false, 
            weatherData: this.props.data, // received weather data
            data_page_1: [],  // data sliced for page no.1 (3 cards data array) 
            data_page_2: []

        }
        //Refs for celcius and fahrenheit selection options 
        this.celciusRef = React.createRef();
        this.fahrenheitRef = React.createRef();
    }

    componentDidMount() {
        const dailyData = this.state.weatherData[3].filter(reading => reading.dt_txt.includes("18:00:00"));
        var data_for_page1 = dailyData.slice(0, 3);
        var data_for_page2 = dailyData.slice(3, 5);
        this.setState({ data_page_1: data_for_page1 });
        this.setState({ data_page_2: data_for_page2 });
        console.log(dailyData); 
        console.log(this.state.weatherData); 
        console.log(this.state.data_page_1, this.state.data_page_2);
        console.log(this.state.currentSelection);



    }

    optionChangeHandler = event => {

        if (event.target.name === "fahrenheit") {
            this.setState({ currentSelection: 'fahrenheit', celciusChecked: false, fahrenheitChecked: true });


        }
        if (event.target.name === "celcius") {
            this.setState({ currentSelection: 'celcius', celciusChecked: true, fahrenheitChecked: false });
            console.log("celcius checked");
        }

    }


    render() {

        return (
            <Auxiliary>
                <div className={classes.main__wrapper}>
                    <div className={classes.container}>
                        <div className={classes.controls}>
                            <div className={classes.controls__inner__container}>
                                <div className={classes.controls__unit__options}>

                                    <FormControl component="fieldset">
                                        <RadioGroup aria-label="position" name="position" row className={classes.radioGroup}>
                                            <FormControlLabel
                                                control={<Radio color="primary" name="celcius" className={classes.radio__left} checked={this.state.celciusChecked} inputRef={this.celciusRef} onChange={this.optionChangeHandler} />}
                                                label="Celcius"
                                                labelPlacement="end"
                                                className={classes.controlLabel}
                                            />
                                            <span></span>
                                            <FormControlLabel
                                                control={<Radio color="primary" name="fahrenheit" className={classes.radio__right} checked={this.state.fahrenheitChecked} inputRef={this.fahrenheitRef} onChange={this.optionChangeHandler} />}
                                                label="Fahrenheit"
                                                labelPlacement="end"
                                                className={classes.controlLabel}
                                            />
                                        </RadioGroup>
                                    </FormControl>

                                </div>
                                <div className={classes.controls__arrows__options}>
                                    <Link to="/"><img src={leftArrow} className={classes.arrowImage}></img></Link>
                                    <span></span>
                                    <Link to="/2"><img src={rightArrow} className={classes.arrowImage}></img></Link>
                                </div>

                            </div>
                        </div>
                        <div className={classes.weather__panel}>
                            <div className={classes.weather__panel__inner__container}>
                                <Route path="/" exact render={(props) => <WeatherDataPage1 data={this.state.data_page_1} selection={this.state.celciusChecked} {...props} />} />
                                <Route path="/2" render={(props) => <WeatherDataPage2 data={this.state.data_page_2} selection={this.state.celciusChecked} {...props} />} />

                            </div>
                        </div>
                        <div className={classes.daily__temperature}> 
                                <Chart data={this.props.data}/>
                        </div>

                    </div>

                </div>
            </Auxiliary>
        )
    }
}

export default Weather; 