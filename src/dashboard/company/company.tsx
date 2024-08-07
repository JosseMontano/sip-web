import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCompany, deleteCompany, getCompanies } from "./api/companyApi";
import CompanyForm from "./components/form";
import { CompanyResponse } from "./interface/companyRes";
import { Statistics } from "../../common/components/statistics/statistics";
import { Table } from "../../common/components/table/table";
import ButtonJSX from "../../common/components/button/button";
import Modal from "../../common/components/modal/modal";
import { CompanyDTO } from "./interface/companyDTO";
import { companySchema } from "./validations/company";

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

  /*   const { mutate } = useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  }); */

  const { mutate } = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });

  const cols = ["name", "primaryColor", "secondaryColor"];

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onSubmit = (data: CompanyDTO) => {
    console.log(data);
    mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Statistics />

      {companies?.data != undefined && (
        <>
          <Table
            cols={cols}
            data={companies?.data}
            title="Todas las compañias"
            subtitle="Añadir una nueva compañia"
            createCompany={openModal}
          />
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        children={<CompanyForm onSubmit={onSubmit}/>}
      />

      {/*       <button
            onClick={() => {
              mutate(company.id);
            }}
          >
            delete
          </button> */}
    </Container>
  );
};

export default Company;
