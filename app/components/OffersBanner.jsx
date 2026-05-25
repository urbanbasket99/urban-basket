import {
  useEffect,
  useState,
} from "react";

export default function OffersBanner() {
  const offers = [
    "🔥 Flat 20% OFF on Dry Fruits",
    "🚚 Free Delivery Above ₹499",
    "🎁 Buy 2 Get 1 Free on Spices",
    "🥜 Premium Almonds at Best Price",
  ];

  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    const interval =
      setInterval(() => {
        setIndex(
          (prev) =>
            (prev + 1) %
            offers.length
        );
      }, 2500);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #0F5132, #198754)",
        color: "white",
        padding: "18px",
        textAlign:
          "center",
        fontSize: "22px",
        fontWeight:
          "bold",
        borderRadius:
          "20px",
        margin:
          "30px auto",
        width: "90%",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      {offers[index]}
    </div>
  );
}