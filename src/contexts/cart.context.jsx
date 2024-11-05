import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isVisible: false,
    setIsVisible: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartItemCount: 0,
})

const addItem = (items, productToAdd) => {
    const result = items.filter((cartItem) => {return cartItem.id == productToAdd.id ;});
    if(result.length > 0)
    {
        items.find((cartItem) => {return cartItem.name == productToAdd.name;}).quantity++;
        return [...items];
    }else
    {
        let quantity = 1;
        const newProducts = items.concat({...productToAdd, quantity});
        return newProducts;
    }
}

export const CartProvider = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() =>{
        if(cartItems.length <= 0)
            return;

        const initialValue = 0;
        const sumWithInitial = cartItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            initialValue,
        ); 
        setCartItemCount(sumWithInitial);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setcartItems(addItem(cartItems, productToAdd));
    }
    
    const value  = {isVisible, setIsVisible, cartItems, addItemToCart, cartItemCount};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}