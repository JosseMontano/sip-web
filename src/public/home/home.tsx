import { useState } from "react";
import Modal from "../../common/components/modal/modal";
import ButtonJSX from "../../common/components/button/button";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <p>welcome to home</p>

      {/*       <Btn onClick={openModal}>Open Modal</Btn> */}
      <ButtonJSX msg={"bienvenida"} onClick={openModal}/>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        children={
          <>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <input />
          </>
        }
      />
    </div>
  );
};

export default Home;
