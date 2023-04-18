import React from 'react'
import dummyImage from "../Images/dummy-image.webp"

export const ProductCards = () => {

    const price = 2500000;
    const title = "This is a house.";
    return (
        <div className='product-cards  rounded-lg my-5 mx-5 pb-3 pt-2 px-2 shadow-lg shadow-purple-700 hover:shadow-custom  text-center bg-purple-700 bg-opacity-40'>
            <div>
                <img src={dummyImage} alt="dummy" />
            </div>
            <h3 className='font-bold'>{title}</h3>
            <h3 >₹ {price}</h3>
        </div>
    )
}
