import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

const chartData = (data, year) => {
  let filteredArr = data.filter(years => parseInt(years.year) === year);
  filteredArr.reverse();
  //let yearArr = filteredArr.map(years => years.year);
  let nameArr = filteredArr.map(years => years.region);
  let popArr = filteredArr.map(years => (years.value / 1000000).toFixed(2));

  return {
    labels: nameArr,
    datasets: [
      {
        label: 'population in Millions',
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

class PieChart extends Component {
  state = {
    data: {},
    rangeValue: 2017,
    completeRangeValue: 2017,
  };
  componentDidMount() {
    if (this.props.regionPop.length !== 0) {
      this.getChartData();
    }
  }
  getChartData() {
    let pieData = chartData(this.props.regionPop, 2017);
    this.setState({ data: pieData });
  }
  render() {
    return (
      <div className="content__graph">
        <div style={styles.graphContainer}>
          <Doughnut data={this.state.data} options={options} />
        </div>
        <InputRange
          maxValue={2017}
          minValue={1980}
          value={this.state.rangeValue}
          onChange={value => this.setState({ rangeValue: value })}
          onChangeComplete={value => {
            this.setState({ completeRangeValue: value });
            this.setState({ data: chartData(this.props.regionPop, value) });
          }}
        />
      </div>
    );
  }
}

PieChart.propTypes = {
  regionPop: PropTypes.array,
};

export default PieChart;
