import { useState } from "react";
import Button from "../Button/Button";
import SeatsListStyled from "./SeatsListStyled";

const SeatsList = (): React.ReactElement => {
  const [reservedSeats, setReservedSeats] = useState([] as string[]);

  const setSeatsLocation = (
    rowPosition: number,
    seatPosition: number,
  ): string => {
    return `r${rowPosition + 1}s${seatPosition + 1}`;
  };

  const isReservedSeat = (seatsLocation: string) => {
    return reservedSeats.includes(seatsLocation);
  };

  const handleOnClick = (rowPosition: number, seatPosition: number) => {
    const seatsLocation = setSeatsLocation(rowPosition, seatPosition);

    if (isReservedSeat(seatsLocation)) {
      setReservedSeats(
        reservedSeats.filter((seats) => seats !== seatsLocation),
      );
      return;
    }

    setReservedSeats([...reservedSeats, seatsLocation]);
    return;
  };

  return (
    <SeatsListStyled className="seats">
      <img
        className="seats__screen"
        src="/images/seats/screen.svg"
        alt="screen"
      />
      {Array(4)
        .fill("row")
        .map((_row, rowPosition) => (
          <ul className="seats__row" key={rowPosition}>
            {Array(5)
              .fill("seat")
              .map((_seat, seatPosition) => (
                <li key={seatPosition}>
                  <Button
                    classname="seat"
                    actionOnClick={() =>
                      handleOnClick(rowPosition, seatPosition)
                    }
                  >
                    <img
                      src={`/images/seats/${
                        isReservedSeat(
                          setSeatsLocation(rowPosition, seatPosition),
                        )
                          ? `selected`
                          : `available`
                      }.svg`}
                      alt={`${
                        isReservedSeat(
                          setSeatsLocation(rowPosition, seatPosition),
                        )
                          ? `selected`
                          : `available`
                      } seat`}
                    />
                  </Button>
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
