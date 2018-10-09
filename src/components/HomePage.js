import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <section className="home-page">
        <NavLink to="/population" className="home__pop-redirect">
          <h1>Population</h1>
        </NavLink>
        <NavLink to="/lifexp" className="home__life-redirect">
          <h1>Life expectancy</h1>
        </NavLink>
        <NavLink to="/fertility" className="home__fert-redirect">
          <h1>Fertility rate</h1>
        </NavLink>
      </section>
    );
  }
}
