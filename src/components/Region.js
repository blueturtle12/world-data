import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import PieChart from './contentCards/PieChart';
import BarChart from './contentCards/BarChart';
import { getRegionData } from '../actions/ApiCalls';

class Region extends Component {
  componentDidMount() {
    if (this.props.regionPop.length === 0) {
      this.props.getRegionData();
    }
  }
  render() {
    return this.props.loading ? (
      <div className="router-page__loader">
        <Loader type="RevolvingDot" color="#5c8693" height="150" width="150" />
      </div>
    ) : (
      <div className="region-content">
        <PieChart regionPop={this.props.regionPop} />
        <BarChart regionPop={this.props.regionPop} />
      </div>
    );
  }
}

Region.propTypes = {
  getRegionData: PropTypes.func,
  regionPop: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    regionPop: state.population.regionPop,
    loading: state.population.regionPopLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRegionData: () => {
      dispatch(getRegionData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Region);
