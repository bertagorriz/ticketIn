import SeatsInfoStyled from "./SeatsInfoStyled";

interface SeatsInfoProps {
  movie: string;
  date: string[];
  row: string;
  seats: string[];
  price: number;
}

const SeatsInfo = ({
  movie,
  date,
  row,
  seats,
  price,
}: SeatsInfoProps): React.ReactElement => {
  return (
    <SeatsInfoStyled className="info-container">
      <article className="info-container__row--title">
        <img src="/images/seats/movie.svg" alt="movie" />
        <span>{movie}</span>
      </article>
      <article className="info-container__row">
        <div className="info-container__text">
          <img src="/images/seats/calendar.svg" alt="calendar" />
          <span>{`${date[1]} ${date[2]}`}</span>
        </div>
        <div className="info-container__text">
          <img src="/images/seats/available-circle.svg" alt="circle" />
          <span>{date[0]}</span>
        </div>
      </article>
      <article className="info-container__row">
        <div className="info-container__text">
          <img src="/images/seats/ticket.svg" alt="calendar" />
          <span>Row: {row}</span>
        </div>
        <div className="info-container__text">
          <img src="/images/seats/available-circle.svg" alt="circle" />
          <span>Seats: {seats}</span>
        </div>
      </article>
      <article className="info-container__row">
        <div className="info-container__text">
          <img src="/images/seats/trolley.svg" alt="calendar" />
          <span>Total: {price}€</span>
        </div>
      </article>
    </SeatsInfoStyled>
  );
};

export default SeatsInfo;
