import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        for(const id in storedCart){
            const savedProducts = products.find(product => product.id === id );
            
            if(savedProducts){
                const quantity = storedCart[id];
            savedProducts.quantity = quantity;
            savedCart.push(savedProducts)
            }
        }
        setCart(savedCart);

    }, [products]);
    
    const handleAddToCart = (product) => {
        const newCart = [...cart,product];

        
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container grid grid-cols-1 lg:grid-cols-5'>
            <div className='product-container col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-2 m-12'>
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        ></Product>)    
                }
            </div>
            <div className='cart-container col-span-1'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to={'/orders'}>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;