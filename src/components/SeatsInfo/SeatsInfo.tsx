import SeatsInfoStyled from "./SeatsInfoStyled";

const SeatsInfo = (): React.ReactElement => {
  return (
    <SeatsInfoStyled className="info-container">
      <article className="info-container__row--title">
        <img src="/images/seats/movie.svg" alt="movie" />
        <span>Barbie</span>
      </article>
      <article className="info-container__row">
        <div className="info-container__text">
          <img src="/images/seats/calendar.svg" alt="calendar" />
          <span>Sun, Nov 12, 2023</span>
        </div>
        <div className="info-container__text">
          <img src="/images/seats/available-circle.svg" alt="circle" />
          <span>16:30</span>
        </div>
      </article>
      <article className="info-container__row">
        <div className="info-container__text">
          <img src="/images/seats/ticket.svg" alt="calendar" />
          <span>Row: 4</span>
        </div>
        <div className="info-container__text">
          <img src="/images/seats/available-circle.svg" alt="circle" />
          <span>Seats: 2, 4</span>
        </div>
      </article>
      <article className="info-container__row">
        <div className="info-container__text">
          <img src="/images/seats/trolley.svg" alt="calendar" />
          <span>18€</span>
        </div>
      </article>
    </SeatsInfoStyled>
  );
};

export default SeatsInfo;
