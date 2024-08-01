import styled from "@emotion/styled";
import { secondaryColor } from "../../../../common/constants/colors";
import ContentUl from "./navbar/contentUl";
import ContentIcons from "./navbar/contentIcons";
import ContentImg from "./navbar/contentImg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${secondaryColor};
  @media (width <= 630px) {
    justify-content: space-evenly;
  }
`;

type ParamsType = {};

const Navbar = ({}: ParamsType) => {
  return (
    <Container>
      <ContentImg />
      <ContentUl />

      <ContentIcons />
    </Container>
  );
};

export default Navbar;
