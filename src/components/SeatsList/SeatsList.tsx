import SeatsListStyled from "./SeatsListStyled";

const SeatsList = (): React.ReactElement => {
  return (
    <SeatsListStyled>
      {Array(4)
        .fill("row")
        .map((_row, position) => (
          <ul className="seats__row" key={position}>
            {Array(5)
              .fill("seat")
              .map((_seat, position) => (
                <li key={position}>
                  <img src="/images/seats/available.svg" alt="available seat" />
                </li>
              ))}
          </ul>
        ))}
    </SeatsListStyled>
  );
};

export default SeatsList;
