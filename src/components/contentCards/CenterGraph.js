import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

function chartData(data, dataType, name, router) {
  //data.reverse();
  let yearArr = data.map(years => years.year);
  let popArr;
  let labelType;
  if (router === 'population') {
    if (dataType === 'world') {
      popArr = data.map(years => (years.value / 1000000000).toFixed(2));
      labelType = 'Total world population in Billions';
    } else if (dataType === 'country') {
      popArr = data.map(years => (years.value / 1000000).toFixed(2));
      labelType = `${name} Total population in Millions`;
    }
  } else if (router === 'life') {
    if (dataType === 'world') {
      popArr = data.map(years => years.value.toFixed(2));
      labelType = 'Average world life expectancy';
    } else if (dataType === 'country') {
      popArr = data.map(years => years.value.toFixed(2));
      labelType = `${name} average life expectancy`;
    }
  } else if (router === 'fert') {
    if (dataType === 'world') {
      popArr = data.map(years => years.value.toFixed(2));
      labelType = 'Average world fertility rate';
    } else if (dataType === 'country') {
      popArr = data.map(years => years.value.toFixed(2));
      labelType = `${name} average fertility rate`;
    }
  }

  return {
    labels: yearArr,
    datasets: [
      {
        label: labelType,
        backgroundColor: 'rgba(92, 134, 147, 0.2)',
        pointBackgroundColor: 'rgba(92, 134, 147, 1)',
        data: popArr,
      },
    ],
  };
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(92, 134, 147, 1)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
};

const styles = {
  graphContainer: {
    border: '1px solid #efefef',
    padding: '15px',
  },
};

export default class CenterGraph extends Component {
  state = {
    data: {},
    rangeValues: { min: 1980, max: 2017 },
    completeRangeValues: { min: 1980, max: 2017 },
  };
  componentDidMount() {
    if (this.props.worldPop.length !== 0) {
      this.getChartData();
    }
  }
  getChartData() {
    let cData = chartData(
      this.props.worldPop,
      this.props.dataType,
      this.props.countryName,
      this.props.router,
    );
    this.setState({ data: cData });
  }
  render() {
    return (
      <div className="content__graph">
        <div style={styles.graphContainer}>
          <LineChart data={this.state.data} options={options} />
        </div>
        <InputRange
          maxValue={2017}
          minValue={1980}
          value={this.state.rangeValues}
          onChange={value => this.setState({ rangeValues: value })}
          onChangeComplete={value => {
            this.setState({ completeRangeValues: value });
            let filteredData = this.props.worldPop.filter(
              years =>
                parseInt(years.year) >= value.min &&
                parseInt(years.year) <= value.max,
            );
            this.setState({
              data: chartData(
                filteredData,
                this.props.dataType,
                this.props.countryName,
                this.props.router,
              ),
            });
          }}
        />
      </div>
    );
  }
}

CenterGraph.propTypes = {
  worldPop: PropTypes.array,
  dataType: PropTypes.string,
  countryName: PropTypes.string,
  router: PropTypes.string,
};
