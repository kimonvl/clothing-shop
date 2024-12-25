import { AnyAction, Middleware } from "redux";
import {
    AddItemToCart,
    addItemToCart,
    DecreaseQuantityOfItem,
    decreaseQuantityOfItem,
    IncreaseQuantityOfItem,
    increaseQuantityOfItem,
    RemoveItemFromCart,
    removeItemFromCart,
    SetCartItems,
    setCartItems,
} from "./cart.action";
import { CartItem } from "./cart.types";
import { RootState } from "../store";
import { CategoryItem } from "../categories/categories.types";

const addItem = (items: CartItem[], product: CategoryItem) => {
    const target = items.find((item) => item.id === product.id);

    if (target) {
        return items.map((item) =>
            item.id === target.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }

    return [...items, { ...product, quantity: 1 }];
};

const increaseQuantity = (items: CartItem[], itemId: number) => {
    const target = items.find((item) => item.id === itemId);

    if (target) {
        return items.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
    } else {
        alert("Item not found to increase its quantity.");
        return [...items];
    }
};

const decreaseQuantity = (items: CartItem[], itemId: number) => {
    const target = items.find((item) => item.id === itemId);

    if (target) {
        return target.quantity <= 1
            ? removeItem(items, itemId)
            : items.map((item) =>
                  item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
              );
    } else {
        alert("Item not found to decrease its quantity.");
        return [...items];
    }
};

const removeItem = (items: CartItem[], itemId: number) => {
    return items.filter((item) => item.id !== itemId);
};

export const cartMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    if (action && typeof (action as AnyAction).type === 'string') {
        const cartItems = store.getState().cart.cartItems;
        const properAction = action as AnyAction;
        if (addItemToCart.match(properAction)) {
            store.dispatch(setCartItems(addItem(cartItems, properAction.payload)));
        }

        if (increaseQuantityOfItem.match(properAction)) {
            store.dispatch(setCartItems(increaseQuantity(cartItems, properAction.payload)));
        }

        if (decreaseQuantityOfItem.match(properAction)) {
            store.dispatch(setCartItems(decreaseQuantity(cartItems, properAction.payload)));
        }

        if (removeItemFromCart.match(properAction)) {
            store.dispatch(setCartItems(removeItem(cartItems, properAction.payload)));
        }
    }

    return next(action);
};
