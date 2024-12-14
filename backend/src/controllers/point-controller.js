import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Point = {
  index: async (req, res) => {
    const userId = Number(req.params.userId);

    // Validasi userId
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ message: "Invalid userId parameter." });
    }

    try {
      // Ambil data poin berdasarkan userId
      const points = await prisma.point.findMany({
        where: { userId },
        select: { value: true, createAt: true }, // Ambil hanya nilai poin
      });

      // Hitung total poin
      const totalPoint = points.reduce((sum, point) => sum + point.value, 0);

      // Kembalikan respons
      return res.status(200).json({
        data: {
          points, // Daftar poin
          totalPoint, // Total poin
        },
      });
    } catch (error) {
      console.error("Error fetching points:", error.message); // Tambahkan detail error
      return res.status(500).json({ message: "Something went wrong." });
    }
  },
};

export default Point;
