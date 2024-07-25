import { useState } from "react";
import Modal from "./modal";
import { render, screen, fireEvent } from "@testing-library/react";

const titleModal = "Title";

const ModalWrapper = ({ showModal = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(showModal);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      children={
        <div>
          <h2>{titleModal}</h2>
        </div>
      }
    />
  );
};

describe("Modal", () => {
  test("should show modal", () => {
    render(<ModalWrapper />);
    expect(screen.getByText(titleModal)).toBeDefined();
  });

  test("should not show modal", () => {
    render(<ModalWrapper showModal={false} />);
    expect(screen.queryByText(titleModal)).toBeNull();
  });

  test("should call onClose when click on close button", () => {
    render(<ModalWrapper />);
    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(screen.queryByText(titleModal)).toBeNull();
  });
});
