import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { activeButton, handleButtonClick } = this.props;

    return (
      <div className="header">
        <button
          className={`header__search ${activeButton === 'search' ? 'active' : ''}`}
          onClick={() => handleButtonClick('search')}
        >
          Search
        </button>
        <button
          className={`header__rated ${activeButton === 'rated' ? 'active' : ''}`}
          onClick={() => handleButtonClick('rated')}
        >
          Rated
        </button>
      </div>
    );
  }
}
