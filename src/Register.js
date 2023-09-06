import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase';
import "./signinstyles.css"

function Register({ onLoginClick }) {
    const [email, Setemail] = useState("");
    const [password, Setpassword] = useState("");

    const authenticate = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((usercredential) => {
                console.log(usercredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='fillup-forms'>
            <div className='signinscreen'>
                <h2 className='h2'> New ? Register Here </h2>
                <form className='form' onSubmit={authenticate}>
                    <input
                        type='email'
                        placeholder='Email here'
                        value={email}
                        onChange={(e) => Setemail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Password Here'
                        value={password}
                        onChange={(e) => Setpassword(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                    <h4>
                        <span>Already Registered? </span>
                        <span className='link' onClick={onLoginClick}>
                            Login here
                        </span>
                    </h4>
                </form>
            </div>
        </div>
    );
}

export default Register;
