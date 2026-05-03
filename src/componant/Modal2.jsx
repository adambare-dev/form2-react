import React from 'react'
//import "/index2.css"

function Modal2({ onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}>
                <h3>Successful ✅</h3>
                <p>Your form has been submitted successfully.</p>

                <button className="closemodal" onClick={onClose}
                title='close'>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Modal2;