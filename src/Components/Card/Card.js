import React, { Component } from 'react';
import classes from '../Card/Card.module.css';


class Card extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
       var date = this.props.date.substring(0, 10).split("-").reverse().join("-"); 

       
       return(
           <div className={classes.card__container}>
               <p>Temperature: </p> 
                   {    
                    this.props.val  
                   }
                   
               <p>Date:</p> 
               {date}

           </div>
       )   
        
        
    }
}

export default Card; 