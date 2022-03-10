import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from './features/counter/cartslice'

const Cart = () => {
    const cartData = useSelector(selectCart)
    var Tprice = 0;
    console.log(Tprice);
    console.log("hello");
    // const sumWithInitial = Tprice.reduce((partialSum, a) => partialSum + a, 0);

    console.log(Tprice);

    return (
        <>
            <div className="lg:w-1/3 md:w-fit w-full h-96 card absolute top-12 md:right-48 overflow-y-scroll ">
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
                                <h1 className=" font-bold text-xl capitalize">{val.caption}</h1>
                            </div>
                            <div className="hidden">{Tprice = Tprice + val.price}</div>

                            <h1 className="font-semibold text-gray-900">₹ {val.price}/-</h1>
                            <button className="   w-fit font-semibold ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                ))}

                <footer className=" top-16 login absolute p-5w-1/3  text-gray-900 capitalize font-bold">total : ₹{Tprice}/-</footer>
            </div>

        </>
    )
}

export default Cart