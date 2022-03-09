import React from 'react'

const Poster = () => {
    return (
        <div className="  w-full md:flex  block  justify-center items-center p-10">
            <div className=" space-y-1 max-w-md">
                <h1 className="font-bold  text-5xl text-white">Summer </h1>
                <h1 className="font-bold  text-5xl text-white">Collection</h1>
                <h1 className="font-bold  text-5xl text-red-500">2022</h1>
                <p className="text-white" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, debitis?</p>
                <button className="  px-7 py-2 border rounded-lg login_button">More</button>
            </div>
            <img className="object-contain h-52 w-52 md:block hidden " src='./Shoe1.png' alt='' />
        </div>
    )
}

export default Poster