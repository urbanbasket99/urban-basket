import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("pages/Home.jsx"),

  route(
  "admin",
  "pages/Admin.jsx"
),
route(
"/my-orders",
"pages/MyOrders.jsx"
),

  route(
    "grocery",
    "pages/Grocery.jsx"
  ),

  route(
    "spices",
    "pages/Spices.jsx"
  ),

  route(
    "dryfruits",
    "pages/DryFruits.jsx"
  ),

  route(
    "cart",
    "pages/Cart.jsx"
  ),

  route(
    "checkout",
    "pages/Checkout.jsx"
  ),
] satisfies RouteConfig;