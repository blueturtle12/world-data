import React, { Component } from 'react';
import { connect } from 'react-redux';
import World from './world';
import Country from './Country';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Region from './Region';
import { getWorldData } from '../actions/ApiCalls';

class Population extends Component {
  state = {
    geoLocation: 'world',
  };
  componentDidMount() {
    this.props.getWorldData();
  }
  onSelectChange(location) {
    this.setState({ geoLocation: location });
  }
  render() {
    return (
      <section className="router-page population">
        <section className="router-page__header">
          <h1 className="router-page__title">Population</h1>
          <div className="router-page__geo-choice">
            <span>By</span>
            <select
              className="geo-choice__select"
              name="geo-location"
              onChange={e => this.onSelectChange(e.target.value)}
              value={this.state.geoLocation}
              aria-label="geo location"
            >
              <option value="world">World</option>
              <option value="region">Region</option>
              <option value="country">Country</option>
            </select>
          </div>
        </section>
        <div className="router-page__break" />
        <section className="router-page__content">
          {!this.props.worldPopLoading ? (
            (() => {
              switch (this.state.geoLocation) {
                case 'world':
                  return <World worldPop={this.props.worldPop} />;
                case 'region':
                  return <Region />;
                case 'country':
                  return <Country />;
              }
            })()
          ) : (
            <Loader
              type="RevolvingDot"
              color="#00BFFF"
              height="100"
              width="100"
            />
          )}
        </section>
      </section>
    );
  }
}

Population.propTypes = {
  getWorldData: PropTypes.func,
  worldPop: PropTypes.array,
  worldPopLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    worldPop: state.population.worldPop,
    worldPopLoading: state.population.worldPopLoading,
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
)(Population);
