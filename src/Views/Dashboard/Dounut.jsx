import React from 'react';
import { Chart } from 'react-chartjs-2';

class DoughnutChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = this.props.data.map(d => d.label);
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
      this.myChart.update();
    }
  
    componentDidMount() {
        console.log(this.props.data)
      this.myChart = new Chart(this.chartRef.current, {
        type: 'doughnut',
        data: {
          labels: this.props.data?this.props.data.map(d => d.label): 'contor',
          title:this.props.title,
          datasets: [{
            data: this.props.data? this.props.data.map(d => d.value):23,
            backgroundColor: this.props.colors
          }]
        }
      });
    }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
  }
  export default DoughnutChart