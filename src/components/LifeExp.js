import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LifeExp extends Component {
  render() {
    return (
      <section className="router-page lifexp">
        <h1>Life expectancy</h1>
      </section>
    );
  }
}

export default withRouter(LifeExp);
