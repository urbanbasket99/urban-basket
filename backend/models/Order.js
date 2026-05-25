const mongoose =
  require(
    "mongoose"
  );

const orderSchema =
  new mongoose.Schema(
    {
      customerName:
        {
          type:
            String,
          required:
            true,
        },

      phone: {
        type:
          String,
        required:
          true,
      },

      address:
        {
          type:
            String,
          required:
            true,
        },

      items: {
        type:
          Array,
        required:
          true,
      },

      total: {
        type:
          Number,
        required:
          true,
      },

      paymentMethod:
        {
          type:
            String,
          default:
            "COD",
        },

         orderId:
         {
          type: 
            String,
          },

      orderStatus:
        {
          type:
            String,
          default:
            "New Order",
        },
    },

    {
      timestamps:
        true,
    }
  );

module.exports =
  mongoose.model(
    "Order",
    orderSchema
  );