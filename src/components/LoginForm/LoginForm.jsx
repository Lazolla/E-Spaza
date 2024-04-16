import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function LoginForm() {
  
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            
            <article  className='input'>
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
            </article>
            
            <article  className='input'>
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon'/>
            </article>
            
            
            <section className='remember-forgot'>
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </section>
            
            <button type='submit'>Login</button>
            <article className='register-link' >
                <p>Don't have an account? <a href="#">Register</a></p>
            </article >
            
        </form>

    </div>
  )
}

export default LoginForm;