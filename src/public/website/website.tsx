/* import { useState } from "react";
import { useForm } from "react-hook-form"; */
/* import styled from "@emotion/styled"; */
/* import { zodResolver } from "@hookform/resolvers/zod"; */
/* import ButtonJSX from "../../common/components/button/button";
import Modal from "../../common/components/modal/modal"; */
/* import { loginSchema } from "./validations/signIn";
import { LoginType } from "./interfaces/login"; */
import Categories from "./components/categories/categories";
import Header from "./components/header/header";
//import Products from "./components/products/products";
import QuickForm from "./components/quickForm/quickForm";
import Comments from "./components/comments/comments";

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
      {/*<Categories />*/}
      {/*<Products />*/}
      <Comments
        title="TESTLICLOS"
        announcement="Por que la paja es saludable? En que casos es viable un trasnoche?"
        description="I had the pleasure of dining at Foodi last night, andI'm still raving about the experience! The attention todetail in presentation and service was impeccable"
        scoreTitle="Comentarios Vistos"
        rating="0.0"
        quantity="(2.0k Gatos)"
        CImage1="https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
        CImage2="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg"
        CImage3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDpzWSWvT8WQKdSxpdEaoev3e0uixuPvdw&s"
        speechText="Me pasas el chorizo?"
        speechImage=""
      />
      {<QuickForm />}
    </div>
  );
};

export default Website;
