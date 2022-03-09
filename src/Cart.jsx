import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from './features/counter/cartslice'

const Cart = () => {
    const cartData = useSelector(selectCart)
    console.log(cartData);

    return (
        <>
            <div className="lg:w-1/3 md:w-fit w-full h-20 card absolute top-12 md:right-48">
                <h1 className="flex space-x-1 m-5 items-center">
                    <span className="text-xl font-blod"> Your Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                </h1>
                {cartData.map((val, index) => (
                    <div key={index} className="w-full card flex items-center p-5 ">
                        <img className="w-32 h-32  object-cover" src={val.url} alt="" />
                        <div className="m-5 space-y-3">
                            <div className="flex  items-center justify-between w-60">
                                <h1 className=" font-bold text-xl capitalize">{val.caption}</h1> <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg></span>
                            </div>
                            <h1 className="font-semibold text-gray-900">₹ {val.price}/-</h1>
                            <button className="  px-7 py-1 border rounded-lg login_button w-40 ">More</button>
                        </div>
                    </div>
                ))}


            </div>

        </>
    )
}

export default Cart