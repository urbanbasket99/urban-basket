import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

export default function Checkout() {
  const { cartItems } =
    useContext(CartContext);

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const total =
    cartItems.reduce(
      (sum, item) =>
        sum + item.price,
      0
    );
const minimumOrder =
299;

const deliveryCharge =
total <
minimumOrder
? 30
: 0;

const finalTotal =
total +
deliveryCharge;
  const handleOrder =
    async () => {

      const paymentMethod =
        document.querySelector(
          "#paymentMethod"
        )?.value;

      const name =
        document.querySelector(
          "#name"
        )?.value;

      const phone =
        document.querySelector(
          "#phone"
        )?.value;

      const address =
        document.querySelector(
          "#address"
        )?.value;

      if (
        !name ||
        !phone ||
        !address
      ) {
        alert(
          "Please fill all details"
        );
        return;
      }
      const orderId =
"UB" +
Math.floor(
10000 +
Math.random()
* 90000
);


      // SAVE ORDER TO MONGODB
      try {

        await axios.post(
          "https://urban-basket-1-dzt0.onrender.com/api/orders",
          {
            customerName:
              name,

            phone:
              phone,

            address:
              address,

            items:
              cartItems,

            total:
              total,
              
              orderId:
                orderId,

            paymentMethod:
              paymentMethod,

                          
              orderStatus:
              "New Order",
          }
        );

      } catch (
        error
      ) {

        console.log(
          error
        );

        alert(
          "Order Failed ❌"
        );

        return;
      }

      // COD FLOW
      if (
        paymentMethod ===
        "Cash on Delivery"
      ) {

const orderDate =
new Date()
.toLocaleString();
        alert(

`✅ Order Placed Successfully

🧾 Order Receipt

Order ID:
${orderId}

📅 Date:
${orderDate}

🛍 Items:
${cartItems
.map(
(item) =>

`${item.name}
x${item.quantity}
- ₹${item.price}`
)
.join("\n")}

💰 Subtotal:
₹${total}

🚚 Delivery:
₹${deliveryCharge}

💵 Final Total:
₹${finalTotal}

💳 Payment:
${paymentMethod}

Thank you for shopping
with Urban Basket ❤️`

);
const customerName =
document.querySelector(
"#name"
)?.value;

const customerPhone =
document.querySelector(
"#phone"
)?.value;

const customerAddress =
document.querySelector(
"#address"
)?.value;

const orderItems =
cartItems
.map(
(item) =>

`${item.name}
x${item.quantity || 1}
- ₹${item.price}`
)
.join("\n");

const whatsappMessage =
`🛒 New Urban Basket Order

👤 Name:
${customerName}

📞 Phone:
${customerPhone}

📍 Address:
${customerAddress}

🛍 Items:
${orderItems}

💰 Subtotal:
₹${total}

🚚 Delivery:
₹${deliveryCharge}

💵 Final Total:
₹${finalTotal}
💳 Payment:
${paymentMethod}
`;

window.open(

`https://wa.me/917396959547?text=${encodeURIComponent(
whatsappMessage
)}`,

"_blank"
);
        setOrderPlaced(
          true
        );

        return;
      }

      // RAZORPAY FLOW
      const options = {
        key:
          "rzp_test_SrUJ9SpV6qoP5m",

        amount:
          total * 100,

        currency:
          "INR",

        name:
          "Urban Basket",

        description:
          "Order Payment",

        handler:
          function (
            response
          ) {

            alert(
              "Payment Successful ✅"
            );

            setOrderPlaced(
              true
            );
          },
      };

      if (
        !window.Razorpay
      ) {

        alert(
          "Razorpay failed to load"
        );

        return;
      }

      const razorpay =
        new window.Razorpay(
          options
        );

      razorpay.open();
    };
const orderItems =
cartItems
.map(
(item) =>

`${item.name}
x${item.quantity}
- ₹${item.price}`
)
.join("%0A");

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1100px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "30px",
      }}
    >
      {/* LEFT */}
      <div>
        <h2>
          Checkout
        </h2>

        <input
          id="name"
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          id="phone"
          placeholder="Phone Number"
          style={inputStyle}
        />

        <textarea
          id="address"
          placeholder="Address"
          style={{
            ...inputStyle,
            height: "100px",
          }}
        />

        <select
          id="paymentMethod"
          style={inputStyle}
        >
          <option>
            Cash on Delivery
          </option>

          <option>
            UPI Payment
          </option>
        </select>

        <button
          onClick={
            handleOrder
          }
          style={{
            background:
              "#0F5132",
            color:
              "white",
            border:
              "none",
            padding:
              "16px",
            borderRadius:
              "12px",
            cursor:
              "pointer",
            width:
              "100%",
            fontSize:
              "18px",
          }}
        >
          Place Order
        </button>

        {orderPlaced && (
          <h3
            style={{
              color:
                "green",
              marginTop:
                "20px",
            }}
          >
            Order Placed
            Successfully 🎉
          </h3>
        )}
      </div>

      {/* RIGHT */}
      <div>
        <h2>
          Order Summary
        </h2>

        {cartItems.map(
          (
            item,
            index
          ) => (
            <div
              key={index}
              style={{
                display:
                  "flex",
                justifyContent:
                  "space-between",
                marginBottom:
                  "12px",
              }}
            >
              <span>
                {item.name}
              </span>

              <span>
                ₹
                {
                  item.price
                }
              </span>
            </div>
          )
        )}

        <hr />

       <p>
Subtotal:
₹{total}
</p>

<p>
Delivery:
{
deliveryCharge === 0
? " FREE 🚚"
: ` ₹${deliveryCharge}`
}
</p>

<h3>
Final Total:
₹{finalTotal}
</h3>

{
total < 299 && (

<div
style={{
background:
"#d1fae5",

padding:
"12px",

marginTop:
"15px",

borderRadius:
"10px",

textAlign:
"center",

fontWeight:
"bold",

color:
"#065f46",
}}
>
🚚 Add ₹
{
299 - total
}
more for
FREE delivery
</div>

)
}
      </div>
    </div>
  );
  {
/*{
total < 299 && (

<p
style={{
background:
"#d1fae5",

padding:
"12px",

borderRadius:
"12px",

marginTop:
"15px",

fontWeight:
"bold",

textAlign:
"center",

color:
"#065f46",
}}
>
🚚 Add ₹
{
299 - total
}
more to get
FREE delivery
</p>

)
}*/
}
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom:
    "14px",
  borderRadius:
    "10px",
  border:
    "1px solid #ccc",
};