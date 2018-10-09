import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopTen from './contentCards/TopTen';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CenterGraph from './contentCards/CenterGraph';
import LastTenYears from './contentCards/LastTenYears';
import { getWorldData } from '../actions/ApiCalls';
import { getWorldLifeData } from '../actions/LifeApiCalls';
import { getWorldFertData } from '../actions/FertApiCalls';

class World extends Component {
  componentDidMount() {
    if (this.props.router === 'population') {
      if (this.props.worldPop.length === 0) {
        this.props.getWorldData();
      }
    } else if (this.props.router === 'life') {
      if (this.props.worldLife.length === 0) {
        this.props.getWorldLifeData();
      }
    } else if (this.props.router === 'fert') {
      if (this.props.worldFert.length === 0) {
        this.props.getWorldFertData();
      }
    }
  }
  render() {
    return this.props.loading ||
      this.props.lifeLoading ||
      this.props.fertLoading ? (
      <div className="router-page__loader">
        <Loader type="RevolvingDot" color="#5c8693" height="150" width="150" />
      </div>
    ) : (
      <div className="world-content">
        <TopTen router={this.props.router} />
        <CenterGraph
          worldPop={
            this.props.router === 'population'
              ? this.props.worldPop
              : this.props.router === 'life'
                ? this.props.worldLife
                : this.props.worldFert
          }
          dataType={'world'}
          countryName={'world'}
          router={this.props.router}
        />
        <LastTenYears
          worldPop={
            this.props.router === 'population'
              ? this.props.worldPop
              : this.props.router === 'life'
                ? this.props.worldLife
                : this.props.worldFert
          }
          dataType={'world'}
          router={this.props.router}
        />
      </div>
    );
  }
}

World.propTypes = {
  getWorldData: PropTypes.func,
  worldPop: PropTypes.array,
  loading: PropTypes.bool,
  lifeLoading: PropTypes.bool,
  router: PropTypes.string,
  worldLife: PropTypes.array,
  getWorldLifeData: PropTypes.func,
  getWorldFertData: PropTypes.func,
  fertLoading: PropTypes.bool,
  worldFert: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    worldPop: state.population.worldPop,
    loading: state.population.worldPopLoading,
    worldLife: state.life.worldLife,
    lifeLoading: state.life.worldLifeLoading,
    fertLoading: state.fert.worldFertLoading,
    worldFert: state.fert.worldFert,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWorldData: () => {
      dispatch(getWorldData());
    },
    getWorldLifeData: () => {
      dispatch(getWorldLifeData());
    },
    getWorldFertData: () => {
      dispatch(getWorldFertData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(World);
