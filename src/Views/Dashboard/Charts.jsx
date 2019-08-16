import React, { Component } from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';
import DoughnutChart from './Dounut';
import { BarChart } from './BarChart';

const mainCstyle={height:300,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
}
class Charts extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    chartReference = {};

      state={
          feeds:[],
          isOpen:false,
          isLoading:false,
      }
    getRandomDateArray = (param) => {
        return [
            {
              "time": new Date('23-01-2016'),
              "value": 39
            },
            {
              "time": new Date(param),
              "value": 60
            },
          ]

    }
    getRandomArray=(num)=>{
        return  [{
            "label": "Undergraduates",
            "value": 76
          },
          {
            "label": "Corp Members",
            "value": 36
          },
          {
            "label": "Supervisors",
            "value": 17
          }]
    }
    getFeeds() {
        let feeds = [];

        feeds.push({
            title: 'Visits',
            data: this.getRandomDateArray('20-12-2015')
        });
        console.log("nothing yet")
        feeds.push({
            title: 'Categories',
            data: this.getRandomArray(23)
        });

        feeds.push({
            title: 'Categories',
            data: this.getRandomArray(120)
        });

        feeds.push({
            title: 'Data 4',
            data: this.getRandomArray(6)
        });
        return feeds
    }

    


componentDidMount() {
    console.log(this.chartReference); // returns a Chart.js instance reference
    this.setState({ 
        feeds:this.getFeeds(),
        isLoading:this.state.feeds? true:false
    })
    

}

    
    render() {
        const {feeds,isLoading} = this.state;
       
        const myData = [
            {
                "label": "January",
                "value": 14
            },
            {
                "label": "Feburary",
                "value": 16.5
            },
            {
                "label": "April",
                "value": 16
            },
            {
                "label": "May",
                "value": 19
            },

        ]
        return (
            <div>
                {isLoading ?<div style={mainCstyle}>
                    <div style={{minWidth:'40%'}}>
                    <BarChart
          data={myData}
         title="Interns According to start date"
          color="#70CAD1" />
                    </div>
                    <div style={{minWidth:'40%'}}>
                        <DoughnutChart
                        ref={(reference) => {
                                return this.chartReference = reference;
                            } } 
                              data={feeds[2].data}
                            title= "Current No. of interns"
                              colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
                        />
                    </div>

                </div>:<p>loading...</p>}
               
            </div>
        )
    }
}

export default Charts
