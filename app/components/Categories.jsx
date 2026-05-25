import {
  useContext,
} from "react";

import {
  FilterContext,
} from "../context/FilterContext";

export default function Categories() {
  const { setCategory } =
    useContext(FilterContext);

  const categories = [
    {
      name: "Grocery",
      emoji: "🛒",
    },
    {
      name: "Spices",
      emoji: "🌶️",
    },
    {
      name:
        "Dry Fruits",
      emoji: "🥜",
    },
    {
      name:
        "Rice & Pulses",
      emoji: "🍚",
    },
    {
      name:
        "Snacks",
      emoji: "🍪",
    },
    {
      name:
        "Beverages",
      emoji: "🥤",
    },
  ];

  return (
    <section
      style={{
        padding:
          "50px 8%",
      }}
    >
     <h2
        style={{
          textAlign:
            "center",
          fontSize:
            "38px",
          color:
            "#0F5132",
          marginBottom:
            "35px",
        }}
      >
        Shop By Category
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "20px",
        }}
      >
        {categories.map(
          (category) => (
            <div
              key={
                category.name
              }
              onClick={() =>
                setCategory(
                  category.name
                )
              }
              style={{
                background:
                  "white",
                borderRadius:
                  "20px",
                padding:
                  "25px",
                textAlign:
                  "center",
                cursor:
                  "pointer",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,0.08)",
                transition:
                  "0.3s",
              }}
              onMouseEnter={(
                e
              ) => {
                e.currentTarget.style.transform =
                  "translateY(-6px)";
              }}
              onMouseLeave={(
                e
              ) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize:
                    "48px",
                }}
              >
                {
                  category.emoji
                }
              </div>

              <h3>
                {
                  category.name
                }
              </h3>
            </div>
          )
        )}
      </div>
    </section>
  );
}