import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const chartData = data => {
  let filteredArr = data.filter(years => parseInt(years.year) === 2017);
  filteredArr.reverse();
  //let yearArr = filteredArr.map(years => years.year);
  let nameArr = filteredArr.map(years => years.region);
  let popArr = filteredArr.map(years => (years.value / 1000000).toFixed(2));

  return {
    labels: nameArr,
    datasets: [
      {
        label: 'population in Millions 2017',
        backgroundColor: [
          'rgba(92, 134, 147, 0.2)',
          '#F7464A',
          '#46BFBD',
          '#FDB45C',
          '#949FB1',
          '#4D5360',
        ],
        borderColor: 'rgba(92, 134, 147, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: popArr,
      },
    ],
  };
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const styles = {
  graphContainer: {
    border: '1px solid #efefef',
    padding: '15px',
  },
};

class BarChart extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    if (this.props.regionPop.length !== 0) {
      this.getChartData();
    }
  }
  getChartData() {
    let barData = chartData(this.props.regionPop);
    this.setState({ data: barData });
  }
  render() {
    return (
      <div className="content__bar">
        <div style={styles.graphContainer}>
          <Bar data={this.state.data} options={options} />
        </div>
      </div>
    );
  }
}

BarChart.propTypes = {
  regionPop: PropTypes.array,
};

export default BarChart;
