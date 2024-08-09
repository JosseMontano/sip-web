import { useState } from 'react';
import styled from "@emotion/styled";
import Header from "./components/header/header";
import Example1 from "./components/exampleViews/example1/example1";
import Example2 from "./components/exampleViews/example2/example2";
import UseRouter from '../../common/hooks/useRouter';

const Container = styled.div`
  background-color: #EDEDED; /* Color de fondo */
  min-height: 100vh; /* Asegura que el fondo cubra toda la altura de la ventana */
  padding: 0 10%; /* Margen horizontal */
`;

const Home = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>("Todos");
  const {handleNavigation} = UseRouter()

  const handleRedirectToPage=()=>{
    handleNavigation('/website')
  }

  return (
    <div>
      <Header onButtonClick={setActiveComponent} />
      <Container>
        {activeComponent === "Todos" && <Example1 handleRedirectToPage={handleRedirectToPage}/>}
        {activeComponent === "Empresas Afiliadas" && <Example2 />}
      </Container>
    </div>
  );
};

export default Home;
