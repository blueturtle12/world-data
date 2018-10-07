import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CenterGraph from './contentCards/CenterGraph';
import LastTenYears from './contentCards/LastTenYears';
import CountrySearch from './contentCards/CountrySearch';
import { getWorldData } from '../actions/ApiCalls';
import { getAllCountriesData } from '../actions/ApiCallsCountry';

class Country extends Component {
  componentDidMount() {
    if (this.props.countryList.length === 0) {
      this.props.getAllCountriesData();
    }
  }
  render() {
    return this.props.loading ? (
      <div className="router-page__loader">
        <Loader type="RevolvingDot" color="#5c8693" height="150" width="150" />
      </div>
    ) : (
      <div className="world-content">
        <CountrySearch countryList={this.props.countryList} />
        <CenterGraph worldPop={this.props.worldPop} />
        <LastTenYears worldPop={this.props.worldPop} />
      </div>
    );
  }
}

Country.propTypes = {
  getWorldData: PropTypes.func,
  getAllCountriesData: PropTypes.func,
  worldPop: PropTypes.array,
  countryList: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    worldPop: state.population.worldPop,
    loading: state.countryList.countryListLoading,
    countryList: state.countryList.countryList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWorldData: () => {
      dispatch(getWorldData());
    },
    getAllCountriesData: () => {
      dispatch(getAllCountriesData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Country);
