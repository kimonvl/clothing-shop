import { createContext, useState } from "react";

export const CartContext = createContext({
    isVisible: false,
})

export const CartProvider = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const value  = {isVisible, setIsVisible};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}