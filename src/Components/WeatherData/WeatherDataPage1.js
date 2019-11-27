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

    componentDidMount(){
        console.log(this.props.selection);
    }
    
   

    render() { 
        var cards; 
        if (this.props.selection){
             cards = this.props.data.map(function (item) { 
                return ( 
                    <Card val={Math.round(item.main.temp-273.15)}/>                                   
    
                )
            })
        } 

        else{
             cards = this.props.data.map(function (item) { 
                return ( 
                    <Card val={Math.round((item.main.temp * (9/5) - 459.67))} />                                   
    
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

export default WeatherDataPage1; 