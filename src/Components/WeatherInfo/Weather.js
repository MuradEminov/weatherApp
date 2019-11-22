import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Weather.module.css'; 





class Weather extends Component {

    render(){
        return(
            <Auxiliary>
                 <div className={classes.main__wrapper}>
                     <div className={classes.container}>
                         <div className={classes.controls}> 
                                <div className={classes.controls__inner__container}> 
                                      <div className={classes.controls__unit__options}>
                                        <input type="radio" name="celcius" />celcius 
                                         <span></span>
                                        <input type="radio" name="fahrenheit"/>fahrenheit 
                                       </div> 
                                       <div className={classes.controls__arrows__options}>

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