const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWZiMWMzZTgzYTE3MzNmODFmYzBkZWJlMWMzNWNkNyIsIm5iZiI6MTczMjA5NjQxNi40MDIxMDI3LCJzdWIiOiI2NzI2OWMzODllMDg3N2QxZDhhZjgwZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AuXzPl9G7f1KTmS5LytpESWWOSRAL0CbIBan2gcY2xs',
  },
};

export const getApiData = async (page, query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    options
  );

  return response.json();
};

export const getApijanary = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    options
  );

  return response.json();
};
