import React from 'react'
import Card from './Card'

const CardContainer = () => {
    const ShoeData = [
        {
            id: 1,
            url: "https://www.teahub.io/photos/full/125-1258173_jumpman-wallpaper-shoes-black-background.jpg",
            caption: "Jorden 12",
            price: 2000

        },
        {
            id: 2,
            url: "https://shop-airjordan.com/wp-content/uploads/2021/12/Jordan-12-Retro-The-Master.jpg",
            caption: "Jorden  11",
            price: 2500

        },
        {
            id: 3,
            url: "http://blog.finishline.com/wp-content/uploads/2016/09/AIR-JORDAN-12-RETRO-WOOL-DARK-GREY-BLACK-PAIR.jpg",
            caption: "Jorden 12 retro",
            price: 3500

        },
        {
            id: 4,
            url: "https://i.ebayimg.com/images/g/gkoAAOSwfxFbhp37/s-l640.jpg",
            caption: "Jorden retro",
            price: 1500

        },
        {
            id: 5,
            url: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Air-Jordan-Shoes-Desktop-Wallpaper.jpeg",
            caption: "Jorden Air",
            price: 4500

        },
        {
            id: 6,
            url: "https://shop-airjordan.com/wp-content/uploads/2021/12/Jordan-12-Retro-The-Master.jpg",
            caption: "Jorden  11",
            price: 2500

        },
        {
            id: 7,
            url: "http://blog.finishline.com/wp-content/uploads/2016/09/AIR-JORDAN-12-RETRO-WOOL-DARK-GREY-BLACK-PAIR.jpg",
            caption: "Jorden 12 retro",
            price: 3500

        },
        {
            id: 8,
            url: "https://shop-airjordan.com/wp-content/uploads/2021/12/Jordan-12-Retro-The-Master.jpg",
            caption: "Jorden  11",
            price: 2500

        },
    ]
    return (
        <div className="  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-fit px-10 mx-auto">
            {ShoeData.map((val) => (
                <div key={val.id} className=" p-10">
                    <Card url={val.url} caption={val.caption} price={val.price} id={val.id} />
                </div>
            ))}
        </div>
    )
}

export default CardContainer