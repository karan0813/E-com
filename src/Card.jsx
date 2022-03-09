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
                <h1 className="text-black font-bold text-xl">{caption}</h1>
                <h1 className="text-gray-800 font-semibold ">₹{price}/-</h1>
                <div className="flex  justify-between items-center m-3  ">
                    <Popup trigger={<button className="   border  rounded-full login_button"><svg
                        onClick={() =>
                        (dispatch(SetCart({ url, price, caption })

                        ), dispatch(increment()))}
                        xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg></button>} position="right center">
                        <div className="bg-white border" > Added To Cart !!</div>
                    </Popup>

                    <button className="  px-7 py-2 border rounded-lg login_button">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card