import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <FontAwesomeIcon
        icon={['fas', 'times']}
        size="2x"
        className="side-drawer__close-button"
        onClick={props.hide}
      />
      <div className="side-drawer__logo-image" />
      <ul>
        <li>
          <NavLink className="side-drawer__item" to="/population">
            Population
          </NavLink>
        </li>
        <li>
          <NavLink className="side-drawer__item" to="/lifexp">
            Life expactancy
          </NavLink>
        </li>
        <li>
          <NavLink className="side-drawer__item" to="/fertility">
            Fertility
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  hide: PropTypes.func,
  show: PropTypes.bool,
};

export default SideDrawer;
