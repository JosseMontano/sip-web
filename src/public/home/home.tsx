//import { useState } from "react";
//import Modal from "../../common/components/modal/modal";
//import ButtonJSX from "../../common/components/button/button";
import BaseCC from "../../common/components/categoryCollection/baseCC";

const Home = () => {
  /* Btn Example
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  */


  return (
    <div>
      {/* Examples

      <p>welcome to home</p>

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
      */}

      <BaseCC />
    </div>
  );
};

export default Home;
