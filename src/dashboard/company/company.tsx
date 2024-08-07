import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styled from "@emotion/styled";
import { createCompany, deleteCompany, getCompanies, getStatistics } from "./api/companyApi";
import CompanyForm from "./components/form";
import { CompanyResponse } from "./interface/companyRes";
import { Statistics } from "../../common/components/statistics/statistics";
import { Table } from "../../common/components/table/table";
import Modal from "../../common/components/modal/modal";
import { CompanyDTO } from "./interface/companyDTO";
import { StatisticsResponse } from "./interface/statisticsRes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Company = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: companies,
    isError,
    error,
  } = useQuery<CompanyResponse>({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
  });

  const { data: totalInfo } = useQuery<StatisticsResponse>({
    queryKey: ["companies-statistics"],
    queryFn: () => getStatistics(),
  });

  const { mutate } = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });

  const { mutate: mutateToDelete } = useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      queryClient.invalidateQueries({ queryKey: ["companies-statistics"] });

    },
  });

  const cols = ["name", "primaryColor", "secondaryColor", "available"];

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onSubmit = (data: CompanyDTO) => {
    mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Container>
      {totalInfo?.data != undefined && (
        <Statistics table="compañias" total={totalInfo?.data}/>
      )}


      {companies?.data != undefined && (
        <>
          <Table
            cols={cols}
            data={companies?.data}
            title="Todas las compañias"
            subtitle="Añadir una nueva compañia"
            createData={openModal}
            deleteData={(id: number) => {
              mutateToDelete(id);
            }}
          />
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        children={<CompanyForm onSubmit={onSubmit} />}
      />
    </Container>
  );
};

export default Company;
