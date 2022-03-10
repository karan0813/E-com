import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Cart from './Cart'
import { selectCount } from './features/counter/counterSlice'
import { selectuser } from './features/counter/userslice'

const Nav = () => {
    const history = useHistory()
    const user = useSelector(selectuser)
    const dispatch = useDispatch()
    const [Opennav, setOpennav] = useState(false)
    const cartcount = useSelector(selectCount)
    const name = user[0].username.slice(0, 1);
    const [out, setout] = useState(false)

    const logout = () => {

        history.push("/")


    }
    return (
        <>
            <nav className='flex items-center justify-between w-full px-20  h-20'>
                <img src="" alt="" />
                <div className="md:flex hidden items-center space-x-3 font-bold text-xl ">

                </div>
                <div className="flex items-center space-x-5">
                    <div className="flex items-center" >
                        <p>{cartcount}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {!Opennav ? <svg onClick={() => (setOpennav(true))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg> : <svg onClick={() => (setOpennav(false))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>}
                    </div>
                    <div className="flex justify-center items-center login_button px-2 py-1 border rounded-full space-x-2 ">
                        <button className="  font-bold  text-xl capitalize"  >{name}</button>
                        {!out ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => (setout(true))} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg> : <svg onClick={() => (setout(false))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>}
                    </div>
                    {out && <div className="absolute top-12 right-10 w-fit h-fit bg-gray-500 rounded-lg">
                        <h1 className="p-2 font-bold text-lg  cursor-pointer " onClick={logout}>Logout</h1>
                    </div>}
                </div>

            </nav>
            {Opennav && <Cart />}
        </>
    )
}

export default Nav