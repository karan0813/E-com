import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { auth } from './firebase'

const Signin = () => {
    const history = useHistory()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(user => {
            history.push("/home")
        }).catch(error => { alert(error.message) })
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(authuser => {
            if (authuser) {
                history.push("/home")
            }
        }).catch(err => { alert(err.message) })
    }
    return (
        <>

            <div className=" w-screen login h-screen text-center">
                <h1 className="mb-5 font-bold text-2xl">Sign-In</h1>
                <div className=' lg:w-1/4 md:w-1/2 w-60  mx-auto p-5 space-y-6 border-black border'>
                    <input value={email} onChange={(e) => (setemail(e.target.value))} className="w-full px-5 py-2 rounded-lg" type="email" placeholder='Enter email' />
                    <input value={password} onChange={(e) => (setpassword(e.target.value))} className="w-full px-5 py-2 rounded-lg" type="password" placeholder='Enter password' />
                    <div>
                        <button className="  px-7 py-1 border rounded-lg login_button  mb-2 w-full  font-bold text-gray-900" onClick={login}>Login</button>
                        <button className="  px-7 py-1 border rounded-lg login_button w-full font-bold text-gray-900 " onClick={register}>Registar</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signin