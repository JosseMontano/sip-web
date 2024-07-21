import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompany } from "../api/companyApi";
import { CompanyDto } from "../interface/companyRes";

const CompanyForm = () => {

    const queryClient = useQueryClient();

  const {mutate, data} = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const company = Object.fromEntries(
      formData.entries()
    ) as unknown as CompanyDto;
    
    mutate(company);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="primaryColor">Primary Color</label>
        <input type="text" id="primaryColor" name="primaryColor" />
      </div>
      <div>
        <label htmlFor="secondaryColor">Secondary Color</label>
        <input type="text" id="secondaryColor" name="secondaryColor" />
      </div>
      <button type="submit">Submit</button>
      <p>{JSON.stringify(data)}</p>
    </form>
  );
};

export default CompanyForm;
