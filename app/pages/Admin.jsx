import {
  useEffect,
  useState,
} from "react";
import axios from "axios";

export default function Admin() {
  const [orders, setOrders] =
    useState([]);

const [
lastOrderId,
setLastOrderId
] =
useState(null);


    const [
previousOrderCount,
setPreviousOrderCount
] =
useState(0);

  const [products,
    setProducts] =
    useState([]);

  const [productName,
    setProductName] =
    useState("");

  const [productPrice,
    setProductPrice] =
    useState("");

  const [productCategory,
    setProductCategory] =
    useState("");

  const [productImage,
    setProductImage] =
    useState("");

    const [productStock,
setProductStock] =
useState("");

    const [editingId,
  setEditingId] =
  useState(null);

  const [search,
  setSearch] =
  useState("");

  const [filterCategory,
  setFilterCategory] =
  useState("All");

  

const [isLoggedIn,
setIsLoggedIn] =
useState(false);

const [username,
setUsername] =
useState("");

const [password,
setPassword] =
useState("");


  useEffect(() => {
    if (
  typeof window !==
  "undefined"
) {

  const savedLogin =
    localStorage.getItem(
      "adminLogin"
    );

  if (
    savedLogin ===
    "true"
  ) {

    setIsLoggedIn(
      true
    );
  }
}

  const fetchProducts =
    async () => {

      try {

        const response =
          await axios.get(
            "https://urban-basket-4bia.onrender.com/api/products"
          );

        setProducts(
          response.data
        );

      } catch (
        error
      ) {

        console.log(
          error
        );
      }
    };

  fetchProducts();

 const fetchOrders =
async () => {

try {

const res =
await axios.get(
"https://urban-basket-4bia.onrender.com/api/orders"
);

const fetchedOrders =
res.data;

if (
fetchedOrders.length > 0
) {

const newestOrder =
fetchedOrders[0]._id;

if (
lastOrderId &&
newestOrder !==
lastOrderId
) {

const audio =
new Audio(
"/notification.mp3"
);

audio.play();

alert(
"🔔 New Order Received!"
);
}

setLastOrderId(
newestOrder
);
}

setOrders(
fetchedOrders
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
const interval =
setInterval(
fetchOrders,
5000
);

return () =>
clearInterval(
interval
);
}, []);

  const updateStatus = (
    orderId,
    status
  ) => {

    const updatedOrders =
      orders.map(
        (order) =>
          order.id ===
          orderId
            ? {
                ...order,
                orderStatus:
                  status,
              }
            : order
      );

    setOrders(
      updatedOrders
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(
        updatedOrders
      )
    );
  };

 const addProduct =
  async () => {

    if (
      !productName ||
      !productPrice
    ) {
      alert(
        "Fill all fields"
      );
      return;
    }

    const productData =
      {
        name:
          productName,

        price:
          Number(
            productPrice
          ),

        category:
          productCategory ||
          "Grocery",

        image:
          productImage ||
          "https://via.placeholder.com/200",

          stock:
Number(
productStock
) || 0,
      };

    try {

      // EDIT PRODUCT
      if (
        editingId
      ) {

        await axios.put(
          `https://urban-basket-4bia.onrender.com/api/products/${editingId}`,
          productData
        );

        alert(
          "Product Updated ✅"
        );

      } else {

        // ADD PRODUCT
        const response =
          await axios.post(
            "https://urban-basket-4bia.onrender.com/api/products",
            productData
          );

        setProducts(
          [
            ...products,
            response.data,
          ]
        );

        alert(
          "Product Added ✅"
        );
      }

      setProductName(
        ""
      );

      setProductPrice(
        ""
      );

      setProductCategory(
        ""
      );

      setProductImage(
        ""
      );
      setProductStock(
        ""
      );
      setEditingId(
        null
      );

    } catch (
      error
    ) {

      console.log(
        error
      );

      alert(
        "Something went wrong ❌"
      );
    }
  };

      
const editProduct = (
  product
) => {

  setProductName(
    product.name
  );

  setProductPrice(
    product.price
  );

  setProductCategory(
    product.category
  );

  setProductImage(
    product.image
  );

  setEditingId(
    product.id
  );

  window.scrollTo({
    top: 0,
    behavior:
      "smooth",
  });
};
  const deleteProduct =
async (id) => {

  try {

    await axios.delete(
      `https://urban-basket-4bia.onrender.com/api/products/${id}`
    );

    setProducts(
      products.filter(
        (
          product
        ) =>
          product._id !==
          id
      )
    );

    alert(
      "Product Deleted ✅"
    );

  } catch (
    error
  ) {

    console.log(
      error
    );

    alert(
      "Delete Failed ❌"
    );
  }
};

 const dashboardRevenue =
orders.reduce(
(orderTotal,
order) =>
orderTotal +
(order.total || 0),
0
);
    const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom:
    "15px",
  borderRadius:
    "12px",
  border:
    "1px solid #ddd",
};
const handleLogin =
() => {

  if (
    username ===
      "admin" &&
    password ===
      "urban123"
  ) {

    localStorage.setItem(
      "adminLogin",
      "true"
    );

    setIsLoggedIn(
      true
    );

  } else {

    alert(
      "Wrong Credentials ❌"
    );
  }
};
if (
  !isLoggedIn
) {



  return (
    <div
      style={{
        height:
          "100vh",
        display:
          "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        background:
          "#f5f5f5",
      }}
    >
      <div
        style={{
          background:
            "white",
          padding:
            "40px",
          borderRadius:
            "20px",
          width:
            "350px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2>
          Admin Login
        </h2>

        <input
          placeholder=
            "Username"
          value={
            username
          }
          onChange={(e)=>
            setUsername(
              e.target.value
            )
          }
          style={
            inputStyle
          }
        />

        <input
          type=
            "password"
          placeholder=
            "Password"
          value={
            password
          }
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
          style={
            inputStyle
          }
        />

        <button
          onClick={
            handleLogin
          }
          style={{
            width:
              "100%",
            background:
              "#0F5132",
            color:
              "white",
            border:
              "none",
            padding:
              "14px",
            borderRadius:
              "12px",
            fontSize:
              "18px",
            cursor:
              "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
const totalOrders =
orders.length;

const totalRevenue =
orders.reduce(
(orderTotal,
order) =>
orderTotal +
(order.total || 0),
0
);

const lowStockProducts =
products.filter(
(product) =>
(product.stock || 0)
<= 5
).length;

const totalProducts =
products.length;
const lowStockItems =
products.filter(
(product) =>
(product.stock || 0)
<= 5
);

const productSales =
{};

orders.forEach(
(order) => {

  order.items?.forEach(
    (item) => {

      if (
        productSales[
          item.name
        ]
      ) {

        productSales[
          item.name
        ] += 1;

      } else {

        productSales[
          item.name
        ] = 1;
      }
    }
  );
});

const bestSellingProducts =
Object.entries(
  productSales
)
.sort(
  (a, b) =>
    b[1] - a[1]
)
.slice(0, 5);

  return (
    <div
      style={{
        padding:
          "40px",
        background:
          "#F5F7FA",
        minHeight:
          "100vh",
      }}
    >
      <h1
        style={{
          color:
            "#0F5132",
        }}
      >
        Admin Dashboard
      </h1>

      <h2>
        Revenue:
        ₹
        {totalRevenue}
      </h2>

      {/* Add Product */}
      <div
        style={{
          background:
            "white",
          padding:
            "25px",
          borderRadius:
            "20px",
          marginBottom:
            "30px",
          boxShadow:
            "0 5px 18px rgba(0,0,0,0.08)",
        }}
      >
        <h2>
          Add Product
        </h2>

        <input
          placeholder="Product Name"
          value={
            productName
          }
          onChange={(
            e
          ) =>
            setProductName(
              e.target
                .value
            )
          }
          style={
            inputStyle
          }
        />

        <input
          placeholder="Price"
          type="number"
          value={
            productPrice
          }
          onChange={(
            e
          ) =>
            setProductPrice(
              e.target
                .value
            )
          }
          style={
            inputStyle
          }
        />

        <input
          placeholder="Category"
          value={
            productCategory
          }
          onChange={(
            e
          ) =>
            setProductCategory(
              e.target
                .value
            )
          }
          style={
            inputStyle
          }
        />

        <input
          placeholder="Image URL"
          value={
            productImage
          }
          onChange={(
            e
          ) =>
            setProductImage(
              e.target
                .value
            )
          }
          style={
            inputStyle
          }
        />
        <input
  placeholder=
    "Stock Quantity"
  type="number"
  value={
    productStock
  }
  onChange={(e) =>
    setProductStock(
      e.target.value
    )
  }
  style={
    inputStyle
  }
/>

        <div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit, minmax(220px, 1fr))",
gap: "20px",
marginBottom:
"30px",
}}
>

<div
style={cardStyle}

onMouseEnter={(e)=>
e.currentTarget.style.transform =
"translateY(-8px)"
}

onMouseLeave={(e)=>
e.currentTarget.style.transform =
"translateY(0)"
}
>
<h2>
📦
</h2>

<h3>
{totalOrders}
</h3>

<p>
Total Orders
</p>
</div>

<div
style={cardStyle}

onMouseEnter={(e)=>
e.currentTarget.style.transform =
"translateY(-8px)"
}

onMouseLeave={(e)=>
e.currentTarget.style.transform =
"translateY(0)"
}
>
<h2>
💰
</h2>

<h3>
₹
{totalRevenue}
</h3>

<p>
Revenue
</p>
</div>

<div
style={cardStyle}

onMouseEnter={(e)=>
e.currentTarget.style.transform =
"translateY(-8px)"
}

onMouseLeave={(e)=>
e.currentTarget.style.transform =
"translateY(0)"
}
>
<h2>
🛒
</h2>

<h3>
{totalProducts}
</h3>

<p>
Products
</p>
</div>

<div
style={cardStyle}

onMouseEnter={(e)=>
e.currentTarget.style.transform =
"translateY(-8px)"
}

onMouseLeave={(e)=>
e.currentTarget.style.transform =
"translateY(0)"
}
>
<h2>
⚠️
</h2>

<h3>
{
lowStockProducts
}
</h3>

<p>
Low Stock
</p>
</div>

</div>
<div
style={{
background:
"#fff3cd",

padding:
"25px",

borderRadius:
"22px",

marginBottom:
"30px",

border:
"1px solid #ffe69c",
}}
>

<h2>
⚠️ Low Stock Alerts
</h2>

<div
style={{
background:
"#fff",

padding:
"25px",

borderRadius:
"22px",

marginBottom:
"30px",

boxShadow:
"0 10px 30px rgba(0,0,0,0.08)",
}}
>

<h2>
🏆 Best Selling Products
</h2>

{
bestSellingProducts
.length === 0
? (

<p>
No sales yet
</p>

)
: (

bestSellingProducts.map(
(
product,
index
) => (

<p
key={
index
}

style={{
fontSize:
"18px",

margin:
"10px 0",
}}
>
{index + 1}.
{" "}
{
product[0]
}
→
{" "}
{
product[1]
}
sold
</p>

)
)

)
}

</div>

{
lowStockItems
.length === 0
? (

<p>
All products are in stock ✅
</p>

)
: (

lowStockItems.map(
(product) => (

<p
key={
product._id
}
style={{
fontSize:
"18px",
margin:
"10px 0",
}}
>
⚠️
{
product.name
}
only
{
product.stock
}
left
</p>

)
)

)
}

</div>
        

        <button
          onClick={
            addProduct
          }
          style={{
            background:
              "#0F5132",
            color:
              "white",
            border:
              "none",
            padding:
              "14px 24px",
            borderRadius:
              "12px",
            cursor:
              "pointer",
          }}
        >
          Add Product
        </button>
      </div>

      {/* Products */}
      <div
        style={{
          background:
            "white",
          padding:
            "25px",
          borderRadius:
            "20px",
          marginBottom:
            "30px",
        }}
      >
        <h2>
          Products
        </h2>
        <input
  type="text"
  placeholder=
    "Search product..."
  value={search}
  onChange={(e) =>
    setSearch(
      e.target.value
    )
  }
  style={{
    width: "100%",
    padding: "14px",
    borderRadius:
      "12px",
    border:
      "1px solid #ddd",
    marginBottom:
      "20px",
  }}
/>
<select
  value={
    filterCategory
  }
  onChange={(e) =>
    setFilterCategory(
      e.target.value
    )
  }
  style={{
    width: "100%",
    padding: "14px",
    borderRadius:
      "12px",
    border:
      "1px solid #ddd",
    marginBottom:
      "20px",
  }}
>
  <option>
    All
  </option>

  <option>
    Grocery
  </option>

  <option>
    Dry Fruits
  </option>

  <option>
    Spices
  </option>
</select>

        {
  products
    .filter(
      (product) =>
        product.name
          ?.toLowerCase()
          .includes(
            search
              .toLowerCase()
              .trim()
          ) &&
        (
          filterCategory ===
            "All" ||
          product.category ===
            filterCategory
        )
    )
    .length === 0 ? (
      <p>
        No matching
        products
      </p>
    ) : (
      products
        .filter(
          (product) =>
            product.name
              ?.toLowerCase()
              .includes(
                search
                  .toLowerCase()
                  .trim()
              ) &&
            (
              filterCategory ===
                "All" ||
              product.category ===
                filterCategory
            )
        )
        .map(
          
            (
              product
            ) => (
              <div
                key={
                  product.id
                }
                style={{
                  display:
                    "flex",
                  justifyContent:
                    "space-between",
                  alignItems:
                    "center",
                  borderBottom:
                    "1px solid #eee",
                  padding:
                    "15px 0",
                }}
              >
                <div
                  style={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: "15px",
                  }}
                >
                  <img
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                    style={{
                      width:
                        "60px",
                      height:
                        "60px",
                      borderRadius:
                        "10px",
                      objectFit:
                        "cover",
                    }}
                  />

                  <div>
                    <h4>
                      {
                        product.name
                      }
                    </h4>

                    <p>
                      ₹
                      {
                        product.price
                      }
                    </p>
                    <p>
  📦 Stock:
  {" "}
  {
    product.stock
  }
</p>
                  </div>
                </div>
<button
  onClick={() =>
    editProduct(
      product
    )
  }
  style={{
    background:
      "#198754",
    color:
      "white",
    border:
      "none",
    padding:
      "10px 18px",
    borderRadius:
      "10px",
    cursor:
      "pointer",
    marginRight:
      "10px",
  }}
>
  Edit
</button>
                <button
                  onClick={() =>
                    deleteProduct(
                      product._id
                    )
                  }
                  
                  style={{
                    background:
                      "#dc3545",
                    color:
                      "white",
                    border:
                      "none",
                    padding:
                      "10px 18px",
                    borderRadius:
                      "10px",
                    cursor:
                      "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            )
          )
        )}
      </div>

      {/* Orders */}
      <div
        style={{
          background:
            "white",
          padding:
            "25px",
          borderRadius:
            "20px",
        }}
      >
        <h2>
          Customer Orders
        </h2>

        {orders.length ===
        0 ? (
          <p>
            No orders
          </p>
        ) : (
          orders.map(
            (order) => (
              <div
                key={
                  order.id
                }
                style={{
                  borderBottom:
                    "1px solid #ddd",
                  padding:
                    "20px 0",
                }}
              >
                <h3>
                  {
                    order.customerName
                  }
                </h3>

                <p>
                  📞{" "}
                  {
                    order.phone
                  }
                </p>

                <p>
                  📍{" "}
                  {
                    order.address
                  }
                </p>

                <p>
                  ₹
                  {
                    order.total
                  }
                </p>
                <p
style={{
fontWeight:
"bold",

color:
"#0F5132",
}}
>
🧾 Order ID:
{
order.orderId
}
</p>

                <select
  value={
    order.orderStatus ||
    "New Order"
  }

  onChange={
    async (e) => {

      const newStatus =
        e.target.value;

      try {

        await axios.put(
          `https://urban-basket-4bia.onrender.com/api/orders/${order._id}`,
          {
            orderStatus:
              newStatus,
          }
        );

        setOrders(
          orders.map(
            (
              item
            ) =>

              item._id ===
              order._id

                ? {
                    ...item,
                    orderStatus:
                      newStatus,
                  }

                : item
          )
        );

      } catch (
        error
      ) {

        console.log(
          error
        );

        alert(
          "Status update failed ❌"
        );
      }
    }
  }

  style={{
    padding:
      "10px",

    borderRadius:
      "10px",

    marginTop:
      "10px",

    width:
      "100%",
  }}
>

<option value="New Order">
New Order
</option>

<option value="Packed">
Packed
</option>

<option value="Out for Delivery">
Out for Delivery
</option>

<option value="Delivered">
Delivered
</option>

<option value="Cancelled">
Cancelled
</option>

</select>

</div>

)
)
        )}
      </div>
      <div
  style={{
    marginTop:
      "40px",
    background:
      "#fff",
    padding:
      "20px",
    borderRadius:
      "20px",
  }}
>
  <h2>
    Orders
  </h2>

  {orders.length ===
  0 ? (
    <p>
      No Orders Yet
    </p>
  ) : (
    orders.map(
      (
        order,
        index
      ) => (
        <div
          key={index}
          style={{
            border:
              "1px solid #ddd",
            borderRadius:
              "12px",
            padding:
              "20px",
            marginBottom:
              "20px",
          }}
        >
          <h3>
            {
              order.customerName
            }
          </h3>

          <p>
            📞{" "}
            {
              order.phone
            }
          </p>

          <p>
            📍{" "}
            {
              order.address
            }
          </p>

          <p>
            💳{" "}
            {
              order.paymentMethod
            }
          </p>

          <p>
            💰 ₹
            {
              order.total
            }
          </p>

          <p>
            📦 Status:
            {" "}
            {
              order.orderStatus
            }
          </p>

          <h4>
            Items:
          </h4>

          <ul>
            {order.items?.map(
              (
                item,
                i
              ) => (
                <li
                  key={i}
                >
                  {
                    item.name
                  }
                  {" "}
                  - ₹
                  {
                    item.price
                  }
                </li>
              )
            )}
          </ul>
        </div>
      )
    )
  )}
  <button
onClick={() => {

const audio =
new Audio(
"/notification.mp3"
);

audio.play();

alert(
"Notification Working 🔔"
);

}}
>
Test Notification
</button>
</div>
    </div>
  );


};
const cardStyle =
{
  background:
    "linear-gradient(135deg,#ffffff,#f8f9fa)",

  padding:
    "30px",

  borderRadius:
    "24px",

  textAlign:
    "center",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.08)",

  transition:
    "0.3s",

  border:
    "1px solid #eee",

  cursor:
    "pointer",
};

