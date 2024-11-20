import { createContext, useState,  useReducer } from "react";

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

export const CART_ITEM_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    
}

const INITIAL_STATE = {
    isVisible: false,
    cartItems: [],
    cartItemCount: 0,
    cartItemTotal: 0,
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case CART_ITEM_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const CartProvider = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const {cartItems,
        cartItemCount,
        cartItemTotal} = state;
    
    console.log("cartcontext" , state);
    const updateCartItems = (cartItems) => {
        const newCartCount = cartItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            0,
        );

        const newCartTotal = cartItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
            0,
        );

        const payload = {
            cartItems: cartItems,
            cartItemCount: newCartCount,
            cartItemTotal: newCartTotal,
        }

        dispatch({type: CART_ITEM_ACTION_TYPES.SET_CART_ITEMS, payload: payload});
    }

    const addItemToCart = (productToAdd) => {
        console.log("adding state", state);
        const items = addItem(cartItems, productToAdd);
        updateCartItems(items);
    }

    const decreaseQuantityOfCartItem = (itemId) => {
        const items = decreaseQuantity(cartItems, itemId);
        updateCartItems(items);
    }

    const increaseQuantityOfCartItem = (itemId) => {
        const items = increaseQuantity(cartItems, itemId);
        updateCartItems(items);
    }    

    const removeCartItem = (itemId) => {
        const items = removeItem(cartItems, itemId);
        updateCartItems(items);
    }
    
    const value  = {isVisible, setIsVisible, cartItems, addItemToCart, cartItemCount, cartItemTotal, decreaseQuantityOfCartItem, removeCartItem, increaseQuantityOfCartItem};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}