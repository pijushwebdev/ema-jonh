import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {

    // option: 01
    // const [cart, setCart] = useState([]);
    // const products = useLoaderData();
    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     const savedCart = [];

    //     for(const id in storedCart){
    //         const savedProducts = products.find(product => product.id === id );
            
    //         if(savedProducts){
    //             const quantity = storedCart[id];
    //         savedProducts.quantity = quantity;
    //         savedCart.push(savedProducts)
    //         }
    //     }
    //     setCart(savedCart);

    // }, [products]);
    //option: 1 end

    //option: 2 start

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleDeleteCart = (id) => {
        const remaining = cart.filter(item => item.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container grid grid-cols-1 lg:grid-cols-5'>
            <div className='product-container col-span-4 grid grid-cols-1 gap-2 m-12'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleDeleteCart={handleDeleteCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container col-span-1'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;