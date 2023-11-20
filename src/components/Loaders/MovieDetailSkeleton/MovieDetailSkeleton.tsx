import Skeleton from "react-loading-skeleton";

const MovieDetailSkeleton = (): React.ReactElement => {
  return (
    <>
      <Skeleton
        className="movie-poster"
        width={320}
        height={467}
        duration={0}
        baseColor="#2a2a2a"
      />
      <section className="movie">
        <div className="movie-info">
          <div>
            <h1 className="movie-info__title" aria-label="skeleton">
              <Skeleton width={150} duration={2} />
            </h1>
            <h2 className="movie-info__director">
              <Skeleton width={150} duration={2} />
            </h2>
          </div>
          <ul>
            <li className="movie-info__runtime">
              <Skeleton width={190} duration={2} />
            </li>
            <li className="movie-info__genre">
              <Skeleton width={190} duration={2} />
            </li>
          </ul>
          <p className="movie-info__synopsis">
            <Skeleton width={280} duration={2} count={6} />
          </p>
        </div>
        <div className="movie-sessions">
          <h2 className="movie-sessions__title">
            <Skeleton width={150} duration={2} />
          </h2>
          <span>
            <Skeleton width={100} duration={2} />
          </span>
          <span>
            <Skeleton width={90} height={40} duration={2} />
          </span>
          <span>
            <Skeleton width={100} duration={2} />
          </span>
          <span>
            <Skeleton width={90} height={40} duration={2} />
          </span>
        </div>
      </section>
    </>
  );
};

export default MovieDetailSkeleton;
