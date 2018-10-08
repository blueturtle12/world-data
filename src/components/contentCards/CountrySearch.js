import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getCountryData,
  fetchCountryDataName,
  getCountryLifeData,
  getCountryFertData,
} from '../../actions/ApiCallsCountry';

class CountrySearch extends Component {
  state = {
    searchText: '',
  };
  componentDidMount() {
    if (this.props.router === 'population') {
      if (this.props.country.length === 0) {
        this.props.getCountryData('UA');
        this.props.fetchCountryDataName('ukraine');
      }
    } else if (this.props.router === 'life') {
      if (this.props.countryLife.length === 0) {
        this.props.getCountryLifeData('UA');
        this.props.fetchCountryDataName('ukraine');
      }
    } else if (this.props.router === 'fert') {
      if (this.props.countryFert.length === 0) {
        this.props.getCountryFertData('UA');
        this.props.fetchCountryDataName('ukraine');
      }
    }
  }
  HandleSearch = e => {
    this.setState({ searchText: e.target.value });
  };
  HandleClick = (countryCode, name) => {
    this.props.getCountryData(countryCode);
    this.props.fetchCountryDataName(name);
  };
  render() {
    let countryList = this.props.countryList.map((country, index) => {
      if (
        country.name
          .toUpperCase()
          .indexOf(this.state.searchText.toUpperCase()) > -1
      ) {
        return (
          <li
            key={index}
            className="country-list__item"
            value={country.alpha2Code}
            onClick={() => this.HandleClick(country.alpha2Code, country.name)}
          >
            <span className="country-list__item__name">{country.name}</span>
            <span
              className="country-list__flag"
              style={{ backgroundImage: `url(${country.flag})` }}
            />
          </li>
        );
      }
    });
    return (
      <div className="search">
        <div className="search__header">
          <h4>Search for a country</h4>
        </div>
        <div className="search__content">
          <input
            type="text"
            className="search__input"
            onChange={this.HandleSearch}
            value={this.state.searchText}
          />
          <ul className="search__select">{countryList}</ul>
        </div>
      </div>
    );
  }
}

CountrySearch.propTypes = {
  countryList: PropTypes.array,
  loadingCountry: PropTypes.bool,
  country: PropTypes.array,
  getCountryData: PropTypes.func,
  getCountryLifeData: PropTypes.func,
  getCountryFertData: PropTypes.func,
  fetchCountryDataName: PropTypes.func,
  countryLife: PropTypes.array,
  countryFert: PropTypes.array,
  router: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    loadingCountry: state.countryList.searchedCountryLoading,
    country: state.countryList.searchedCountry,
    countryLife: state.countryList.searchedCountryLife,
    countryFert: state.countryList.searchedCountryFert,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountryData: country => {
      dispatch(getCountryData(country));
    },
    getCountryLifeData: country => {
      dispatch(getCountryLifeData(country));
    },
    getCountryFertData: country => {
      dispatch(getCountryFertData(country));
    },
    fetchCountryDataName: name => {
      dispatch(fetchCountryDataName(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountrySearch);
