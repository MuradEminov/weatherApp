import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Weather.module.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import leftArrow from '../../icons/left-arrow.png'; 
import rightArrow from '../../icons/right-arrow.png'; 



class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSelection: 'celcius',
            celciusChecked: true,
            fahrenheitChecked: false

        }
        //Refs for celcius and fahrenheit selection options 
        this.celciusRef = React.createRef();
        this.fahrenheitRef = React.createRef();
    }

    optionChangeHandler = event => {

        if (event.target.name === "fahrenheit") {
            this.setState({ currentSelection: 'fahrenheit', celciusChecked: false, fahrenheitChecked: true });

        }
        if (event.target.name === "celcius") {
            this.setState({ currentSelection: 'celcius', celciusChecked: true, fahrenheitChecked: false });
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



                                    {/* <input type="radio" name="celcius" />celcius 
                                         <span></span>
                                        <input type="radio" name="fahrenheit"/>fahrenheit  */}
                                </div>
                                <div className={classes.controls__arrows__options}>
                                   <img src={leftArrow} className={classes.arrowImage}></img>  
                                        <span></span>
                                   <img src={rightArrow} className={classes.arrowImage}></img>
                                </div>

                            </div>
                        </div>
                        <div className={classes.weather__panel}>Weather data</div>
                        <div className={classes.daily__temperature}>Daily temperature</div>

                    </div>

                </div>
            </Auxiliary>
        )
    }
}

export default Weather; 