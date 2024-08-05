import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Sidebar from "./siderbar";

const Container = styled.div`
  .content{
    margin-left: 300px;
    padding: 20px;
  }
  @media (width<=800px) {
    .content{
      margin-left: 100px;
    }
  }
`

const PrivateNavigation = () => {
  return (
    <Container>
      <Sidebar />
      <div className="content">
        <h3>Hello Jose 👋,</h3>
      <Outlet />
      </div>
    </Container>
  );
};

export default PrivateNavigation;
