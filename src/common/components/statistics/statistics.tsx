import styled from "@emotion/styled";
import { UserIcon } from "../../../assets/icons/user";
import {
  active1,
  active2,
  firstMandatoryColor,
  thirdMandatoryColor,
} from "../../constants/colors";
import { borderRadiusCard } from "../../constants/borders";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { StatisticsRes } from "./interfaces/StatisticsRes";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  @media (width<=450px) {
    & > * {
      grid-column: span 2;
    }
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${firstMandatoryColor};
  gap: 20px;
  padding: 30px;
  border-radius: ${borderRadiusCard};
`;

const ContentImg = styled.div`
  background-color: ${active2};
  padding: 10px;
  border-radius: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  h2 {
    font-size: 13px;
    color: ${thirdMandatoryColor};
  }
  p {
    line-height: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  @media (width<=630px) {
    h2 {
      font-size: 10px;
    }
    p {
      font-size: 18px;
    }
  }
`;


type ParamsType = {
  table: string;
  total:StatisticsRes
};
export const Statistics = ({ table, total }: ParamsType) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Card>
        <ContentImg>
          <UserIcon size={width >= 630 ? "35px" : "22px"} color={active1} />
        </ContentImg>
        <Content>
          <h2>Total de {table}</h2>
          <p>{total.totalData}</p>
        </Content>
      </Card>
      <Card>
        <ContentImg>
          <UserIcon size={width >= 630 ? "35px" : "22px"} color={active1} />
        </ContentImg>
        <Content>
          <h2>{table} habilitados</h2>
          <p>{total.totalDataAuthorized}</p>
        </Content>
      </Card>
      <Card>
        <ContentImg>
          <UserIcon size={width >= 630 ? "35px" : "22px"} color={active1} />
        </ContentImg>
        <Content>
          <h2>{table} desabilitadas</h2>
          <p>{total.totalDataDisabled}</p>
        </Content>
      </Card>
    </Container>
  );
};
