import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

function chartData(data) {
  data.reverse();
  let yearArr = data.map(years => years.year);
  let popArr = data.map(years => years.value);
  return {
    labels: yearArr,
    datasets: [
      {
        label: 'Total world population',
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
  legendTemplate:
    '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
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
    rangeValues: { min: 1980, max: 2010 },
    completeRangeValues: { min: 1980, max: 2010 },
  };
  UNSAFE_componentWillMount() {
    if (this.props.worldPop.length !== 0) {
      this.getChartData();
    }
  }
  getChartData() {
    let cData = chartData(this.props.worldPop);
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
          minValue={1970}
          value={this.state.rangeValues}
          onChange={value => this.setState({ rangeValues: value })}
          onChangeComplete={value => {
            this.setState({ completeRangeValues: value });
            let filteredData = this.props.worldPop.filter(
              years =>
                parseInt(years.year) >= value.min &&
                parseInt(years.year) <= value.max,
            );
            this.setState({ data: chartData(filteredData.reverse()) });
          }}
        />
      </div>
    );
  }
}

CenterGraph.propTypes = {
  worldPop: PropTypes.array,
};
