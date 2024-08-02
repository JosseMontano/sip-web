import Home from "./home/home";
import Navbar from "./navbar/navbar";
import styled from "@emotion/styled";

const Container = styled.div`

  `;

type ParamsType = {};
const Header = ({}: ParamsType) => {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
};

export default Header;
