import React, { Component } from 'react';
import { Spin } from 'antd';

import MoviesItem from '../MoviesItem';

export default class MoviesList extends Component {
  render() {
    const { results, janary, loading, onRated, error } = this.props;

    if (loading) {
      return (
        <Spin style={{ zIndex: 50, top: '50%', left: '50%' }} size="large" />
      );
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    if (results.length === 0) {
      return <div className="no-results">No movies found.</div>;
    }

    return (
      <>
        <ul className="movieslist">
          {results.map((movie) => {
            const { id } = movie;
            return (
              <MoviesItem
                key={id}
                movie={movie}
                janary={janary}
                onRated={onRated}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
