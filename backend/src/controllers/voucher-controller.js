import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Voucher = {
  index: async (req, res) => {},
  store: async (req, res) => {},
  show: async (req, res) => {
    const userId = req.params.userId;
    try {
      const vouchers = await prisma.voucher.findMany({
        where: { userId, status: true },
      });
      return res.json(vouchers);
    } catch (error) {
      return res.status(500).json({ message: "something when wrong" });
    }
  },
  update: async (req, res) => {},
  destroy: async (req, res) => {},
};

export default Voucher;
