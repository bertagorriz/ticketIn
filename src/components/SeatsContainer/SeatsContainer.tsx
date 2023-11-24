import SeatsInfo from "../SeatsInfo/SeatsInfo";
import SeatsList from "../SeatsList/SeatsList";
import SeatsContainerStyled from "./SeatsContainerStyled";

const SeatsContainer = (): React.ReactElement => {
  return (
    <SeatsContainerStyled>
      <SeatsList />
      <SeatsInfo />
    </SeatsContainerStyled>
  );
};

export default SeatsContainer;
