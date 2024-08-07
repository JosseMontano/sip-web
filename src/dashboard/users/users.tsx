import styled from "@emotion/styled";
import { Statistics } from "../../common/components/statistics/statistics";
import { Table } from "../../common/components/table/table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

type ParamsType = {};
const Users = ({}: ParamsType) => {
  const cols = ["name", "points", "active"];
  const users = [
    { name: "Dom", points: 6000, active: true },
    { name: "Melissa", points: 5150, active: false },
  ];
  return (
    <Container>
      <Statistics />
      <Table
        cols={cols}
        data={users}
        title="Todos los usuarios"
        subtitle="Añadir un nuevo usuario"
        createCompany={() => alert("create user")}
      />
    </Container>
  );
};

export default Users;
