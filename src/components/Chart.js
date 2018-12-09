import React, { Component } from 'react';
import { Bar, Line, Pie, Polar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    }

    render(){
        return (
            <div className="chart">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Bar
                                data={this.state.chartData}
                                options={
                                    {
                                        title: {
                                            display: this.props.displayTitle,
                                            text: "Largest cities",
                                            fontSize: 25
                                        },
                                        legend: {
                                            display: this.props.displayLegend,
                                            position: this.props.legendPosition
                                        }
                                    }
                                }
                                
                            />
                        </div>
                        <div className="col">
                        <Line
                            data={this.state.chartData}
                            options={
                                {
                                    title: {
                                        display: this.props.displayTitle,
                                        text: "Largest cities",
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: this.props.displayLegend,
                                        position: this.props.legendPosition
                                    }
                                }
                            }
                            
                        />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <Pie
                            data={this.state.chartData}
                            options={
                                {
                                    title: {
                                        display: this.props.displayTitle,
                                        text: "Largest cities",
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: this.props.displayLegend,
                                        position: this.props.legendPosition
                                    }
                                }
                            }
                            
                        />
                        </div>
                        <div className="col">
                            <Polar
                                data={this.state.chartData}
                                options={
                                    {
                                        title: {
                                            display: this.props.displayTitle,
                                            text: "Largest cities",
                                            fontSize: 25
                                        },
                                        legend: {
                                            display: this.props.displayLegend,
                                            position: this.props.legendPosition
                                        }
                                    }
                                }
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chart;