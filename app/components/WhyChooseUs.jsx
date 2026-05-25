export default function WhyChooseUs() {
  const features = [
    {
      icon: "🚚",
      title:
        "Fast Delivery",
      desc:
        "Quick grocery delivery in Hyderabad",
    },
    {
      icon: "🥬",
      title:
        "Fresh Products",
      desc:
        "Fresh groceries and premium quality spices",
    },
    {
      icon: "💳",
      title:
        "Secure Payment",
      desc:
        "Safe UPI, Card and COD payments",
    },
    {
      icon: "📞",
      title:
        "24/7 Support",
      desc:
        "Always available for customer help",
    },
  ];

  return (
    <section
      style={{
        padding:
          "70px 8%",
      }}
    >
      <h2
        style={{
          textAlign:
            "center",
          fontSize:
            "40px",
          color:
            "#0F5132",
          marginBottom:
            "40px",
        }}
      >
        Why Choose Urban
        Basket?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
        }}
      >
        {features.map(
          (
            feature,
            index
          ) => (
            <div
              key={index}
              style={{
                background:
                  "white",
                borderRadius:
                  "20px",
                padding:
                  "30px",
                textAlign:
                  "center",
                boxShadow:
                  "0 5px 18px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontSize:
                    "50px",
                }}
              >
                {
                  feature.icon
                }
              </div>

              <h3>
                {
                  feature.title
                }
              </h3>

              <p>
                {
                  feature.desc
                }
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}