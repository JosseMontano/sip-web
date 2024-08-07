import React, { useState } from 'react';
import styled from "@emotion/styled";
import Header from "./components/header/header";
import Example1 from "./components/exampleViews/example1/example1";
import Example2 from "./components/exampleViews/example2/example2";

const Container = styled.div`
  background-color: #EDEDED; /* Color de fondo */
  min-height: 100vh; /* Asegura que el fondo cubra toda la altura de la ventana */
  padding: 0 10%; /* Margen horizontal */
`;

const Home = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <Container>
      <Header onButtonClick={setActiveComponent} />
      {activeComponent === "Todos" && <Example1 />}
      {activeComponent === "Empresas Afiliadas" && <Example2 />}
    </Container>
  );
};

export default Home;
