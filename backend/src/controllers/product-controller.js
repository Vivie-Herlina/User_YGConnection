import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Product = {
  index: async (req, res) => {
    const { name } = req.params;
    try {
      let product;

      if (name) {
        product = await prisma.product.findMany({
          where: { artist: { name } },
          include: {
            artist: true,
            sales: true,
            category: true,
          },
        });
      } else {
        product = await prisma.product.findMany({
          include: { sales: true, category: true },
        });
      }
      return res.json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "failed fetch product" });
    }
  },

  store: async (req, res) => {
    const { productName, price, category, point, description, stock, artist } =
      req.body;
    const image = req.files[0].path;

    try {
      await prisma.product.create({
        data: {
          artistId: parseInt(artist),
          name: productName,
          price: Number(price),
          categoryId: parseInt(category),
          description,
          stock: parseInt(stock),
          point: parseInt(point),
          image: image,
        },
      });

      return res.json({ message: "product inserted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "insert product failed" });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "product id not found" });
    }
    console.log("ada");

    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(id) },
        include: {
          artist: true,
          category: true,
        },
      });

      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }

      return res.json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price, description, stock } = req.body;

    if (!id) {
      return res.status(400).json({ message: "product id not found" });
    }

    try {
      await prisma.product.update({
        where: { id },
        data: {
          name,
          price,
          description,
          stock,
        },
      });

      return res.json({ message: "update product success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "update product failed" });
    }
  },
  destroy: async (req, res) => {
    const id = req.params.id;

    try {
      await prisma.product.delete({ where: { id } });
      return res.json({ message: "product deleted" });
    } catch (error) {
      console.log(error);
      return res.status().json({ message: "failed delete product" });
    }
  },
};

export default Product;
