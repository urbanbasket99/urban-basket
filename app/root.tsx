import FilterProvider
from "./context/FilterContext";
import {
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import CartProvider from "./context/CartContext";

export default function Root() {
  return (
    <html>

<head>

<link
rel="manifest"
href="/manifest.webmanifest"
/>

<meta
name="theme-color"
content="#0F5132"
/>

</head>

<body>
        <FilterProvider>
  <CartProvider>
    <Outlet />
  </CartProvider>
</FilterProvider>

        <ScrollRestoration />
        <script
  src="https://checkout.razorpay.com/v1/checkout.js"
  async
></script>
        <Scripts />
      </body>
    </html>
  );
}