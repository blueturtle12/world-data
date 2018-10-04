import React from 'react';
import PropTypes from 'prop-types';

const BackDrop = props => <div className="backdrop" onClick={props.click} />;

BackDrop.propTypes = {
  click: PropTypes.func,
};

export default BackDrop;
