import { useContext } from "react";
import { Link } from "react-router";

import {
  CartContext,
} from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext);

  const total =
    cartItems.reduce(
      (sum, item) =>
        sum + item.price,
      0
    );

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#0F5132",
        }}
      >
        Shopping Cart
      </h1>

      {cartItems.length ===
      0 ? (
        <p>
          Your cart is empty
        </p>
      ) : (
        <>
          {cartItems.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                style={{
                  background:
                    "#F7F8F3",
                  marginTop:
                    "20px",
                  padding:
                    "20px",
                  borderRadius:
                    "12px",
                  display: "flex",
justifyContent:
  "space-between",
flexWrap: "wrap",
gap: "15px",
                }}
              >
                <div>
                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    Rs.{" "}
                    {
                      item.price
                    }
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(
                      index
                    )
                  }
                  style={{
                    background:
                      "red",
                    color:
                      "white",
                    border:
                      "none",
                    padding:
                      "10px",
                    borderRadius:
                      "8px",
                  }}
                >
                  Remove
                </button>
              </div>
            )
          )}

          <h2
            style={{
              marginTop:
                "30px",
            }}
          >
            Total: Rs.{" "}
            {total}
          </h2>

          <Link to="/checkout">
  <button
    style={{
      marginTop: "20px",
      background: "#0F5132",
      color: "white",
      border: "none",
      padding: "15px 30px",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    Checkout
  </button>
</Link>
        </>
      )}
    </div>
  );
}