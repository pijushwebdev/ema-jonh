import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({product,handleDeleteCart}) => {
    const {img,price,quantity,name,id} = product;

    return (
        <div className='flex justify-between bg-slate-300 items-center rounded-md shadow-md p-2'>
            
            <div className='flex'>
                <div className='w-20 mr-2'>
                    <img className='w-full rounded-md' src={img} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-xl'>{name}</h1>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>

            <div className='w-14 h-14 rounded-full bg-red-200 flex items-center'>
                <button onClick={() => handleDeleteCart(id)} className='w-full h-full'><FontAwesomeIcon icon={faTrashCan} size='xl' style={{color: "#ca501c",}} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;