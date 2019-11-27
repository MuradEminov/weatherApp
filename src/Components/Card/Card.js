import React, { Component } from 'react';
import classes from '../Card/Card.module.css';


class Card extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
       return(
           <div className={classes.card__container}>
               <p>Temperature: </p> 
                   {this.props.temp}
               <p>Date:</p> 

           </div>
       )   
        
        
    }
}

export default Card; 