import React, { useState } from "react";

function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: ""});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered User:", form);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit = {handleSubmit}>
                <input name = "username" placeholder="username" onChange={handleChange} required />
                <input name = "email" type="email" placeholder="email" onChange={handleChange} required />
                <input name = "password" type="password" placeholder="password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;