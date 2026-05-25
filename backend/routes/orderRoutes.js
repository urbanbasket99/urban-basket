const express =
  require(
    "express"
  );

const router =
  express.Router();

const Order =
  require(
    "../models/Order"
  );

// GET ALL ORDERS
router.get(
  "/",
  async (
    req,
    res
  ) => {
    try {

      const orders =
        await Order.find()
          .sort({
            createdAt:
              -1,
          });

      res.json(
        orders
      );

    } catch (
      error
    ) {

      res.status(
        500
      ).json({
        message:
          error.message,
      });
    }
  }
);

// ADD ORDER
router.post(
  "/",
  async (
    req,
    res
  ) => {
    try {

      const order =
        new Order(
          req.body
        );

      const savedOrder =
        await order.save();

      res.status(
        201
      ).json(
        savedOrder
      );

    } catch (
      error
    ) {

      res.status(
        400
      ).json({
        message:
          error.message,
      });
    }
  }
);

// UPDATE ORDER STATUS
router.put(
  "/:id",
  async (
    req,
    res
  ) => {

    try {

      const updatedOrder =
        await Order.findByIdAndUpdate(

          req.params.id,

          {
            orderStatus:
              req.body.orderStatus,
          },

          {
            new: true,
          }
        );

      res.json(
        updatedOrder
      );

    } catch (
      error
    ) {

      res.status(
        500
      ).json({
        message:
          error.message,
      });
    }
  }
);

module.exports =
  router;