import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Checkout = {
  index: async (req, res) => {
    const userId = parseInt(req.params.userId);
    try {
      const cart = await prisma.cart.findMany({
        where: { userId },
        include: {
          product: true,
        },
      });
      return res.json(cart);
    } catch (error) {}
  },
  store: async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
      // Check if the user exists
      const userExists = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!userExists) {
        return res.status(400).json({ message: "User does not exist" });
      }

      // Check if the cart item already exists
      const existingCartItem = await prisma.cart.findUnique({
        where: {
          userId_productId: {
            userId,
            productId,
          },
        },
      });

      let cartItem;

      if (existingCartItem) {
        // If the cart item exists, increment the quantity
        cartItem = await prisma.cart.update({
          where: {
            userId_productId: {
              userId,
              productId,
            },
          },
          data: {
            quantity: existingCartItem.quantity + quantity,
          },
        });
      } else {
        // If the cart item does not exist, create a new one
        cartItem = await prisma.cart.create({
          data: {
            userId,
            productId,
            quantity,
          },
        });
      }

      return res.json({
        message: `${quantity >= 1 ? "Products" : "Product"} added to checkout`,
        cartItem,
      });
    } catch (error) {
      console.error("Error updating cart:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  show: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      return res.json({ message: "success update event" });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  destroy: async (req, res) => {},
};

export default Checkout;
