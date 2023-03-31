import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    
    const {img,name,price,ratings,seller} = props.product;
    const handleAddToCart = props.handleAddToCart;

    
    return (
        <div className='border rounded-lg p-2'>
            <img className='w-full h-60 rounded-lg' src={img} alt="" />
            <div>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <h4 className='font-semibold'>Price:$ {price}</h4>
            <h4>Manufacturer: {seller}</h4>
            <h4>Rating: {ratings} stars</h4>
            </div>
            
            
            <button onClick={()=> handleAddToCart(props.product)} className='p-2 w-full bg-orange-300 rounded-lg'>
                Add to Cart
                <FontAwesomeIcon className='ml-3' icon={faCartShopping} beat style={{color: "#ba8528",}} />
                </button>
        </div>
    );
};

export default Product;