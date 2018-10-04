import React from 'react';
import PropTypes from 'prop-types';

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

DrawerToggleButton.propTypes = {
  click: PropTypes.func,
};

export default DrawerToggleButton;
