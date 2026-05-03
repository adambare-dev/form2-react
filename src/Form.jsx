import React, { useState } from 'react';
import './index.css'
import Modal from './Modal';
//validation logics
function validateName(name) {
    const rgx = /^[A-Za-z\s]{4,}$/;
    return rgx.test(name.trim());
}
function validateEmail(email) {
    //return email.includes("@") && email.includes(".");
    //const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}/;
    const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}/;
    return rgx.test(email);
}
function Form() {
    //forom data
    const [formData, setFormDats] = useState({
        name: "",
        email: ""
    });
    const [submit, setSubmit] = useState(false);
    //errors
    const [errors, setErrors] = useState({});
    //modal

    const [showModal, setSohowModal] = useState(false);

    function hundleOnachange(e) {
        const { name, value } = e.target;
        setFormDats({ ...formData, [name]: value });


        /*  setErrors((prev) => {
             return { ...prev, [name]: value }
         }); */
        let errorInput = "";
        if (name === "name") {
            if (!validateName(value.trim())) {
                errorInput = "invalid userName"
            }
        }
        if (name === "email") {
            if (!validateEmail(value.trim())) {
                errorInput = "invalid email"
            }
        };

        setErrors((prev) => {
            return { ...prev, [name]: errorInput }
        });
    }
    function hundleSubmit(e) {
        e.preventDefault();
        let newError = {};
        if (!validateName(formData.name)) {
            newError.name = "invalid name"
        };
        if (!validateEmail(formData.email)) {
            newError.email = "invalid email"
        };

        const isFormValid = validateName(formData.name)
            && validateEmail(formData.email);

        if (!isFormValid) {
            setErrors(newError);
            console.log('error occured please try again!');
            return
        };

        setSubmit(true);
        console.log(formData);
        setFormDats({
            name: "",
            email: ""

        });
        setTimeout(() => {
            setSubmit(false)
            setSohowModal(true);

        }, 2000);


    };
    function closeModal() {
        setSohowModal(false);
    }

    return (

        <div>
            <form action="" onSubmit={hundleSubmit}>
                <h3>sing up</h3>
                <input type="text"
                    name='name'
                    placeholder='enter your name'
                    value={formData.name}
                    onChange={hundleOnachange}

                />
                <br />
                {errors && <small className={errors && "error"}>{errors.name}</small>}
                <br /><br />
                <input type="text"
                    name='email'
                    placeholder='enter your email'
                    value={formData.email}
                    onChange={hundleOnachange}

                />
                <br />
                {errors && <small className={errors && "error"}>{errors.email}</small>}
                <br />
                <button type='submit' disabled={submit}>{submit ? "submitting..." : "submit"}</button>
            </form>
            {showModal && <Modal onclose={closeModal} />}
        </div>
    )
}

export default Form