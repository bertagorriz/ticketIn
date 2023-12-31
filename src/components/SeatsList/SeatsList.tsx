import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import SeatsListStyled from "./SeatsListStyled";

interface GetTotalPriceStructure {
  sumTotalPrice: () => void;
  restTotalPrice: () => void;
  reservedSeats: string[];
  setReservedSeats: Dispatch<SetStateAction<string[]>>;
  unavailableSeats: string[];
}

const SeatsList = ({
  restTotalPrice,
  sumTotalPrice,
  reservedSeats,
  setReservedSeats,
  unavailableSeats,
}: GetTotalPriceStructure): React.ReactElement => {
  const setSeatsLocation = (
    rowPosition: number,
    seatPosition: number,
  ): string => {
    return `r${rowPosition + 1}s${seatPosition + 1}`;
  };

  const isReservedSeat = (seatsLocation: string, usedSeats: string[]) => {
    return usedSeats.includes(seatsLocation);
  };

  const handleOnClick = (rowPosition: number, seatPosition: number) => {
    const seatsLocation = setSeatsLocation(rowPosition, seatPosition);

    if (isReservedSeat(seatsLocation, reservedSeats)) {
      setReservedSeats(
        reservedSeats.filter((seats) => seats !== seatsLocation),
      );
      restTotalPrice();
      return;
    }

    setReservedSeats([...reservedSeats, seatsLocation]);
    sumTotalPrice();
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
                    disabled={isReservedSeat(
                      setSeatsLocation(rowPosition, seatPosition),
                      unavailableSeats,
                    )}
                  >
                    <img
                      src={`/images/seats/${
                        isReservedSeat(
                          setSeatsLocation(rowPosition, seatPosition),
                          unavailableSeats,
                        )
                          ? `reserved`
                          : isReservedSeat(
                              setSeatsLocation(rowPosition, seatPosition),
                              reservedSeats,
                            )
                          ? `selected`
                          : `available`
                      }.svg`}
                      alt={`${
                        isReservedSeat(
                          setSeatsLocation(rowPosition, seatPosition),
                          unavailableSeats,
                        )
                          ? `reserved`
                          : isReservedSeat(
                              setSeatsLocation(rowPosition, seatPosition),
                              reservedSeats,
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
