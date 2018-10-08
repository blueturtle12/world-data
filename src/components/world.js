import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopTen from './contentCards/TopTen';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CenterGraph from './contentCards/CenterGraph';
import LastTenYears from './contentCards/LastTenYears';
import { getWorldData } from '../actions/ApiCalls';

class World extends Component {
  componentDidMount() {
    if (this.props.worldPop.length === 0) {
      this.props.getWorldData();
    }
  }
  render() {
    return this.props.loading ? (
      <div className="router-page__loader">
        <Loader type="RevolvingDot" color="#5c8693" height="150" width="150" />
      </div>
    ) : (
      <div className="world-content">
        <TopTen />
        <CenterGraph worldPop={this.props.worldPop} dataType={'world'} />
        <LastTenYears worldPop={this.props.worldPop} dataType={'world'} />
      </div>
    );
  }
}

World.propTypes = {
  getWorldData: PropTypes.func,
  worldPop: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    worldPop: state.population.worldPop,
    loading: state.population.worldPopLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWorldData: () => {
      dispatch(getWorldData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(World);
