import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { handleInputChange, query } = this.props;

    return (
      <input
        onChange={handleInputChange}
        value={query}
        className="movieslist__input"
        type="text"
        placeholder="Tap to search movies :)"
      />
    );
  }
}
