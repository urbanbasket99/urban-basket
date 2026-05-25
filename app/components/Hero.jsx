export default function Hero() {
  return (
    <section
  style={{
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "40px 8%",
 minHeight: "65vh",
  background:
    "#F5FAF5",
}}
    >
      {/* Left Content */}
      <div
        style={{
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            background: "#0F5132",

            color: "white",
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: "30px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          🚚 Free Delivery Above Rs.499
        </div>

        <h1
          style={{
           fontSize:
"clamp(36px, 4.5vw, 60px)",
lineHeight: "1.15",
maxWidth: "650px",
            color: "#0F5132",
            
            marginBottom: "20px",
          }}
        >
          Fresh Grocery,
          <br />
          Premium Spices &
          <br />
          Dry Fruits Delivered
          <br />
          in Hyderabad
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Fresh | Pure | Trusted
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            style={{
              background:
                "#0F5132",
              color: "white",
              border: "none",
              padding:
                "16px 35px",
              borderRadius:
                "12px",
              fontSize:
                "18px",
              cursor:
                "pointer",
            }}
          >
            Shop Now
          </button>

          <button
            style={{
              background:
                "white",
              color:
                "#0F5132",
              border:
                "2px solid #0F5132",
              padding:
                "16px 35px",
              borderRadius:
                "12px",
              fontSize:
                "18px",
              cursor:
                "pointer",
                transition:
  "all 0.3s ease",
cursor: "pointer",

            }}
          >
            Today's Offers
          </button>
        </div>
      </div>

      {/* Right Side Design */}
      <div
        style={{
         width:
"clamp(220px, 28vw, 380px)",

height:
"clamp(220px, 28vw, 380px)",
          background:
            "#0F5132",
            boxShadow:
  "0 20px 40px rgba(15,81,50,0.25)",

border:
  "8px solid #EAF6EC",
          borderRadius:
            "50%",
          display: "flex",
          justifyContent:
            "center",
          alignItems:
            "center",
          color: "white",
          fontSize: "120px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        🛒
      </div>
    </section>
  );
}