import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import classes from '../Chart/Chart.module.css';
import { blue } from '@material-ui/core/colors';


class Chart extends Component {

    constructor(props){
        super(props); 
        this.state ={
            
            data: {
                labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'], 
                datasets: [{
                    label: 'Temperature', 
                    data: [], 
                    backgroundColor: "rgb(166, 166, 226)"
                }], 

            } 
            
        }
    }

    componentDidMount(){
        const dailyData = this.props.data[3].filter(reading => reading.dt_txt.includes("18:00:00"));
        const valuesArray = dailyData.map((item) =>{
            return (item.main.temp_max + item.main.temp_min) / 2;
        });  
        this.setState({
            data: {
                labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'], 
                datasets: [{
                    label: 'Temperature', 
                    data: valuesArray, 
                    backgroundColor: "rgb(166, 166, 226)"
                }], 

            } 
        })
        console.log(valuesArray);
         
        this.setState({
            dailyData: dailyData
        }); 
        console.log(this.state.dailyData);
    }

    render() {
        return (
            <div className={classes.chart}>
                <Bar
                    data={this.state.data}
                    width={100}
                    height={160}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }

} 

export default Chart; 