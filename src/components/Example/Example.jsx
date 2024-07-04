import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal"; // Ensure you import the Modal component
import "./Example.css";

function Example(props) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="colab" style={{ backgroundImage: `url(${props.img})` }}>
            {!showModal && (
                <Button type="example" text="Zobrazit projekt" onClick={handleOpenModal} />
            )}
            <Modal show={showModal} onClose={handleCloseModal}>
                <h1>Modal</h1>
            </Modal>
        </div>
    );
}

export default Example;