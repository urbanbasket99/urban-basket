import {
  useContext,
  useState,
} from "react";

import {
  CartContext,
} from "../context/CartContext";

export default function ProductPopup({
  product,
  onClose,
}) {
  const { addToCart } =
    useContext(CartContext);

  const [weight, setWeight] =
    useState("250g");

  if (!product) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        zIndex: 9999,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        style={{
          background:
            "white",
          borderRadius:
            "25px",
          padding: "30px",
          width: "100%",
          maxWidth: "500px",
          boxShadow:
            "0 15px 35px rgba(0,0,0,0.2)",
          position:
            "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position:
              "absolute",
            top: "15px",
            right: "15px",
            border: "none",
            background:
              "#eee",
            borderRadius:
              "50%",
            width: "35px",
            height: "35px",
            cursor:
              "pointer",
            fontSize:
              "18px",
          }}
        >
          ✕
        </button>

        {/* Image */}
        <div
          style={{
            textAlign:
              "center",
          }}
        >
          <img
            src={
              product.image
            }
            alt={
              product.name
            }
            style={{
              width:
                "220px",
              height:
                "220px",
              objectFit:
                "contain",
            }}
          />
        </div>

        {/* Product Info */}
        <h2
          style={{
            color:
              "#0F5132",
          }}
        >
          {product.name}
        </h2>

        <p
          style={{
            color:
              "#555",
          }}
        >
          Premium quality{" "}
          {product.name}
          . Fresh and
          carefully packed.
        </p>

        <h3>
          Rs.
          {product.price}
        </h3>

        {/* Weight */}
        <div
          style={{
            margin:
              "20px 0",
          }}
        >
          <h4>
            Select Weight
          </h4>

          <div
            style={{
              display:
                "flex",
              gap: "10px",
            }}
          >
            {[
              "250g",
              "500g",
              "1kg",
            ].map((w) => (
              <button
                key={w}
                onClick={() =>
                  setWeight(
                    w
                  )
                }
                style={{
                  padding:
                    "10px 18px",
                  borderRadius:
                    "10px",
                  border:
                    weight ===
                    w
                      ? "2px solid #0F5132"
                      : "1px solid #ddd",
                  background:
                    weight ===
                    w
                      ? "#EAF6EC"
                      : "white",
                  cursor:
                    "pointer",
                }}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => {
            addToCart({
              ...product,
              weight,
            });

            alert(
              `${product.name} (${weight}) added to cart`
            );

            onClose();
          }}
          style={{
            width: "100%",
            background:
              "#0F5132",
            color:
              "white",
            padding:
              "16px",
            border: "none",
            borderRadius:
              "14px",
            fontSize:
              "18px",
            cursor:
              "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}