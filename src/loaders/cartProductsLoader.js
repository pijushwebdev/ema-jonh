import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadProduct = await fetch('products.json');
    const products = await loadProduct.json();

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
        return savedCart;
}
export default cartProductsLoader;
