const MovieList = (): React.ReactElement => {
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <ul>
        {movies.map((_movie, position) => (
          <li key={position}>
            <article id={position.toString()}></article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
