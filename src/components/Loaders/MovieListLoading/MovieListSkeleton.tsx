import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MoviesListStyled from "../../MovieList/MovieListStyled";
import MovieCardStyled from "../../MovieCard/MovieCardStyled";
import MovieListPageStyled from "../../../pages/MovieListPage/MovieListPageStyled";

const MovieListSkeleton = (): React.ReactElement => {
  return (
    <MovieListPageStyled>
      <div className="box">
        <h1 className="title opacity" aria-label="skeleton">
          <Skeleton width={170} duration={2} containerClassName="flex-1" />
        </h1>
      </div>
      <MoviesListStyled>
        <ul className="cards-list opacity">
          {Array(6)
            .fill("cards")
            .map((_movie, position) => (
              <li key={position}>
                <MovieCardStyled className="movie">
                  <Skeleton
                    className="movie__poster"
                    containerClassName="flex-1"
                    width={130}
                    height={190}
                    duration={2}
                  />
                  <h2 className="movie__title">
                    <Skeleton
                      width={130}
                      duration={2}
                      containerClassName="flex-1"
                    />
                  </h2>
                </MovieCardStyled>
              </li>
            ))}
        </ul>
      </MoviesListStyled>
    </MovieListPageStyled>
  );
};

export default MovieListSkeleton;
