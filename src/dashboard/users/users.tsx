import styled from "@emotion/styled";
import { Statistics } from "../../common/components/statistics/statistics";
import { Table } from "../../common/components/table/table";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:30px;
`

type ParamsType = {
}
const Users = ({}:ParamsType) => {
    return (
        <Container>
            <Statistics />
            <Table />
        </Container>
    );
}

export default Users;