import { getShoppingCart } from "../utilities/fakedb";

const productsCustomLoader = async () =>{
    const customProducts = await fetch('products.json');
    const products = await customProducts.json();

    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
        const addedCart = products.find(pd => pd.id === id)
        if(addedCart){
            const quantity = storedCart[id]
            addedCart.quantity = quantity
            savedCart.push(addedCart)

        }
    }

    return savedCart;
}

export default productsCustomLoader;