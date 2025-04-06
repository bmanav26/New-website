import React, { useState } from "react";

function Login() {
    const [form, setForm] = useState({email: "", password: ""});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logged in user", form);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input name = "email" type = "email" placeholder="Email" onChange={handleSubmit} required/>
                <input name = "password" type = "password" placeholder="Password" onChange={handleSubmit} required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;