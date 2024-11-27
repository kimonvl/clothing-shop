import { setCartItems } from "./cart.action";
import CART_ACTION_TYPES from "./cart.types";

const addItem = (items, product) => {
    const target = items.find((item) => {return item.id == product.id});

    if(target)
    {
        return items.map((item) => {
            return item.id == target.id ? {...item, quantity: item.quantity + 1} : item;
        })
    }

    return [...items, {...product, quantity: 1}];
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

const removeItem = (items, itemId) => {
    return items.filter((item) => {return item.id != itemId;}).map((item) => {return item;})
}

export const cartMiddleware = (store) => (next) => (action) => {
    const {type, payload} = action;
    const cartItems = store.getState().cart.cartItems;
    switch (type) {
        case CART_ACTION_TYPES.ADD_ITEM:
            store.dispatch(setCartItems(addItem(cartItems, payload)))
            break;
        case CART_ACTION_TYPES.INCREASE_QUANTITY:
            store.dispatch(setCartItems(increaseQuantity(cartItems, payload)))
            break;
        case CART_ACTION_TYPES.DECREASE_QUANTITY:
            store.dispatch(setCartItems(decreaseQuantity(cartItems, payload)))
            break;
        case CART_ACTION_TYPES.REMOVE_ITEM:
            store.dispatch(setCartItems(removeItem(cartItems, payload)))
            break;
        default:
            break;
    }
    
    return next(action);
}