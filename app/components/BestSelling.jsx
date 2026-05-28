import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { FilterContext } from "../context/FilterContext";

import almondsImg from "../assets/images/almonds.jpg";
import cashewImg from "../assets/images/cashew.jpg";
import masalaImg from "../assets/images/masala.jpg";
import turmericImg from "../assets/images/turmeric.jpg";


import ProductPopup from "./ProductPopup";

export default function BestSelling() {
  const { addToCart } =
    useContext(CartContext);

    
  const { category } =
    useContext(FilterContext);

    const [selectedProduct,
  setSelectedProduct] =
  useState(null);

  const [adminProducts,
  setAdminProducts] =
  useState([]);

 const [wishlist,
setWishlist] =
useState([]);

  useEffect(() => {

if (
  typeof window !==
  "undefined"
) {

  const savedWishlist =
    JSON.parse(
      localStorage.getItem(
        "wishlist"
      )
    ) || [];

  setWishlist(
    savedWishlist
  );
}

  const fetchProducts =
    async () => {

      try {

        const response =
          await axios.get(
            "https://urban-basket-1-dzt0.onrender.com/api/products"
          );

        setAdminProducts(
          response.data
        );

      } catch (
        error
      ) {

        console.log(
          error
        );
      }
    };

  fetchProducts();

}, []);


  const [search, setSearch] =
    useState("");



  const products = [
    {
      id: 1,
      name: "Premium Almonds",
      price: 399,
      oldPrice: 499,
      rating: 4.8,
      category: "Dry Fruits",
      image: almondsImg,
    },
    {
      id: 2,
      name: "Cashew Nuts",
      price: 499,
      oldPrice: 599,
      rating: 4.7,
      category: "Dry Fruits",
      image: cashewImg,
    },
    {
      id: 3,
      name: "Biryani Masala",
      price: 149,
      oldPrice: 199,
      rating: 4.9,
      category: "Spices",
      image: masalaImg,
    },
    {
      id: 4,
      name: "Turmeric Powder",
      price: 99,
      oldPrice: 149,
      rating: 4.6,
      category: "Spices",
      image: turmericImg,
    },
  ];


const toggleWishlist =
(product) => {

  const exists =
    wishlist.some(
      (item) =>
        item._id ===
        product._id
    );

  let updatedWishlist;

  if (exists) {

    updatedWishlist =
      wishlist.filter(
        (item) =>
          item._id !==
          product._id
      );

  } else {

    updatedWishlist =
      [
        ...wishlist,
        product,
      ];
  }

  setWishlist(
    updatedWishlist
  );

  localStorage.setItem(
    "wishlist",
    JSON.stringify(
      updatedWishlist
    )
  );
};


  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor:
          "#F7F8F3",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "46px",
          color: "#0F5132",
          marginBottom: "50px",
        }}
      >
        Best Selling Products
      </h2>
      <ProductPopup
  product={
    selectedProduct
  }
  onClose={() =>
    setSelectedProduct(
      null
    )
  }
/>

      <div
        style={{
          display: "grid",
gridTemplateColumns:
  "repeat(auto-fit, minmax(260px, 1fr))",
gap: "25px",
        }}
      >
        {adminProducts.map(
          (product) => (
            <div
              key={product._id}
              onClick={() =>
  setSelectedProduct(
    product
  )
}
              style={{

background:
"#fff",

borderRadius:
"20px",

padding:
"18px",

boxShadow:
"0 8px 20px rgba(0,0,0,0.08)",

transition:
"0.3s ease",

cursor:
"pointer",

border:
"1px solid #f0f0f0",

overflow:
"hidden",

}}
              onMouseEnter={(
                e
              ) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(
                e
              ) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.12)";
              }}
              
            >
              {/* Discount */}
              <div
                style={{
                  position:
                    "absolute",
                  background:
                    "red",
                  color:
                    "white",
                  padding:
                    "8px 12px",
                  borderRadius:
                    "0 0 10px 0",
                  fontWeight:
                    "bold",
                  zIndex: 10,
                }}
              >
                10% OFF
              </div>

              {/* Image */}
              <div
                style={{
                  background:
                    "#EAF6EC",
                  height:
                    "220px",
                  display:
                    "flex",
                  justifyContent:
                    "center",
                  alignItems:
                    "center",
                }}
              >
                <button
  onClick={() =>
    toggleWishlist(
      product
    )
  }
  style={{
    position:
      "absolute",

    top:
      "15px",

    right:
      "15px",

    border:
      "none",

    background:
      "white",

    borderRadius:
      "50%",

    width:
      "42px",

    height:
      "42px",

    cursor:
      "pointer",

    fontSize:
      "22px",

    zIndex:
      99,
  }}
>
  {wishlist.some(
    (item) =>
      item._id ===
      product._id
  )
    ? "❤️"
    : "🤍"}
</button>
                <img
src={product.image}
alt={product.name}

style={{

width:
"100%",

height:
"220px",

background:
"#f8f8f8",

objectFit:
"cover",

borderRadius:
"14px",

}}


                />
              </div>

              {/* Details */}
              <div
                style={{
                  padding:
                    "18px",
                }}
              >
                <span
                  style={{
                    background:
                      "#0F5132",
                    color:
                      "white",
                    padding:
                      "6px 14px",
                    borderRadius:
                      "20px",
                    fontSize:
                      "13px",
                  }}
                >
                  {
                    product.category
                  }
                </span>

                <h3
style={{

fontSize:
"18px",

fontWeight:
"600",

marginTop:
"12px",

color:
"#222",

}}
>
{product.name}
</h3>
                <p
                  style={{
                    color:
                      "#FFA500",
                  }}
                >
                  ⭐{" "}
                  {
                    product.rating
                  }
                </p>

                <div
                  style={{
                    marginTop:
                      "10px",
                  }}
                >
             <p
style={{

fontSize:
"20px",

fontWeight:
"bold",

color:
"#0F5132",

}}
>
₹{product.price}
</p>
                  <p
  style={{
    fontWeight:
      "bold",
    color:
      product.stock === 0
        ? "red"
        : product.stock <= 5
        ? "orange"
        : "green",
  }}
>
  {product.stock ===
  0
    ? "Out of Stock ❌"
    : product.stock <=
      5
    ? `Only ${product.stock} Left 🔥`
    : "In Stock ✅"}
</p>

                  <span
                    style={{
                      textDecoration:
                        "line-through",
                      color:
                        "#888",
                      marginLeft:
                        "10px",
                    }}
                  >
                    Rs.{" "}
                    {
                      product.oldPrice
                    }
                  </span>
                </div>

                <button
  style={{
  background:
    product.stock === 0
      ? "#d1d5db"
      : "linear-gradient(135deg,#0F5132,#198754)",

  color:
    "white",

  border:
    "none",

  padding:
    "16px",

  width:
    "100%",

  borderRadius:
    "16px",

  fontWeight:
    "700",

  fontSize:
    "16px",

  boxShadow:
    "0 8px 18px rgba(25,135,84,0.25)",

  cursor:
    product.stock === 0
      ? "not-allowed"
      : "pointer",
}}
>
                  {product.stock ===
0
? "Out of Stock"
: "Add to Cart"}
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}