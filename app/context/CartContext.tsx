import {
  createContext,
  useState,
} from "react";

export const CartContext =
  createContext<any>(null);

export default function CartProvider({
  children,
}: any) {
  const [cartItems, setCartItems] =
    useState<any[]>([]);

  const addToCart = (
    product: any
  ) => {
    setCartItems(
      (prev: any[]) => [
        ...prev,
        product,
      ]
    );
  };

  const removeFromCart = (
    index: number
  ) => {
    setCartItems(
      cartItems.filter(
        (
          _: any,
          i: number
        ) => i !== index
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}