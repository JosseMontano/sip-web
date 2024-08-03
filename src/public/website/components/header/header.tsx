import Home from "./home/home";
import Navbar from "./navbar/navbar";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  margin-bottom: 80vh;
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
