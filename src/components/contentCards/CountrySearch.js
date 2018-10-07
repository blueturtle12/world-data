import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CountrySearch extends Component {
  state = {
    searchText: '',
  };
  HandleSearch = e => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    let countryList = this.props.countryList.map((country, index) => {
      if (
        country.name
          .toUpperCase()
          .indexOf(this.state.searchText.toUpperCase()) > -1
      ) {
        return (
          <li key={index} className="country-list__item">
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
};
