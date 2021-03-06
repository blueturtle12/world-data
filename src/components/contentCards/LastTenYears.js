import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';

const chartData = (data, dataType, name, router) => {
  let filteredArr = data.filter(years => parseInt(years.year) > 2007);
  filteredArr.reverse();
  let yearArr = filteredArr.map(years => years.year);
  let popArr;
  let labelType;
  if (router === 'population') {
    if (dataType === 'world') {
      popArr = filteredArr.map(years => (years.value / 1000000000).toFixed(2));
      labelType = 'Total world population in Billions';
    } else if (dataType === 'country') {
      popArr = filteredArr.map(years => (years.value / 1000000).toFixed(2));
      labelType = `${name} Total population in Millions`;
    }
  } else if (router === 'life') {
    if (dataType === 'world') {
      popArr = filteredArr.map(years => years.value.toFixed(2));
      labelType = 'Average world life expectancy';
    } else if (dataType === 'country') {
      popArr = filteredArr.map(years => years.value.toFixed(2));
      labelType = `${name} average life expectancy`;
    }
  } else if (router === 'fert') {
    if (dataType === 'world') {
      popArr = filteredArr.map(years => years.value.toFixed(2));
      labelType = 'Average world fertility rate';
    } else if (dataType === 'country') {
      popArr = filteredArr.map(years => years.value.toFixed(2));
      labelType = `${name} average fertility rate`;
    }
  }

  return {
    labels: yearArr,
    datasets: [
      {
        label: labelType,
        backgroundColor: 'rgba(92, 134, 147, 0.2)',
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

export default class LastTenYears extends Component {
  state = {
    data: {},
  };
  UNSAFE_componentWillMount() {
    if (this.props.worldPop.length !== 0) {
      this.getChartData();
    }
  }
  getChartData() {
    let barData = chartData(
      this.props.worldPop,
      this.props.dataType,
      this.props.countryName,
      this.props.router,
    );
    this.setState({ data: barData });
  }
  render() {
    return (
      <div className="content__last-ten">
        <h3>Last ten years</h3>
        <HorizontalBar data={this.state.data} options={options} />
      </div>
    );
  }
}

LastTenYears.propTypes = {
  worldPop: PropTypes.array,
  dataType: PropTypes.string,
  countryName: PropTypes.string,
  router: PropTypes.string,
};
