import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Home.module.css'; 




class Home extends Component {

    
  

    render() {
        return (<Auxiliary>
            <div className={classes.container}>
            <p>Loading....</p>
            </div>
            
        </Auxiliary>)
    }
}

export default Home; 