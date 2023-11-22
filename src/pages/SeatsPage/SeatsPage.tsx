import SeatsList from "../../components/SeatsList/SeatsList";
import SeatsPageStyled from "./SeatsPageStyled";

const SeatsPage = (): React.ReactElement => {
  return (
    <SeatsPageStyled>
      <h1 className="title">Choose your seats</h1>
      <SeatsList />
    </SeatsPageStyled>
  );
};

export default SeatsPage;
