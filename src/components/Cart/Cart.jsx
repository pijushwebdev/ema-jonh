import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        product.quantity = product.quantity || 1;
        
        totalPrice += product.price * product.quantity;
        shipping += product.shipping;
        quantity = quantity + product.quantity;

    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shipping + tax;

    return (
        <div className='cart '>
            <h4>Order Summery</h4>
            <p>Ordered Items: {quantity}</p>
            <p>Total: $ {totalPrice}</p>
            <p>Shipping: $ {shipping}</p>
            <p>tax: $ {tax.toFixed(2)}</p>
            <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;