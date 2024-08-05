import styled from "@emotion/styled";
import {
  firstMandatoryColor,
  thirdMandatoryColor,
  primaryColorDash,
} from "../../constants/colors";

import UseRouter from "../../hooks/useRouter";
import { borderRadiusCard } from "../../constants/borders";
import { AdminIcon } from "../../../assets/icons/admin";
import { UserIcon } from "../../../assets/icons/user";
import { CompanyIcon } from "../../../assets/icons/company";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${firstMandatoryColor};
  width: 300px;
  padding: 10px;
  min-height: 100vh;
  position: absolute;
  top: 0px;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h1 {
      font-size: 28px;
    }
  }
  @media (width<=900px) {
    width: 200px;
    .header h1{
      font-size: 22px;
   }
  }
  @media (width<=800px) {
    width: 100px;
   .header h1{
    display: none;
   }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Section = styled.section<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => (props.active ? primaryColorDash : "transparent")};
  border-radius: ${borderRadiusCard};
  padding: 10px;
  color: ${(props) => (props.active ? "white" : thirdMandatoryColor)};
  @media (width<=800px) {
    justify-content: center;
    span{
        display: none;
    }
  }
`;

const Sidebar = () => {
  //get current url
  const { handleNavigation, currentUrl } = UseRouter();
  return (
    <Container>
      <div className="header">
        <AdminIcon size="28" />
        <h1>Dashboard</h1>
      </div>
      <Links>
        <Section
          onClick={() => handleNavigation("/dashboard/users")}
          active={currentUrl == "/dashboard/users"}
        >
          <UserIcon size="22" />
          <span>Usuarios</span>
        </Section>
        <Section
          onClick={() => handleNavigation("/dashboard/companies")}
          active={currentUrl == "/dashboard/companies"}
        >
          <CompanyIcon size="22" />
          <span>Compañias</span>
        </Section>
      </Links>
    </Container>
  );
};

export default Sidebar;
