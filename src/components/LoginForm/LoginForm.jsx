import React, { useState } from 'react';
import './LoginForm.css';

import { FaEye, FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

 

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (response.ok) {
                // Login successful, redirect or show success message
                console.log('Login successful');
            } else {
                // Login failed, handle error (e.g., show error message)
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <article className='input'>
                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <FaUser className='icon' />
                </article>

                <article className='input'>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <FaEye className='icon' />
                </article>

                <section className='remember-forgot'>
                    <label><input type="checkbox" />Remember me</label>
                    <a href="https://www.aautomate.com/images/easyblog_shared/May_2021/5-21-21/b2ap3_large_165017799_password_400.jpg">Forgot password?</a>
                </section>

                <button type='submit'>Login</button>

                <article className='register-link' >
                    <p>Don't have an account? <a href="https://thumbs.dreamstime.com/b/register-now-concept-button-web-site-hand-holds-wooden-tablet-text-107028457.jpg">Register</a></p>
                </article>

            </form>
        </div>
    );
}

export default LoginForm;
