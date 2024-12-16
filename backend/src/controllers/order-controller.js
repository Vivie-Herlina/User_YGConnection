import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Order = {
  index: async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
      const orders = await prisma.order.findMany({
        where: { userId, status: "pending" },
        include: {
          product: true,
        },
      });

      const cartWithTotalAmount = orders.map((item) => ({
        ...item,
        totalAmount: item.product.price * item.quantity,
      }));

      return res.json(cartWithTotalAmount);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  store: async (req, res) => {
    const orders = req.body;

    try {
      const createdOrders = [];

      for (const order of orders) {
        const {
          userId,
          productId,
          quantity,
          totalAmount,
          usePoints,
          pointsUsed,
        } = order;

        const userExists = await prisma.user.findUnique({
          where: { id: parseInt(userId) },
        });

        if (!userExists) {
          return res
            .status(400)
            .json({ message: `User with ID ${userId} does not exist` });
        }

        const productExists = await prisma.product.findUnique({
          where: { id: productId },
        });

        if (!productExists) {
          return res
            .status(400)
            .json({ message: `Product with ID ${productId} does not exist` });
        }

        if (usePoints) {
          const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
          });

          if (user.point < pointsUsed) {
            return res.status(400).json({ message: "Not enough points" });
          }

          await prisma.point.create({
            data: {
              userId: parseInt(userId),
              value: -pointsUsed,
            },
          });
        }

        const newOrder = await prisma.order.create({
          data: {
            userId: parseInt(userId),
            productId,
            quantity,
            totalAmount,
            usePoints,
            pointsUsed,
          },
        });

        createdOrders.push(newOrder);
      }

      return res.json({
        message: `${createdOrders.length} order(s) created successfully`,
        orders: createdOrders,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "An error occurred", error });
    }
  },

  show: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const order = await prisma.order.findUnique({
        where: { id },
        include: {
          product: true,
        },
      });

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      // Tambahkan totalAmount untuk respon
      const orderWithTotalAmount = {
        ...order,
        totalAmount: order.product.price * order.quantity,
      };

      return res.json(orderWithTotalAmount);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;

    try {
      const order = await prisma.order.findUnique({
        where: { id },
        include: {
          product: true,
        },
      });

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      const totalAmount = order.product.price * quantity;

      const updatedOrder = await prisma.order.update({
        where: { id },
        data: {
          quantity,
          totalAmount, // Perbarui totalAmount
        },
      });

      return res.json({
        message: "Order updated successfully",
        order: updatedOrder,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  destroy: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      await prisma.order.delete({
        where: { id },
      });

      return res.json({ message: "Order deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

export default Order;
