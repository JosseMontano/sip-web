import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompany, getCompanies } from "./api/companyApi";
import CompanyForm from "./components/form";
import { CompanyResponse } from "./interface/companyRes";


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

  const { mutate } = useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div
    >
      <CompanyForm />

      {companies?.data.map((company) => (
        <div key={company.id}>
          <h2>{company.name}</h2>
          <p>Primary color: {company.primaryColor}</p>
          <p>Secondary color: {company.secondaryColor}</p>
          <button
            onClick={() => {
              mutate(company.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Company;
