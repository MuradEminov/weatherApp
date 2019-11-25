import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classes from '../../Components/WeatherData/WeatherDataPage1.module.css';


class WeatherDataPage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherData: this.props.obtainedData
             }
    }


  

    render() {

        

        return ( 
              

                  <Auxiliary>
                <div className={classes.grid__layout}>
                    <div>
                        <Card className={classes.card}>
                            <CardContent>
                                <p>Temperature:</p> 
                                    {this.props.data}
                                <p>Date:</p>

                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.card}>
                            <CardContent>
                                <p>Temperature:</p>
                                <p>Date:</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.card}>
                            <CardContent>
                                <p>Temperature:</p>
                                <p>Date:</p>
                            </CardContent>
                        </Card>
                    </div>
                </div> 
                

            </Auxiliary>
        )
    }
}

export default WeatherDataPage1; 