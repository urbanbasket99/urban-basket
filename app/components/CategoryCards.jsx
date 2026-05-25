export default function CategoryCards() {
  const categories = [
  {
    title: "Grocery",
    icon: "G",
    description: "Daily essentials & groceries",
  },
  {
    title: "Spices",
    icon: "S",
    description: "Premium masalas & spices",
  },
  {
    title: "Dry Fruits",
    icon: "D",
    description: "Healthy premium dry fruits",
  },
];
  return (
    <section
      style={{
        padding: "80px 40px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          color: "#0F5132",
          marginBottom: "50px",
        }}
      >
        Shop By Category
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              backgroundColor: "#F7F8F3",
              borderRadius: "20px",
              padding: "40px 25px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
          <div
  style={{
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#0F5132",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "34px",
    fontWeight: "bold",
    margin: "0 auto",
  }}
>
  {category.icon}
</div>

            <h3
              style={{
                marginTop: "20px",
                color: "#0F5132",
                fontSize: "28px",
              }}
            >
              {category.title}
            </h3>

            <p
              style={{
                marginTop: "10px",
                color: "#666",
              }}
            >
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}