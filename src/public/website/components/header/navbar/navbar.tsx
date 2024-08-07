import styled from "@emotion/styled";
import ContentUl from "./contentUl";
import ContentIcons from "./contentIcons";
import ContentImg from "./contentImg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 999;
  @media (width <= 630px) {
    justify-content: space-evenly;
  }
`;

type ParamsType = {
  sizeIcons: () => string
};

const Navbar = ({sizeIcons}: ParamsType) => {
  return (
    <Container>
      <ContentImg />
      <ContentUl />

      <ContentIcons sizeIcons={sizeIcons}/>
    </Container>
  );
};

export default Navbar;
