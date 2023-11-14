import MoviesListStyled from "./MovieListStyled";

const MovieList = (): React.ReactElement => {
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <MoviesListStyled>
      <ul className="cards-list">
        {movies.map((_movie, position) => (
          <li key={position}>
            <article id={position.toString()}></article>
          </li>
        ))}
      </ul>
    </MoviesListStyled>
  );
};

export default MovieList;
