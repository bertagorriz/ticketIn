import SeatsListStyled from "./SeatsListStyled";

const SeatsList = (): React.ReactElement => {
  return (
    <SeatsListStyled className="seats">
      <img
        className="seats__screen"
        src="/images/seats/screen.svg"
        alt="screen"
      />
      {Array(4)
        .fill("row")
        .map((_row, position) => (
          <ul className="seats__row" key={position}>
            {Array(5)
              .fill("seat")
              .map((_seat, position) => (
                <li key={position}>
                  <img src="/images/seats/available.svg" alt="seat" />
                </li>
              ))}
          </ul>
        ))}
      <section className="seats__legend">
        <div className="seats__legend--available">
          <img
            src="/images/seats/available-circle.svg"
            alt="available seat color"
          />
          <span>Available</span>
        </div>
        <div className="seats__legend--selected">
          <img
            src="/images/seats/selected-circle.svg"
            alt="selected seat color"
          />
          <span>Selected</span>
        </div>
        <div className="seats__legend--reserved">
          <img
            src="/images/seats/reserved-circle.svg"
            alt="reserved seat color"
          />
          <span>Reserved</span>
        </div>
      </section>
    </SeatsListStyled>
  );
};

export default SeatsList;
