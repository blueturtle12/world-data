import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { popObj, fertObj, lifeObj } from './dummyData';

export default class TopTen extends Component {
  state = {
    displayedPage: 1,
  };
  render() {
    let firstOlClass = 'top-ten__list';
    if (this.state.displayedPage === 1) {
      firstOlClass += ' active-page';
    }
    let secondOlClass = 'top-ten__list second-counter';
    if (this.state.displayedPage === 2) {
      secondOlClass += ' active-page';
    }
    let objArr =
      this.props.router === 'population'
        ? popObj
        : this.props.router === 'fert'
          ? fertObj
          : this.props.router === 'life'
            ? lifeObj
            : null;
    return (
      <div className="content__top-ten">
        <h3 className="top-ten__subtitle">Top 10 countries</h3>
        <ol className={firstOlClass}>
          <li>
            <span>{objArr[0].country} :</span> <span> {objArr[0].value}</span>
          </li>
          <li>
            <span>{objArr[1].country} :</span>
            <span> {objArr[1].value}</span>
          </li>
          <li>
            <span>{objArr[2].country} :</span> <span> {objArr[2].value}</span>
          </li>
          <li>
            <span>{objArr[3].country} :</span> <span> {objArr[3].value}</span>
          </li>
          <li>
            <span>{objArr[4].country} :</span> <span> {objArr[4].value}</span>
          </li>
        </ol>
        <ol className={secondOlClass}>
          <li>
            <span>{objArr[5].country} :</span> <span> {objArr[5].value}</span>
          </li>
          <li>
            <span>{objArr[6].country} :</span> <span> {objArr[6].value}</span>
          </li>
          <li>
            <span>{objArr[7].country} :</span> <span> {objArr[7].value}</span>
          </li>
          <li>
            <span>{objArr[8].country} :</span> <span> {objArr[8].value}</span>
          </li>
          <li>
            <span>{objArr[9].country} :</span> <span> {objArr[9].value}</span>
          </li>
        </ol>
        <div className="pagination">
          <ul>
            <li>
              <a onClick={() => this.setState({ displayedPage: 1 })}>&lt;</a>
            </li>
            <li>
              <ol>
                <li className="active">
                  <a onClick={() => this.setState({ displayedPage: 1 })}>1</a>
                </li>
                <li>
                  <a onClick={() => this.setState({ displayedPage: 2 })}>2</a>
                </li>
              </ol>
            </li>
            <li className="next">
              <a onClick={() => this.setState({ displayedPage: 2 })}>&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

TopTen.propTypes = {
  router: PropTypes.string,
};
