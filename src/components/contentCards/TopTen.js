import React, { Component } from 'react';

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
    return (
      <div className="content__top-ten">
        <h3 className="top-ten__subtitle">Top 10 countries</h3>
        <ol className={firstOlClass}>
          <li>
            <span>China :</span> <span> 1,403,500,365</span>
          </li>
          <li>
            <span>India :</span>
            <span> 1,324,171,354</span>
          </li>
          <li>
            <span>United States :</span> <span> 322,179,605</span>
          </li>
          <li>
            <span>Indonesia :</span> <span> 261,115,456</span>
          </li>
          <li>
            <span>Brazil :</span> <span> 207,652,865</span>
          </li>
        </ol>
        <ol className={secondOlClass}>
          <li>
            <span>Pakistan :</span> <span> 193,203,476</span>
          </li>
          <li>
            <span>Nigeria :</span> <span> 185,898,640</span>
          </li>
          <li>
            <span>Bangladesh :</span> <span> 162,951,560</span>
          </li>
          <li>
            <span>Russia :</span> <span> 146,864,513</span>
          </li>
          <li>
            <span>Mexico :</span> <span> 127,540,423</span>
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
