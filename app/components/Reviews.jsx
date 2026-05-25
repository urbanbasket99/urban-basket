export default function Reviews() {
  const reviews = [
    {
      name:
        "Rahul Reddy",
      review:
        "Fresh groceries and very fast delivery. Loved the quality!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name:
        "Priya Sharma",
      review:
        "Best dry fruits in Hyderabad. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name:
        "Kiran Kumar",
      review:
        "Affordable prices and excellent spices quality.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section
      style={{
        padding:
          "70px 8%",
        background:
          "#F7F8F3",
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
        What Customers Say
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {reviews.map(
          (review, index) => (
            <div
              key={index}
              style={{
                background:
                  "white",
                padding:
                  "30px",
                borderRadius:
                  "20px",
                boxShadow:
                  "0 5px 18px rgba(0,0,0,0.08)",
              }}
            >
              <h3>
                {
                  review.name
                }
              </h3>

              <p
                style={{
                  color:
                    "#FFA500",
                }}
              >
                {
                  review.rating
                }
              </p>

              <p>
                "
                {
                  review.review
                }
                "
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}