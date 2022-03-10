import React from 'react'
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import { SetCart } from './features/counter/cartslice'
import { increment } from './features/counter/counterSlice';



const Card = ({ url, id, caption, price }) => {
    const dispatch = useDispatch()

    return (
        <div className="card rounded-lg shadow-2xl">
            <img className="object-cover h-32 w-full" src={url} alt='...' />
            <div className="flex flex-col spay-2 ml-4">
                <div className="flex items-center justify-between mt-3 ">
                    <h1 className="text-black font-bold text-xl">{caption}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
                <div className="flex  justify-between items-center my-3  ">
                    <button onClick={() =>
                    (dispatch(SetCart({ url, price, caption })

                    ), dispatch(increment()))} className=" border  rounded-lg py-2 px-5 login_button font-semibold">Add</button>


                    <h1 className="text-gray-900 font-semibold mr-3">₹{price}/-</h1>
                </div>
            </div>
        </div>
    )
}

export default Card