import React from "react";

const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "8px",
    maxWidth: "90%",
    boxSizing: "border-box",
    overflow: "auto",
};

const FormSentModal = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <div style={modalOverlayStyle} onClick={closeModal}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                <div className="p-4">
                    <h2 className="text-center font-bold text-lg mb-4 text-black">Thanks for getting in touch!</h2>
                    <p className="text-center">We will contact you soon.</p>
                    <div className="flex justify-center mt-10">
                        <button
                            className="px-4 py-2 text-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 hover:bg-gray-700"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSentModal;
