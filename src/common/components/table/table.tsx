import styled from "@emotion/styled";
import {
  active1,
  active2,
  firstMandatoryColor,
  inactive1,
  inactive2,
  thirdMandatoryColor,
} from "../../constants/colors";

const Container = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding: 20px;
  background-color: ${firstMandatoryColor};
`;

const Subtitle = styled.p`
  font-size: 0.8em;
  color: ${active1};
  font-weight: bold;
  cursor: pointer;
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
    th {
      text-transform: capitalize;
    }
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
  cursor: ${(props) => (props.active ? "pointer" : "default")};
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

type ParamsType = {
  data: unknown[];
  cols: string[];
  title: string;
  subtitle: string;
  createData: () => void;
  deleteData: (id: number) => void;
};

export const Table = ({ data, cols, title, subtitle, createData, deleteData }: ParamsType) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Subtitle onClick={()=>createData()}>{subtitle}</Subtitle>
      <TableStyle>
        <thead>
          <tr>
            {cols.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((v: any, index) => (
            <tr key={index}>
              {cols.map((col) => (
                <>
                  {col === "available" ? (
                    <StatusStyled active={v[col]} onClick={()=>deleteData(v.id)}>
                      <span>{v[col] ? "Active" : "Inactive"}</span>
                    </StatusStyled>
                  ) : (
                    <td key={col}>{v[col]}</td>
                  )}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </Container>
  );
};
