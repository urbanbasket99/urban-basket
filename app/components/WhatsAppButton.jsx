export default function WhatsAppButton() {
  const phoneNumber =
    "917396959547";

  const message =
    "Hello Urban Basket, I want to order groceries.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        background:
          "#25D366",
        color: "white",
        width: "65px",
        height: "65px",
        borderRadius:
          "50%",
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        textDecoration:
          "none",
        fontSize: "32px",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.2)",
        zIndex: 9999,
        transition:
          "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "scale(1)";
      }}
    >
      💬
    </a>
  );
}