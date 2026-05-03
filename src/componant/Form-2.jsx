import { useState } from "react";
//import Modal from "./Modal";
//import "/index2.css"
import Modal2 from "./Modal2";
//import "src\componant\index2.css"

// Validation helpers
function validateName(name) {
    return /^[A-Za-z\s]{4,}$/.test(name.trim());
};

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function Form_2() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Handle input change
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        let error = "";

        if (name === "name" && !validateName(value)) {
            error = "Name must be at least 4 letters";
        }

        if (name === "email" && !validateEmail(value)) {
            error = "Enter a valid email";
        };

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    }

    // Handle submit
    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {
            name: validateName(formData.name)
                ? ""
                : "Name must be at least 4 letters",
            email: validateEmail(formData.email)
                ? ""
                : "Enter a valid email",
        };

        setErrors(newErrors);

        const isValid = Object.values(newErrors).every((err) => err === "");

        if (!isValid) return;

        setIsSubmitting(true);

        // Simulate API request
        setTimeout(() => {
            setIsSubmitting(false);
            setShowModal(true);
            setFormData({ name: "", email: "" });
        }, 1500);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <small className="error">{errors.name}</small>}

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <small className="error">{errors.email}</small>}

                <br />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>

            {showModal && <Modal2 onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default Form_2;