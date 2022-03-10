import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { auth } from './firebase'

const Signin = () => {
    const [open, setopen] = useState(false)
    const history = useHistory()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(user => {
            history.push("/home")
        }).catch(error => { alert(error.message) })
    }
    const signin = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(authuser => {
            if (authuser) {
                history.push("/home")
            }
        }).catch(err => { alert(err.message) })
    }
    return (
        <div className="w-full h-screen card flex items-center justify-center flex-col">

            <div className={`flex flex-col p-5 space-y-4 w-80  ${!open ? "h-80" : "h-96"} rounded-lg bg-white`}>
                <h1 className="text-xl text-black font-bold">{open ? "Sign-Up" : "Login"}</h1>
                {open && <input className="py-3 border-b border-gray-700 outline-none" type="text" placeholder="Name" />}
                <input className="py-3 border-b border-gray-700 outline-none px-3 bg-white" type="email" value={email} onChange={(e) => (setemail(e.target.value))} placeholder='Email' />
                <input className="py-3 border-b border-gray-700 outline-none px-3 bg-white" type="password" value={password} onChange={(e) => (setpassword(e.target.value))} placeholder="password" />
                {open && <button className="bg-red-400 px-4 py-1 card  " onClick={signin}>Sign-Up</button>}
                {!open && <button className="bg-red-400 px-4 py-1 card  " onClick={login}>Login</button>}

                <div className=" text-center">
                    {!open && <p className=" text-xs">Need an Account ?<span className=" text-sm underline" onClick={() => (setopen(true))}>SIGN UP</span></p>}
                    {open && <p className=" text-xs"> Have an Account ?<span className=" text-sm underline" onClick={() => (setopen(false))}>Login</span></p>}

                </div>
            </div>

        </div>
    )
}

export default Signin