import { Link } from "react-router";
import { useContext, useState} from "react";
import {
  CartContext,
} from "../context/CartContext";
import {
  FilterContext,
} from "../context/FilterContext";

export default function Navbar() {

  const { cartItems } =
  useContext(CartContext);

  const { setCategory } =
  useContext(FilterContext);
   
  const [search,
setSearch] =
useState("");

  return (
    <nav
  style={{
    backgroundColor:
      "#0F5132",
    padding: "15px 20px",
    display: "flex",
    flexDirection:
      "column",
    gap: "15px",
    alignItems: "center",
    position: "sticky",
top: 0,
zIndex: 999,
boxShadow:
  "0 4px 12px rgba(0,0,0,0.1)",
  }}
>
  {/* Logo */}
  <h2
    style={{
      color: "white",
      margin: 0,
    }}
  >
    Urban Basket
  </h2>

  {/* Search */}
  <input
  type="text"
  placeholder=
    "Search groceries..."
  value={
    search
  }
 onChange={(e) => {

  const value =
    e.target.value;

  setSearch(
    value
  );

  window.dispatchEvent(
    new CustomEvent(
      "searchUpdate",
      {
        detail:
          value,
      }
    )
  );
}}
/>
  {/* Menu */}
  <div
    style={{
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent:
        "center",
    }}
  >
    <Link
      to="/"
      onClick={() =>
        setCategory("All")
      }
      style={linkStyle}
    >
      Home
    </Link>

    <Link
      to="/"
      onClick={() =>
        setCategory(
          "Grocery"
        )
      }
      style={linkStyle}
    >
      Grocery
    </Link>

    <Link
      to="/"
      onClick={() =>
        setCategory(
          "Spices"
        )
      }
      style={linkStyle}
    >
      Spices
    </Link>

    <Link
      to="/"
      onClick={() =>
        setCategory(
          "Dry Fruits"
        )
      }
      style={linkStyle}
    >
      Dry Fruits
    </Link>
    <Link
to="/my-orders"
style={linkStyle}
>
My Orders

</Link>

    <Link
      to="/cart"
      style={{
        background:
          "white",
        color:
          "#0F5132",
        padding:
          "10px 16px",
        borderRadius:
          "30px",
        textDecoration:
          "none",
        fontWeight:
          "bold",
      }}
    >
      Cart (
      {cartItems.length})
    </Link>
  </div>
</nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};