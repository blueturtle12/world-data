import React, { Component } from 'react';
import Toolbar from './HeaderSubFiles/Toolbar';
import SideDrawer from './HeaderSubFiles/SideDrawer';
import BackDrop from './HeaderSubFiles/BackDrop';

export default class Header extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickhandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <React.Fragment>
        <header>
          <div className="header__nav">
            <Toolbar drawerClickHandler={this.drawerToggleClickhandler} />
          </div>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            hide={this.backDropClickHandler}
          />
          {backdrop}
        </header>
      </React.Fragment>
    );
  }
}
