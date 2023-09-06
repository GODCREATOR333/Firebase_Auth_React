import React, { useState } from 'react';
import './signinstyles.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase';

function LogIn({ onLoginClick }) {


    const [email, Setemail] = useState("")
    const [password, Setpassword] = useState("")

    const authenticate = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((usercredential) => {
                console.log(usercredential)
            }).catch((error) => {
                console.log(error)
            })


        //sign in user 
    }

    return (
        <div className='fillup-forms'>
            <div className='signinscreen'>
                <h2 className='h2'>Sign In Here</h2>
                <form className='form' onSubmit={authenticate}>
                    <input type='email' placeholder='Email here' value={email} onChange={(e) => Setemail(e.target.value)} />
                    <input type='password' placeholder='Password Here' value={password} onChange={(e) => Setpassword(e.target.value)} />
                    <button type='submit'>Submit</button>
                    <h4>
                        <span className='link' onClick={onLoginClick}>
                            Back to Register
                        </span>
                    </h4>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
