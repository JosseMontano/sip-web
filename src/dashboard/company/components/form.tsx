
import styled from "@emotion/styled";
import { CompanyDTO } from "../interface/companyDTO";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companySchema } from "../validations/company";
import ButtonJSX from "../../../common/components/button/button";

type Params = {
  onSubmit: (data: CompanyDTO) => void
};

const Input = styled.input<{ error?: string }>`
  border: 1px solid ${(props) => (props.error ? "red" : "black")};
`;

const CompanyForm = ({ onSubmit }: Params) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyDTO>({
    resolver: zodResolver(companySchema),
    values: {} as CompanyDTO,
  });


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Agregar compañia</h2>
      <Input
        type="text"
        placeholder="name"
        {...register("name")}
        error={errors.name?.message}
      />
      <p>{errors.name?.message}</p>
      <Input
        type="text"
        placeholder="primaryColor"
        {...register("primaryColor")}
        error={errors.primaryColor?.message}
      />
      <p>{errors.primaryColor?.message}</p>
      <Input
        type="text"
        placeholder="secondaryColor"
        {...register("secondaryColor")}
        error={errors.secondaryColor?.message}
      />
      <p>{errors.secondaryColor?.message}</p>
      <ButtonJSX msg={"Guardar"} />
    </form>
  );
};

export default CompanyForm;
