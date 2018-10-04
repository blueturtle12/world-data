import React from 'react';
import TopTen from './contentCards/TopTen';
import CenterGraph from './contentCards/CenterGraph';
import LastTenYears from './contentCards/LastTenYears';

const World = () => {
  return (
    <div className="world-content">
      <TopTen />
      <CenterGraph />
      <LastTenYears />
    </div>
  );
};

export default World;
