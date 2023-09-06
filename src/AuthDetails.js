import React, { useEffect, useState } from 'react'
import { Auth, onAuthStateChanged, signOut } from 'firebase/auth'
import auth from './firebase'
import { NavLink } from 'react-router-dom'

const AuthDetails = () => {

    const [Authuser, setAuthuser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthuser(user)
            } else {
                setAuthuser(null)
            }


        })

        return () => {
            listen();
        }

    }, [])

    const usersignout = () => {
        signOut(auth).then(() => {
            console.log("sign out successful")
        }).catch(error => console.log(error))
    }
    return (
        <div>
            {Authuser ? <><p>{`Signed In as {Authuser.email}`}</p> <button>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails