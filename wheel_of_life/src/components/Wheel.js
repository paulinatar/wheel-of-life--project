import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts'
import './Wheel.scss'




class Wheel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRendered: true,
            counter: 0,
            options: {
                chart: {
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    },
                },
                labels: ['Health', 'Money', 'Fun & Recreation', 'Significant Others/Romanse', 'Family & Friends', 'Career', 'Physical Environment', 'Personal Growth'],
                title: {
                    text: ''
                },
                stroke: {
                    width: 1
                },
                fill: {
                    opacity: 0.4
                },
                markers: {
                    size: 0
                }
            },
            series: [{
                name: 'Money',
                data: [0, 0, 0, 0, 0, 0, 0, 0],
            }, {
                name: 'Fun & Recreations',
                data: [0, 0, 0, 0, 0, 0, 0, 0],
            }, {
                name: 'Sygnicant Others/Romance',
                data: [0, 0, 0, 0, 0, 0, 0, 0],
            }, {
                name: 'Family & Friends',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Career',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Phisical Enviroment',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Personal Growth',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Health',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            },


            ]
        }
    }

    changeValue = (value) => {
        let counter = this.state.counter;
        let newSeries = this.state.series;
            console.log(value,newSeries[counter])

        // tu bedzie if

        if(newSeries[counter].data[counter +1] >= newSeries[counter].data.lenght){
            newSeries[counter].data[0]=value
            newSeries[counter].data[7]=value
        }
        newSeries[counter].data[counter] = value;
        newSeries[counter].data[counter+1] = value;

/*
* this.setState(function(prevState, props){
      return {showForm: !prevState.showForm}
   });
*
* */
        this.setState((prevState,props)=>{
            return {
                counter: counter+1,
                series:newSeries
            }
        })

        // this.setState({
        //     counter: counter+1,
        //     series:newSeries
        //
        // })
    }

    render() {


        const pointsScale = [{
            label: "1",
            value: 10
        },{
            label: "2",
            value: 20
        },{
            label: "3",
            value: 30
        },{
            label: "4",
            value: 40
        },{
            label: "5",
            value: 50
        },{
            label: "6",
            value: 60
        },{
            label: "7",
            value: 70
        },{
            label: "8",
            value: 80
        },{
            label: "9",
            value: 90
        },{
            label: "10",
            value: 100
        }
        ]

        console.log("a render??");

        const chart = (this.state.isRendered)&&<ReactApexChart options={this.state.options} series={this.state.series} type="radar" height="550"/>

        return (<div className='wheel'>

            <h2 className="nameState">{this.state.series[this.state.counter].name}</h2>
            <div className='buttons'>
                {pointsScale.map((item)=><button  className='numberButton' key={item.label} onClick={(e)=>{this.changeValue(item.value)}}>{item.label}</button>)}</div>
            <div id="chart">
                {chart}


            </div>





        </div>);
    }
}

export default Wheel