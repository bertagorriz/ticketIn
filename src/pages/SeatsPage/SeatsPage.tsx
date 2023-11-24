import SeatsContainer from "../../components/SeatsContainer/SeatsContainer";
import SeatsPageStyled from "./SeatsPageStyled";

const SeatsPage = (): React.ReactElement => {
  return (
    <SeatsPageStyled>
      <h1 className="title">Choose your seats</h1>
      <SeatsContainer />
    </SeatsPageStyled>
  );
};

export default SeatsPage;
