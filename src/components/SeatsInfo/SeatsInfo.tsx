const SeatsInfo = (): React.ReactElement => {
  return (
    <>
      <div>
        <img src="/images/seats/movie.svg" alt="movie" />
        <span>Barbie</span>
      </div>
      <div>
        <div>
          <img src="/images/seats/calendar.svg" alt="calendar" />
          <span>Sun, Nov 12, 2023</span>
        </div>
        <div>
          <img src="/images/seats/available-circle.svg" alt="circle" />
          <span>16:30</span>
        </div>
      </div>
      <div>
        <div>
          <img src="/images/seats/ticket.svg" alt="calendar" />
          <span>Row: 4</span>
        </div>
        <div>
          <img src="/images/seats/available-circle.svg" alt="circle" />
          <span>Seats: 2, 4</span>
        </div>
      </div>
      <div>
        <div>
          <img src="/images/seats/trolley.svg" alt="calendar" />
          <span>18€</span>
        </div>
      </div>
    </>
  );
};

export default SeatsInfo;
