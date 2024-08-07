import { icons } from "../../../../common/constants/icons";
import { useWindowDimensions } from "../../../../common/hooks/useWindowDimension";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  margin-bottom: 80vh;
`;

type ParamsType = {};
const Header = ({}: ParamsType) => {
  //MediaQueries
  const { width } = useWindowDimensions();
  const sizeIcons = () => {
    return width >= 461 ? icons.size : icons.sizeSmaller;
  };
  return (
    <Container>
      <Navbar sizeIcons={sizeIcons} />
      <Home sizeIcons={sizeIcons}/>
    </Container>
  );
};

export default Header;
