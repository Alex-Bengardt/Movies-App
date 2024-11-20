import React, { Component } from 'react';

import Input from '../Input';
import MoviesList from '../MoviesList';
import PaginationBottom from '../Pagination';

export default class Search extends Component {
  render() {
    const {
      handleInputChange,
      query,
      results,
      janary,
      loading,
      handleChangePage,
      page,
      total_results,
      onRated,
    } = this.props;
    return (
      <div className="top">
        <Input handleInputChange={handleInputChange} query={query} />
        <MoviesList
          onRated={onRated}
          results={results}
          janary={janary}
          loading={loading}
          query={query}
          handleInputChange={handleInputChange}
        />
        {Boolean(total_results) && (
          <PaginationBottom
            handleChangePage={handleChangePage}
            page={page}
            total_results={total_results}
          />
        )}
      </div>
    );
  }
}
