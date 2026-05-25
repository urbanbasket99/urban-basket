export default function Footer() {
  return (
    <footer
      style={{
        background:
          "#0F5132",
        color: "white",
        padding: "50px 8%",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div>
          <h2>
            Urban Basket
          </h2>

          <p>
            Fresh groceries,
            spices & dry
            fruits delivered
            in Hyderabad.
          </p>
        </div>

        <div>
          <h3>
            Quick Links
          </h3>

          <p>Home</p>
          <p>Cart</p>
          <p>Checkout</p>
        </div>

        <div>
          <h3>
            Contact
          </h3>

          <p>
            📍 Hyderabad
          </p>

          <p>
            📞 +91
            7396959547
          </p>
        </div>
      </div>

      <hr
        style={{
          margin:
            "30px 0",
          opacity: 0.2,
        }}
      />

      <p
        style={{
          textAlign:
            "center",
        }}
      >
        © 2026 Urban Basket.
        All Rights Reserved.
      </p>
    </footer>
  );
}