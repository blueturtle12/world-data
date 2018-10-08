import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import DrawerToggleButton from './DrawerToggleButton';

const Toolbar = props => {
  return (
    <div className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <NavLink to="/" className="toolbar__link_logo">
            World Data Book
          </NavLink>
          <div className="toolbar__logo-image" />
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <NavLink className="toolbar__link" to="/population">
                Population
              </NavLink>
            </li>
            <li>
              <NavLink className="toolbar__link" to="/lifexp">
                Life expectancy
              </NavLink>
            </li>
            <li>
              <NavLink className="toolbar__link" to="/fertility">
                Fertility
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Toolbar.propTypes = {
  drawerClickHandler: PropTypes.func,
};

export default Toolbar;
