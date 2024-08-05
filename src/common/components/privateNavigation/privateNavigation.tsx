import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Sidebar from "./siderbar";

const Container = styled.div`
  background-color: #f2f6fc;

`;

const Content = styled.div`
 
    margin-left: 300px;
    padding: 20px;
    h3{
      margin-bottom: 30px;
    }
    @media (width<=900px) {
      margin-left: 200px;
  }
  @media (width<=800px) {
      margin-left: 100px;
  }
`

const PrivateNavigation = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h3>Hello Jose 👋,</h3>
        <Outlet />
      </Content>
    </Container>
  );
};

export default PrivateNavigation;
