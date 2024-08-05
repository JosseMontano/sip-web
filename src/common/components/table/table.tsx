import styled from "@emotion/styled";
import {
  active1,
  active2,
  firstMandatoryColor,
  fourthMandatoryColor,
  inactive1,
  inactive2,
  thirdMandatoryColor,
} from "../../constants/colors";



const Container = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding: 20px;
  background-color: ${firstMandatoryColor};
`;

const TableStyle = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;

  thead tr {
    color: ${thirdMandatoryColor};
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }

  th,
  td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
`;

const StatusStyled = styled.td<{ active: boolean }>`
  padding: 10px;

  span {
    display: block;
    border: 1px solid ${(props) => (props.active ? active1 : inactive1)};
    color: ${(props) => (props.active ? active1 : inactive1)};
    width: 70px;
    font-weight: bolder;
    padding: 5px;
    text-align: center;
    background-color: ${(props) => (props.active ? active2 : inactive2)};
  }
`;

type ParamsType = {};
export const Table = ({}: ParamsType) => {
  return (
    <Container>
      <h2>Todos los usuarios</h2>
      <TableStyle>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dom</td>
            <td>6000</td>
            <StatusStyled active={true}>
              <span>Active</span>
            </StatusStyled>
          </tr>
          <tr>
            <td>Melissa</td>
            <td>5150</td>
            <StatusStyled active={false}>
              <span>Inactive</span>
            </StatusStyled>
          </tr>
        </tbody>
      </TableStyle>
    </Container>
  );
};
