import React, { useState } from 'react'

const Poster = () => {
    const [more, setmore] = useState(false)
    return (
        <div className="  w-full md:flex  block  justify-center items-center p-10">
            <div className=" space-y-1 max-w-md">
                <h1 className="font-bold  text-5xl text-white">Summer </h1>
                <h1 className="font-bold  text-5xl text-white">Collection</h1>
                <h1 className="font-bold  text-5xl text-red-500">2022</h1>
                <p className="text-white" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, debitis?
                    {more && "lorem amet consectetur adipisicing elit. Magnam, debitis?A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function. Though the human foot can adapt to varied terrains and climate conditions, it is still vulnerable to environmental hazards such as sharp rocks and temperature extremes"}</p>
                {!more && <button className="  px-7 py-2 border rounded-lg login_button" onClick={() => (setmore(true))}>More</button>}
                {more && <button className="  px-7 py-2 border rounded-lg login_button" onClick={() => (setmore(false))}>Less</button>}

            </div>
            <img className="object-contain h-52 w-52 md:block hidden " src='./Shoe1.png' alt='' />
        </div>
    )
}

export default Poster