import React, { Component } from 'react';
import World from './world';
import Country from './Country';
import Region from './Region';

class Population extends Component {
  state = {
    geoLocation: 'world',
  };
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
          {(() => {
            switch (this.state.geoLocation) {
              case 'world':
                return <World router={'population'} />;
              case 'region':
                return <Region router={'population'} />;
              case 'country':
                return <Country router={'population'} />;
            }
          })()}
        </section>
      </section>
    );
  }
}

export default Population;
