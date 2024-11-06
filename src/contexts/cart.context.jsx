import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isVisible: false,
    setIsVisible: () => null,
    cartItems: [],
    addItemToCart: () => null,
    cartItemCount: 0,
    cartItemTotal: 0,
    increaseQuantityOfCartItem: () => null,
})

const addItem = (items, productToAdd) => {
    const target = items.find((item) => {return item.id == productToAdd.id});

    if(target)
    {
        return items.map((item) => {
            return item.id == target.id ? {...item, quantity: item.quantity + 1} : item;
        })
    }

    return [...items, {...productToAdd, quantity: 1}];
}

const removeItem = (items, itemId) => {
    return items.filter((item) => {return item.id != itemId;}).map((item) => {return item;})
}

const decreaseQuantity = (items, itemId) => {
    const target = items.find((item) => {return item.id == itemId;});

    if(target)
    {
        return target.quantity <= 1 ? removeItem(items, itemId) : items.map((item) => {return item.id == itemId ? {...item, quantity: item.quantity - 1} : item;});
    }else
    {
        alert("Item not found to decrease it's quantity.");
        return [...items];
    }
}

const increaseQuantity = (items, itemId) => {
    const target = items.find((item) => {return item.id == itemId;});

    if(target)
    {
        return items.map((item) => {return item.id == itemId ? {...item, quantity: item.quantity + 1} : item;});
    }else
    {
        alert("Item not found to increase it's quantity.");
        return [...items];
    }
}

export const CartProvider = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartItemTotal, setCartItemTotal] = useState(0);

    useEffect(() =>{
        const initialValue = 0;
        const sumWithInitial = cartItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            initialValue,
        ); 
        setCartItemCount(sumWithInitial);
    }, [cartItems]);

    useEffect(() =>{
        const initialValue = 0;
        const sumWithInitial = cartItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
            initialValue,
        ); 
        setCartItemTotal(sumWithInitial);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setcartItems(addItem(cartItems, productToAdd));
    }

    const decreaseQuantityOfCartItem = (itemId) => {
        setcartItems(decreaseQuantity(cartItems, itemId));
    }

    const increaseQuantityOfCartItem = (itemId) => {
        setcartItems(increaseQuantity(cartItems, itemId));
    }    

    const removeCartItem = (itemId) => {
        setcartItems(removeItem(cartItems, itemId));
    }
    
    const value  = {isVisible, setIsVisible, cartItems, addItemToCart, cartItemCount, cartItemTotal, decreaseQuantityOfCartItem, removeCartItem, increaseQuantityOfCartItem};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}