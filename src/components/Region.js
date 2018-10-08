import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import PieChart from './contentCards/PieChart';
import BarChart from './contentCards/BarChart';
import { getRegionData } from '../actions/ApiCalls';
import { getRegionLifeData } from '../actions/LifeApiCalls';
import { getRegionFertData } from '../actions/FertApiCalls';

class Region extends Component {
  componentDidMount() {
    if (this.props.router === 'population') {
      if (this.props.regionPop.length === 0) {
        this.props.getRegionData();
      }
    } else if (this.props.router === 'life') {
      if (this.props.regionLife.length === 0) {
        this.props.getRegionLifeData();
      }
    } else if (this.props.router === 'fert') {
      if (this.props.regionFert.length === 0) {
        this.props.getRegionFertData();
      }
    }
  }
  render() {
    return this.props.loading ||
      this.props.regionFertLoading ||
      this.props.regionLifeLoading ? (
      <div className="router-page__loader">
        <Loader type="RevolvingDot" color="#5c8693" height="150" width="150" />
      </div>
    ) : (
      <div className="region-content">
        <PieChart
          regionPop={
            this.props.router === 'population'
              ? this.props.regionPop
              : this.props.router === 'life'
                ? this.props.regionLife
                : this.props.regionFert
          }
          router={this.props.router}
        />
        <BarChart
          regionPop={
            this.props.router === 'population'
              ? this.props.regionPop
              : this.props.router === 'life'
                ? this.props.regionLife
                : this.props.regionFert
          }
          router={this.props.router}
        />
      </div>
    );
  }
}

Region.propTypes = {
  getRegionData: PropTypes.func,
  getRegionLifeData: PropTypes.func,
  getRegionFertData: PropTypes.func,
  regionPop: PropTypes.array,
  loading: PropTypes.bool,
  router: PropTypes.string,
  regionFert: PropTypes.array,
  regionFertLoading: PropTypes.bool,
  regionLife: PropTypes.array,
  regionLifeLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    regionPop: state.population.regionPop,
    loading: state.population.regionPopLoading,
    regionFert: state.fert.regionFert,
    regionFertLoading: state.fert.regionFertLoading,
    regionLife: state.life.regionLife,
    regionLifeLoading: state.life.regionLifeLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRegionData: () => {
      dispatch(getRegionData());
    },
    getRegionLifeData: () => {
      dispatch(getRegionLifeData());
    },
    getRegionFertData: () => {
      dispatch(getRegionFertData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Region);
