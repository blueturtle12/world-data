import React from 'react';
import TopTen from './contentCards/TopTen';
import PropTypes from 'prop-types';
import CenterGraph from './contentCards/CenterGraph';
import LastTenYears from './contentCards/LastTenYears';

const World = props => {
  return (
    <div className="world-content">
      <TopTen />
      <CenterGraph worldPop={props.worldPop} />
      <LastTenYears />
    </div>
  );
};

World.propTypes = {
  worldPop: PropTypes.array,
};

export default World;
