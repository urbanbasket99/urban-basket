const mongoose =
  require(
    "mongoose"
  );

const productSchema =
  new mongoose.Schema(
    {
      name: {
        type:
          String,
        required:
          true,
      },

      price: {
        type:
          Number,
        required:
          true,
      },

      category: {
        type:
          String,
        required:
          true,
      },

      image: {
        type:
          String,
      },

      stock: {
        type:
          Number,
        default:
          10,
      },

      rating: {
        type:
          Number,
        default:
          4.5,
      },
    },

    {
      timestamps:
        true,
    }
  );

module.exports =
  mongoose.model(
    "Product",
    productSchema
  );