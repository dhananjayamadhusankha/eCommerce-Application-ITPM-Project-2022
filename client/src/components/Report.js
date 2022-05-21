
import React,{Component} from 'react';
import {Bar, Line, Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


 class Report extends Component{

    constructor(props){
        super(props);

        this.state={
            chartData:{
                labels: ['16-21', '22-29','30-45'],
                datasets:[
                    {
                        label:'Count',
                        data:[3,2,5],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(45,192,192,0.6)'
                        ],
                        borderWidth: 1,
                    },
                    
                ],
            },
            pieData:{
                labels: ['Male', 'Female'],
                datasets:[
                    {
                        label:'Count',
                        data:[1,3],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',                            
                            'rgba(75,192,192,0.6)'
                        ],
                        borderWidth: 1,
                    },
                    
                ],
            }
            
        }
    }

    
    render(){
        return(
            <div className='chart'  >
                <br></br>
                <h3>Summary report of Customers' Ages</h3>
                <br></br>

                
                <Bar
                                      
                   data={this.state.chartData}
                   width={"500%"}
                   options={{ 
                    padding:"0px",
                    responsive:false,
                    maintainAspectRatio:false,
                    defaultFontSize:"12px",
                    width:"1000",
                    height:"1000",
                    
                    legend:{
                        display:false,
                    },
                    plugins:{
                        datalabels: {
                            color:'#000000',
                            anchor: "start",
                            align:"end",
                            formatter: function(value, context) {
                                    return context.chart.data.labels[context.dataIndex];
                            }
                        }
                    }
                   }}                 
                 />
                 <br></br>
                 <h3>Summary report of Customers' Gender</h3>
                 <br></br>
                 
               <Doughnut
               
               data={this.state.pieData}
               width={"600%"}
               options={{ 
                padding:"0px",
                responsive:false,
                maintainAspectRatio:false,
                defaultFontSize:"12px",
                width:"2000",
                height:"2000",
                
                legend:{
                    display:false,
                },
                plugins:{
                    datalabels: {
                        color:'#000000',
                        anchor: "start",
                        align:"end",
                        formatter: function(value, context) {
                                return context.chart.data.labels[context.dataIndex];
                        }
                    }
                } 
               }}                 
             />
            </div>
            
        )
    }
}


export default Report;
