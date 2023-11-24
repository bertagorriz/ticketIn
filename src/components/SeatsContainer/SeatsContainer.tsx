import SeatsInfo from "../SeatsInfo/SeatsInfo";
import SeatsList from "../SeatsList/SeatsList";

const SeatsContainer = (): React.ReactElement => {
  return (
    <div>
      <SeatsList />
      <SeatsInfo />
    </div>
  );
};

export default SeatsContainer;
