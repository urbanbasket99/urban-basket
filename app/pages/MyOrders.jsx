import {
useEffect,
useState
}
from "react";

import axios
from "axios";

export default
function MyOrders() {

const [
orders,
setOrders
] = useState([]);

useEffect(() => {

const fetchOrders =
async () => {

try {

const res =
await axios.get(
"http://localhost:5000/api/orders"
);

setOrders(
res.data
);

} catch (
error
) {

console.log(
error
);

}
};

fetchOrders();

}, []);

const getColor =
(status) => {

switch (
status
) {

case "Pending":
return "orange";

case "Packed":
return "gold";

case "Out for Delivery":
return "blue";

case "Delivered":
return "green";

default:
return "gray";
}
};

return (

<div
style={{
padding:
"40px",
}}
>

<h1>
My Orders
</h1>

{
orders.map(
(order) => (

<div

key={
order._id
}

style={{

border:
"1px solid #ddd",

padding:
"20px",

borderRadius:
"12px",

marginBottom:
"20px",
}}
>

<h3>
Order ID:
{
order.orderId
}
</h3>

<p>
Total:
₹
{
order.total
}
</p>

<p>
Payment:
{
order.paymentMethod
}
</p>

<p
style={{
fontWeight:
"bold",

color:
getColor(
order.status
),
}}
>

🚚
{
order.orderStatus
}

</p>

</div>

)
)
}

</div>

);
}