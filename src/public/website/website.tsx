/* import { useState } from "react";
import { useForm } from "react-hook-form"; */
/* import styled from "@emotion/styled"; */
/* import { zodResolver } from "@hookform/resolvers/zod"; */
/* import ButtonJSX from "../../common/components/button/button";
import Modal from "../../common/components/modal/modal"; */
/* import { loginSchema } from "./validations/signIn";
import { LoginType } from "./interfaces/login"; */
import Header from "./components/header/header";

/* const Input = styled.input<{ error?: string }>`
  border: 1px solid ${(props) => (props.error ? "red" : "black")};
`; */

const Website = () => {
/*   const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    values: {} as LoginType,
  });

  const onSubmit = (data: LoginType) => {
    console.log(data);
  }; */

  return (
    <div>
      {/*       <ButtonJSX msg={"login"} onClick={openModal} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        children={
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <Input type="text" {...register("email")} error={errors.email?.message} />
            <p>{errors.email?.message}</p>
            <Input type="text" {...register("password")} error={errors.password?.message}/>
            <p>{errors.password?.message}</p>
            <ButtonJSX msg={"submit"} />
          </form>
        }
      /> */}
      <Header />
    </div>
  );
};

export default Website;
