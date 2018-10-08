import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountryData } from '../../actions/ApiCallsCountry';

class CountrySearch extends Component {
  state = {
    searchText: '',
  };
  componentDidMount() {
    if (this.props.country.length === 0) {
      this.props.getCountryData('UA');
    }
  }
  HandleSearch = e => {
    this.setState({ searchText: e.target.value });
  };
  HandleClick = countryCode => {
    this.props.getCountryData(countryCode);
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
            onClick={() => this.HandleClick(country.alpha2Code)}
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
};

const mapStateToProps = state => {
  return {
    loadingCountry: state.countryList.searchedCountryLoading,
    country: state.countryList.searchedCountry,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCountryData: country => {
      dispatch(getCountryData(country));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountrySearch);
