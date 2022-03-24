import { useState } from "react";
import { products } from "../data/products";
import { OnChangeArgs, ProductInCart } from "../interfaces/interfaces";
export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});
    
    const onProductCountChange = ({ count, product, hello = 'que paso rey'}: OnChangeArgs) => {
        // console.log('count:_ ', count);

        setShoppingCart(oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
            if(Math.max(productInCart.count + count , 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // borrar
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            //    // delete oldShoppingCart[product.id];
            return rest;

            // if( count === 0) {
            //     const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            //    // delete oldShoppingCart[product.id];
            //     return rest;
            // }
            // return {
            //     ...oldShoppingCart,
            //     [product.id]: {...product, count}
            // }
        }) 
    }

    return { 
        products,
        shoppingCart,
        onProductCountChange
    }
}