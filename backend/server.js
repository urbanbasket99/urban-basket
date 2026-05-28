const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

require("dotenv").config({
  path: __dirname + "/.env",
});

console.log(process.env.MONGO_URI);

const app =
  express();

app.use(cors());

app.use(
  express.json()
);


const productRoutes =
  require(
    "./routes/productroutes"
  );
  const orderRoutes =
  require(
    "./routes/orderRoutes"
  );

app.use(
  "/api/products",
  productRoutes
);
app.use(
  "/api/orders",
  orderRoutes
);

// MongoDB Connect
mongoose
  .connect(
    process.env
      .MONGO_URI
  )
  .then(() =>
    console.log(
      "MongoDB Connected ✅"
    )
  )
  .catch((err) =>
    console.log(
      err
    )
  );

// Test Route
app.get(
  "/",
  (req, res) => {
    res.send(
      "Urban Basket Backend Running 🚀"
    );
  }
);

const PORT =
  process.env.PORT ||
  5000;

app.listen(
  PORT,
  () => {
    console.log(
      `Server running on port ${PORT}`
    );
  }
);